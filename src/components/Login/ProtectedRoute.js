import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './Authen';

const ProtectedRoute = ({ roles, element }) => {
  const { user } = useContext(AuthContext);

  console.log('User:', user); // Print user object to check role
  console.log('Required roles:', roles); 

  if (!user) {
    console.log('No user found, redirecting to login');
    return <Navigate to="/login" replace />;
  }

  if (roles && !roles.includes(user.roleId)) {
    console.log('User role not authorized, redirecting to home');
    return <Navigate to="/" replace />;
  }

  console.log('User is authorized');
  return element;
};

export default ProtectedRoute;
