import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <div>
      <footer
        className="float-start w-100 pt-5"
        style={{ backgroundColor: "#0c071c" }}
      >
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 align-content-center">
            <div className="col d-flex flex-column align-items-center">
              <Link to="/">
                <img style={{ marginLeft: "30%" }} alt="Logo" src={Logo} />
              </Link>
              <p className="text-white mt-3 col-lg-10 text-center">
                Mỗi lá bài như một tấm gương phản chiếu tâm hồn, mở ra những tri
                thức cần thiết để bạn định hướng hành trình cuộc đời
              </p>
            </div>
            <div className="col">
              <div className="colm-footer">
                <h5> Liên Hệ </h5>
                <ul style={{ paddingLeft: "0px" }}>
                  <li>
                    {" "}
                    <i className="fab fa-whatsapp"></i> +8432-8026-926
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-paper-plane"></i>{" "}
                    tellorybooking@gmail.com
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-phone-alt"></i> +8432-8026-926
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="colm-footer">
                <h5> Dịch Vụ </h5>
                <ul style={{ paddingLeft: "0px" }}>
                  <li>
                    {" "}
                    <a
                      style={{ textDecoration: "none", color: "#d3a417" }}
                      href=""
                    >
                      Tarot{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      style={{ textDecoration: "none", color: "#d3a417" }}
                      href=""
                    >
                      {" "}
                      Xem Bài{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      style={{ textDecoration: "none", color: "#d3a417" }}
                      href=""
                    >
                      {" "}
                      Học Xem Bài{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="colm-footer">
                <h5> Liên Kết </h5>
                <ul style={{ paddingLeft: "0px" }}>
                  <li>
                    {" "}
                    <Link
                      to="/tarotReader"
                      style={{ textDecoration: "none", color: "#d3a417" }}
                    >
                      {" "}
                      Tarot Reader
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/tarotCard"
                      style={{ textDecoration: "none", color: "#d3a417" }}
                    >
                      {" "}
                      Bài Tarot{" "}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/zodiac"
                      style={{ textDecoration: "none", color: "#d3a417" }}
                    >
                      {" "}
                      Cung Hoàng Đạo{" "}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/blog"
                      style={{ textDecoration: "none", color: "#d3a417" }}
                    >
                      {" "}
                      Blog{" "}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/about"
                      style={{ textDecoration: "none", color: "#d3a417" }}
                    >
                      {" "}
                      Về Chúng Tôi{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="d-flex align-items-center justify-content-between">
            <p> Copyright © 2024. All rights reserved.</p>
            <ul>
              <li>
                <Link to="https://www.facebook.com/profile.php?id=61559836587347">
                  {" "}
                  <i className="fab fa-facebook-f"></i>{" "}
                </Link>
                <Link
                  to="https://www.tiktok.com/@tellory.booking"
                  className="mx-2"
                >
                  {" "}
                  <i
                    className="fab fa-tiktok"
                    style={{ color: "white" }}
                  ></i>{" "}
                </Link>
                <a href="#">
                  {" "}
                  <i className="fab fa-instagram"></i>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
