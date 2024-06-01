import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer
        className="float-start w-100 pt-5"
        style={{ backgroundColor: "#0c071c" }}
      >
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 align-content-center">
            <div className="col">
              <a href="index.html">
                <img alt="logo" src="assets/images/logo.png" />
              </a>
              <p className="text-white mt-3 col-lg-10">
                {" "}
                Mỗi lá bài như một tấm gương phản chiếu tâm hồn, mở ra những tri
                thức cần thiết để bạn định hướng hành trình cuộc đời
              </p>
            </div>
            <div className="col">
              <div className="colm-footer">
                <h5> Liên Hệ </h5>
                <ul>
                  <li>
                    {" "}
                    <i className="fab fa-whatsapp"></i> +8432-8026-926
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-paper-plane"></i>{" "}
                    bookingtarot@gmail.com
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
                <ul>
                  <li>
                    {" "}
                    <a href="tarot.html">Tarot </a>
                  </li>
                  <li>
                    {" "}
                    <a href="numerology.html"> Xem Bài </a>
                  </li>
                  <li>
                    {" "}
                    <a href="astrologer.html"> Học Xem Bài </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="colm-footer">
                <h5> Liên Kết </h5>
                <ul>
                  <li>
                    {" "}
                    <Link to="/tarotReader"> Tarot Reader</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/tarotCard"> Bài Tarot </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/zodiac"> Cung Hoàng Đạo </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/blog"> Blog </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/about"> Về Chúng Tôi </Link>
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
                <a href="#">
                  {" "}
                  <i className="fab fa-facebook-f"></i>{" "}
                </a>
                <a href="#" className="mx-2">
                  {" "}
                  <i className="fab fa-twitter"></i>{" "}
                </a>
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
