import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './Authen';

function ProtectedRoute({ element: Component, role, ...rest }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.roleId !== role) {
    return <Navigate to="/" />;
  }

  return <Component {...rest} />;
}

export default ProtectedRoute;
