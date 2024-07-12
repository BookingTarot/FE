import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileMenu.css"; // Make sure to import your CSS file

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div>
      <div
        className={`offcanvas offcanvas-end mobile-menu-div ${
          menuOpen ? "show" : ""
        }`}
        id="mobile-menu"
        tabIndex="-1"
        aria-labelledby="offcanvasRightLabel"
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
                        onClick={closeMenu}
                      >
                        Tarot Reader
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/tarotCard"
                        onClick={closeMenu}
                      >
                        Bài Tarot
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/zodiac"
                        onClick={closeMenu}
                      >
                        Cung Hoàng Đạo
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/blog" onClick={closeMenu}>
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/about"
                        onClick={closeMenu}
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
                <Link
                  to="https://www.facebook.com/profile.php?id=61559836587347"
                  onClick={closeMenu}
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
