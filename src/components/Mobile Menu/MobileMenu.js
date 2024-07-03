import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Đóng menu khi click
  };

  return (
    <div>
      <div
        className={`offcanvas offcanvas-end mobile-menu-div ${
          menuOpen ? "show" : ""
        }`}
        id="mobile-menu"
      >
        <div className="offcanvas-header">
          <button type="button" className="close-menu" onClick={toggleMenu}>
            <span> Đóng </span> <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>

        <div className="offcanvas-body">
          <div className="head-contact">
            <Link to="/" className="logo-side">
              <img src="assets/images/logo.png" alt="logo" />
            </Link>

            <div className="mobile-menu-sec mt-5">
              <nav className="navbar navbar-expand navbar-light">
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/tarotReader"
                        onClick={closeMenu} // Đóng menu khi click
                      >
                        Tarot Reader
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/tarotCard"
                        onClick={closeMenu} // Đóng menu khi click
                      >
                        Bài Tarot
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/zodiac"
                        onClick={closeMenu} // Đóng menu khi click
                      >
                        Cung Hoàng Đạo
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/blog"
                        onClick={closeMenu} // Đóng menu khi click
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/about"
                        onClick={closeMenu} // Đóng menu khi click
                      >
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
                <a href="#" onClick={closeMenu}>
                  {" "}
                  <i className="fab fa-facebook-f"></i>{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" onClick={closeMenu}>
                  {" "}
                  <i className="fab fa-twitter"></i>{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" onClick={closeMenu}>
                  {" "}
                  <i className="fab fa-google-plus-g"></i>{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" onClick={closeMenu}>
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
