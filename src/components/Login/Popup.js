import React, { useState } from "react";
import Register from "./Register";

const Popup = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = (isOpen) => {
    setIsLoginModalOpen(isOpen);
  };

  return (
    <div>
      <Register openLoginModal={openLoginModal} />
      {isLoginModalOpen && (
        <div
          id="loginModal"
          className="modal show"
          style={{ display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header border-bottom-0">
                <button
                  type="button"
                  className="btn-close colis-btn"
                  onClick={() => setIsLoginModalOpen(false)}
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
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="row" data-aos="fade-down">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label> Your Email </label>
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Enter your email"
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
      )}
    </div>
  );
};

export default Popup;
