import React from "react";
import "./LoginButton.css";
import { useAuth } from "../contexts/AuthContext";

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <button onClick={logout} className="loginButton">
      Se deconnecter
    </button>
  );
};

export default LogoutButton;
