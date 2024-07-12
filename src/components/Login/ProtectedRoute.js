import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Authen";

function ProtectedRoute({ element: Component, role, ...rest }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (role && user.roleId !== role) {
    if (user.roleId === 3) {
      return <Navigate to="/tarotReaderDashboard" />;
    } else if (user.roleId === 1) {
      return <Navigate to="/tarotAdmin" />;
    } else {
      return <Navigate to="/" />;
    }
  }

  return <Component {...rest} />;
}

export default ProtectedRoute;
