import React, { useState } from "react";

const Register = ({ openLoginModal }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your form submission logic (e.g., API call)
    console.log(formData);
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
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
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
                          <label>Full Name</label>
                          <input
                            type="text"
                            name="fullName"
                            className="form-control"
                            placeholder="Enter your name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Your Email</label>
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
                          <label>Date of Birth</label>
                          <input
                            type="text"
                            name="dateOfBirth"
                            id="datepicker"
                            placeholder="DD/MM/YYYY"
                            className="form-control"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Time Of Birth</label>
                          <input
                            type="text"
                            name="timeOfBirth"
                            className="form-control"
                            placeholder="12:00"
                            value={formData.timeOfBirth}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Place of Birth</label>
                          <input
                            type="text"
                            name="placeOfBirth"
                            className="form-control"
                            placeholder="Enter your City"
                            value={formData.placeOfBirth}
                            onChange={handleChange}
                            required
                          />
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
                    class="regster-bn"
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
