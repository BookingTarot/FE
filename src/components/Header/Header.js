import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Login/Authen";

export default function Header() {
  const { user } = useAuth();

  return (
    <div>
      <header className="float-start w-100">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img alt="logo" src="assets/images/logo.png" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobile-menu"
            >
              <span>
                {" "}
                <i className="fas fa-bars"></i>{" "}
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
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
            <div className="d-none d-lg-block">
              <div className="right-menui">
                <ul>
                  <li>
                    <div className="cusotme-ph">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-telephone"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                      </span>
                      <span>
                        Chăm Sóc Khách Hàng
                        <b className="d-block">032 8026 926</b>
                      </span>
                    </div>
                  </li>

                  {user ? (
                    <li className="list-inline-item mb-0 ms-1">
                      <div className="dropdown dropdown-primary">
                        <a
                          className=""
                          href="#"
                          style={{ color: "white" }}
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Chào, {user.lastName}
                        </a>
                        <div className="dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3">
                          <a
                            className="dropdown-item text-dark"
                            href="doctor-profile-setting.html"
                          >
                            Chỉnh Sửa Thông Tin
                          </a>
                          <div className="dropdown-divider border-top"></div>
                          <Link className="dropdown-item text-dark" to="/login">
                            Logout
                          </Link>
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li>
                      <Link to="/signup" className="btn consult-btn">
                        Tư Vấn Ngay
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
