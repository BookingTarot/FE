import React from "react";
import { Link } from "react-router-dom";

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
            <span> Đóng </span> <i className="fas fa-long-arrow-alt-right"></i>
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
                      <Link className="nav-link" to="/tarotReader">
                        Tarot Reader
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/tarotCard">
                        Bài Tarot
                      </Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/zodiac">
                    Cung Hoàng Đạo 
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">
                        Về Chúng Tôi
                      </Link>
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
