import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Authen";

function ProtectedRoute({ element: Component, role, ...rest }) {
  const { user } = useAuth();

  console.log("ProtectedRoute", user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  switch (role) {
    case 1:
      if (user.roleId === 3) {
        return <Navigate to="/tarotReaderDashboard" />;
      }
      break;
    case 2:
      if (user.roleId === 1) {
        console.log("admin", user.roleId === 1);
        return <Navigate to="/tarotAdmin" />;
      }
      break;
    default:
      return <Navigate to="/" />;
  }

  return <Component {...rest} />;
}

export default ProtectedRoute;
