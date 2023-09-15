import { useDispatch } from "react-redux";
import { loginUser } from "../../stores/actions/authActions";
import "./SingIn.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService  from "../_services/user_service";
import TokenService  from "../_services/token_service";



function SingIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateInput = (field, value) => {
    let newErrors = { ...errors };
    if (value.length < 2) {
      newErrors[field] = "Ce champ doit comporter au moins 2 caractères.";
    } else {
      newErrors[field] = "";
    }
    setErrors(newErrors);
  };

  const handleLogin = (e) => {
      // Empêcher le comportement par défaut du formulaire
    e.preventDefault()
    UserService.login({
      email: email,
      password: password,
    }).then((data) => {
        console.log(data)
        // Déclenchez l'action de connexion réussie        
        TokenService.saveToken(data.body.token)
        UserService.getUserProfile(data.body.token).then((res) => {
          console.log(res)
          TokenService.saveUser(res.body)
          dispatch(loginUser({ email, password, user: res.body }));
          navigate("/user");
        })
        
        
      })
      .catch((error) => {
        // Gérez l'erreur de connexion
        console.error(error.message);
      });
  };

  return (
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleLogin}>
            <div className="input-wrapper">
              <label htmlFor="email">Username</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => {
                  setUsername(e.target.value);
                  validateInput("email", e.target.value);
                }}
              />
              <small className="error-message">{errors.email}</small>
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validateInput("password", e.target.value);
                }}
              />
              <small className="error-message">{errors.password}</small>
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" disabled={errors.email || errors.password}>
              Sign In
            </button>
          </form>
        </section>
      </main>
  );
}

export default SingIn;