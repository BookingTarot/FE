import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./EditInformation.css";
import { useAuth } from "../../../components/Login/Authen";

export default function CustEditInfor() {
  const { user, setUser } = useAuth();
  const [formData, setFormData] = useState({
    userId: user?.userId,
    lastName: "",
    firstName: "",
    dateOfBirth: "",
    phoneNumber: "",
    gender: true,
    email: "",
    password: "",
    address: "",
    isActive: true,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const date = new Date(user.dateOfBirth);
      const isValidDate = !isNaN(date);
      const formattedUser = {
        ...user,
        dateOfBirth: isValidDate ? date.toISOString().split("T")[0] : "",
      };
      console.log("Formatted user:", formattedUser);
      setFormData(formattedUser);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://tarot.somee.com/api/User", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      setUser(data);
      toast.success("Thông tin cập nhật thành công!");
      setTimeout(() => {
        navigate("/login"); // Redirect to home or any other route
      }, 1000);
    } else {
      toast.error("Thông tin cập nhật không thành công!");
    }
  };

  return (
    <div>
      <div className="back-to-home rounded d-none d-sm-block">
        <Link to="/" className="btn btn-icon btn-primary">
          <i data-feather="home" className="icons"></i>
        </Link>
      </div>
      <ToastContainer />
      <div className="full-height center-content">
        <div className="cardEditInfo">
          <h2 className="fw-bold mb-2 text-center">Edit Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group-edit mb-4">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group-edit mb-4">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group-edit mb-4">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group-edit mb-4">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group-edit mb-4">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value={true}>Male</option>
                <option value={false}>Female</option>
              </select>
            </div>
            <div className="input-group-edit mb-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group-edit mb-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group-edit mb-4">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="mb-4 w-100">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
