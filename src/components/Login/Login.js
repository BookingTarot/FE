import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    const response = await fetch("https://localhost:7218/api/User/login", {
      // Use HTTP and correct endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      // Handle successful login, e.g., redirect to another page or show a success message
      navigate("/tarotReader");
      console.log("Login successful", result);
      toast.success("Login successful!");
    } else {
      // Handle errors, e.g., show an error message
      console.error("Login failed", result);
      toast.error("Login failed, please input again!");
    }
  };

  return (
    <div>
      <ToastContainer />
      <div
        className="modal fade login-div-modal contact-form01"
        id="loginModal01"
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
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="modla-contact">
                <h2> Login to your Account</h2>
                <div className="form-div-sections mt-5 d-inline-block w-100 px-5">
                  <form onSubmit={handleSubmit}>
                    <div className="row" data-aos="fade-down">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label> Your Email </label>
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
                          <label> Password </label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="submit"
                        className="btn btn-submit"
                        value="Login"
                      />
                    </div>
                  </form>
                </div>

                <p className="text-center  mt-3 mb-5">
                  {" "}
                  Do not have an account?
                  <a
                    data-bs-toggle="modal"
                    className="regster-bn"
                    data-bs-target="#registerModal"
                    data-bs-dismiss="modal"
                  >
                    {" "}
                    Register{" "}
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
