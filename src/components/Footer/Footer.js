import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="float-start w-100 pt-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 align-content-center">
            <div className="col">
              <a href="index.html">
                <img alt="logo" src="assets/images/logo.png" />
              </a>
              <p className="text-white mt-3 col-lg-10">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>
            </div>
            <div className="col">
              <div className="colm-footer">
                <h5> Contact Us </h5>
                <ul>
                  <li>
                    {" "}
                    <i className="fab fa-whatsapp"></i> +62-311-89-90-19
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-paper-plane"></i> exmaple@gmail.com
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-phone-alt"></i> +62-311-89-90-19
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="colm-footer">
                <h5> Our Services </h5>
                <ul>
                  <li>
                    {" "}
                    <a href="tarot.html">Tarot </a>
                  </li>
                  <li>
                    {" "}
                    <a href="numerology.html"> Numerology </a>
                  </li>
                  <li>
                    {" "}
                    <a href="astrologer.html"> Astrologer </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="colm-footer">
                <h5> Quick Links </h5>
                <ul>
                  <li>
                    {" "}
                    <a href="about.html"> About </a>
                  </li>
                  <li>
                    {" "}
                    <a href="blog.html">Blog </a>
                  </li>
                  <li>
                    {" "}
                    <a href="contact-us.html"> Contact </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="d-flex align-items-center justify-content-between">
            <p> Copyright © 2023. All rights reserved.</p>
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
