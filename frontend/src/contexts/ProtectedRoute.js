import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
    return <Navigate to="/connexion" />;
  }

  return children;
};

export default ProtectedRoute;
