import React from "react";

export default function MobileMenu() {
  return (
    <div>
      <div className="offcanvas offcanvas-end mobile-menu-div" id="mobile-menu">
        <div className="offcanvas-header">
          <button
            type="button"
            className="close-menu"
            data-bs-dismiss="offcanvas"
          >
            <span> Close </span> <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>

        <div className="offcanvas-body">
          <div className="head-contact">
            <a href="index.html" className="logo-side">
              <img src="assets/images/logo.png" alt="logo" />
            </a>

            <div className="mobile-menu-sec mt-5">
              <nav className="navbar navbar-expand navbar-light">
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="astrologer.html">
                        Astrologer
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        Horoscope
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="love.html">
                            Love
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="love.html">
                            Career
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="love.html">
                            Money
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="love.html">
                            Health & Beauty
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="tarot.html">
                        Tarot{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="numerology.html">
                        Numerology{" "}
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        More
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="about.html">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="blog.html">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="contact-us.html">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <ul className="side-media list-unstyled">
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <i className="fab fa-facebook-f"></i>{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <i className="fab fa-twitter"></i>{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <i className="fab fa-google-plus-g"></i>{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <i className="fab fa-instagram"></i>{" "}
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
