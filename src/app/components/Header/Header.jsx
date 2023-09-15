import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "./../../../assets/img/argentBankLogo.png";
import TokenService from "../../_services/token_service";
import { logoutUser } from "../../../stores/actions/authActions";

function Header() {
  const userToken = TokenService.getUser();
  const state = useSelector((state) => state.auth );
  console.log(state)
  const user = userToken ? userToken : state?.user?.user
  console.log(user)
  const isAuthenticated = userToken ? true : state?.isAuthenticated;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
    TokenService.signOut();
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      {isAuthenticated  ? (
        <div>
          <a className="main-nav-item" href="./user">
            <i className="fa fa-user-circle"></i>
            {user?.firstName}
          </a>
          <a className="main-nav-item pointeur" onClick={logout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        </div>
      ) : (
        <div>
          <a className="main-nav-item" href="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      )}
    </nav>
  );
}

export default Header;
