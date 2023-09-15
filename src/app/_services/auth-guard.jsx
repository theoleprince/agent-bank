import React from 'react';
import { useNavigate } from "react-router-dom";
import TokenService from "./token_service";



const withAuth = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    const isAuthenticated = TokenService.getToken();
    console.log(isAuthenticated)

    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      return navigate("/sign-in");
    }
  };
};

export default withAuth;