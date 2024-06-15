import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Login/Authen";

export default function LogoutButton() {
    const { setUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    };

    return (
        <button className="btn btn-secondary text-white" onClick={handleLogout}>
            <i className="bi bi-box-arrow-right fs-3"></i>
            <span className="fs-2 ms-3">Logout</span>
        </button>
    );
};