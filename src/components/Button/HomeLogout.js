import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Login/Authen"; // Adjust the path as per your project structure

export default function HomeLogout() {
    const { setUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    };

    return (
        <a href="/" className="dropdown-item text-dark" onClick={handleLogout}>
            <span>Logout</span>
        </a>
    );
}