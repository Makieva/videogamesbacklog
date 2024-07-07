import React from "react";
import './LoginButton.css';
import { Link } from "react-router-dom";

const LoginButton = () => {
    return (
        <Link to={`connexion`}><button className="loginButton">Se connecter</button></Link>
    )
};

export default LoginButton;