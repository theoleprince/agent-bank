import { useDispatch } from "react-redux";
import { loginUser } from "../../stores/actions/authActions";
import "./SingIn.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function SingIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ username: "", password: "" });

  const validateInput = (field, value) => {
    let newErrors = { ...errors };
    if (value.length < 2) {
      newErrors[field] = "Ce champ doit comporter au moins 2 caractères.";
    } else {
      newErrors[field] = "";
    }
    setErrors(newErrors);
  };

  const handleLogin = () => {
    // Effectuez un appel API de connexion
    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid credentials");
        }
        return response.json();
      })
      .then((data) => {
        // Déclenchez l'action de connexion réussie
        dispatch(loginUser({ username, password }));
        navigate("/user");
      })
      .catch((error) => {
        // Gérez l'erreur de connexion
        console.error(error.message);
      });
  };

  return (
      <div className="bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  validateInput("username", e.target.value);
                }}
              />
              <small className="error-message">{errors.username}</small>
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
            <button onClick={handleLogin} className="sign-in-button" disabled={errors.username || errors.password}>
              Sign In
            </button>
          </form>
        </section>
      </div>
  );
}

export default SingIn;