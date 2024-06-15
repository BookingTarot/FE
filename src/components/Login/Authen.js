import React, { createContext, useState, useContext, useEffect } from "react";

// Create a Context for the auth state
export const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {

    // Check localStorage when initinalize
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
    else {
      localStorage.removeItem('user');
    }
}, [user]);


  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Create a custom hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}
