import React, { useState } from "react";

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
    <div>
      <div
        className="modal fade login-div-modal contact-form01"
        id="registerModal"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <button
                type="button"
                className="btn-close colis-btn"
                data-bs-dismiss="modal"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1-.708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="modla-contact">
                <h2>Sign Up for & consult your favourite Tarot Reader</h2>
                <div className="form-div-sections mt-5 d-inline-block w-100 px-5">
                  <form name="fmn" onSubmit={handleSubmit}>
                    <div className="row" data-aos="fade-down">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            placeholder="Enter your Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            placeholder="Enter your First Name"
                            className="form-control"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            name="password"
                            placeholder="Enter your Password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Enter Your Phone Number"
                            className="form-control"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Date of Birth</label>
                          <input
                            type="date"
                            name="dateOfBirth"
                            placeholder="DD/MM/YYYY"
                            className="form-control"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            name="address"
                            placeholder="Enter your Address"
                            className="form-control"
                            value={formData.address}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Gender</label>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              value="0"
                              checked={formData.gender === "0"}
                              onChange={handleChange}
                              required
                            />
                            <label className="form-check-label">Male</label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              value="1"
                              checked={formData.gender === "1"}
                              onChange={handleChange}
                              required
                            />
                            <label className="form-check-label">Female</label>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <input
                          type="submit"
                          className="btn btn-submit"
                          value="Signup"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <p className="text-center mt-3 mb-5">
                  Already have an account?{" "}
                  <a
                    data-bs-toggle="modal"
                    className="regster-bn"
                    data-bs-target="#loginModal01"
                    data-bs-dismiss="modal"
                  >
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
