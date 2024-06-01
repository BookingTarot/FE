import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = ({ openLoginModal }) => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    dateOfBirth: "",
    phoneNumber: "",
    gender: "0", // Ensure gender is a string
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API call to submit form data
      const response = await fetch("https://localhost:7218/api/User/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful
        console.log("Registration successful!");
        // Optionally redirect to the login modal
        openLoginModal(true); // Call the function to open the login modal
      } else {
        // Registration failed
        console.error("Registration failed.");
      }
    } catch (error) {
      console.error("Error submitting registration:", error);
    }
  };

  return (
    <div className="full-height center-content">
      <div className="card">
        <h2 className="fw-bold mb-2 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="input-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-container">
            <div className="input-group">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-container">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-container">
            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="0">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <button type="submit" className="mb-2 w-100">
            Register
          </button>
        </form>
        <div className="sign-up-link">
          <p>
            Already have an account? <Link to="/login">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
