import React from "react";
import { Link } from "react-router-dom";

export default function TarotReaderDetail() {
  return (
    <div>
      <header className="float-start w-100">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img alt="logo" src="images/logo.png" />
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
                    Tarot Card{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/numerology">
                    Numerology{" "}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blog{" "}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us{" "}
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
                        Customer Care
                        <b className="d-block">1800-254-256</b>
                      </span>
                    </div>
                  </li>

                  <li>
                    <a
                      data-bs-toggle="modal"
                      href="#registerModal"
                      className="btn consult-btn"
                    >
                      {" "}
                      Consult Now{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <section class="sub-banner-section float-start w-100">
        <div class="img-main-abnner d-inline-block w-100">
          <img alt="sm" src="assets/images/horocurty03.jpg" />
        </div>
        <div class="container">
          <h2 class="text-center text-white"> Astrologer details</h2>
          <nav class="mt-4">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">Home</li>
              <li class="breadcrumb-item active">Astrologer details</li>
            </ol>
          </nav>
        </div>
      </section>
      <main class="float-start w-100 body-main">
        <section class="astrology-page-details">
          <div class="container">
            <div class="row gx-lg-5">
              <div class="col-lg-3">
                <div class="top-pro d-inline-block bg-white p-5 w-100">
                  <figure class="mx-auto d-block">
                    <img
                      alt="su"
                      src="assets/images/spiritual-man-india-traditional-clothing-39495501.jpg"
                    />
                  </figure>

                  <div class="name-t mt-4">
                    <h2>
                      {" "}
                      Baker Patel{" "}
                      <span>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-patch-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>{" "}
                      </span>{" "}
                    </h2>

                    <h5 class="mt-3"> Vedic, Numerology </h5>
                    <p class="mt-3">
                      {" "}
                      <span>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </span>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>{" "}
                    </p>
                    <p class="rte mt-3">
                      {" "}
                      <span>
                        {" "}
                        <i class="fas fa-dollar-sign"></i>{" "}
                      </span>{" "}
                      10/min
                    </p>

                    <p class="offline"> Offline </p>
                  </div>
                </div>

                <div class="mapte mt-5">
                  <p class="text-white d-flex align-items-start">
                    <span>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-geo-alt-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>{" "}
                    </span>
                    <span class="ms-2"> 93 Mill Road London WC05 3HW </span>{" "}
                  </p>
                </div>

                <div class="book-div-group d-inline-block w-100 mt-5">
                  <a href="#" class="btn book-btn">
                    {" "}
                    <i class="fas fa-calendar-alt"></i> Book Appointment{" "}
                  </a>
                  <a href="#" class="btn call-btn mt-4">
                    {" "}
                    <i class="fas fa-phone-alt"></i> Start Call
                  </a>
                  <a href="#" class="btn call-btn mt-4">
                    {" "}
                    <i class="fas fa-comments"></i> Start Chat
                  </a>
                </div>
                <div class="folow-divd mt-5">
                  <h5 class="text-white"> Follow On </h5>
                  <span class="mt-3 d-inline-block w-100">
                    <a href="#" class="btn fac">
                      <span>
                        {" "}
                        <i class="fab fa-facebook-f"></i>{" "}
                      </span>
                    </a>
                    <a href="#" class="btn twitterb">
                      <span>
                        {" "}
                        <i class="fab fa-twitter"></i>{" "}
                      </span>
                    </a>
                    <a href="#" class="btn intsga">
                      <span>
                        {" "}
                        <i class="fab fa-instagram"></i>{" "}
                      </span>
                    </a>
                  </span>
                </div>
              </div>

              <div class="col-lg-9">
                <div class="tabs-diub d-inline-block w-100 mt-5 mt-lg-0">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Info
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <div class="about-comomn">
                            <h2 class="mt-4"> About me </h2>
                            <p>
                              {" "}
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                            <h2 class="mt-5"> Experience </h2>
                            <span> Vedic Astrology ( 6 Years ) </span>,
                            <span> Tarocard ( 6 Years ) </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Availability
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <div class="avlabe-divbn">
                            <div id="calendar"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Rating & Reviews
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <div class="user-revices">
                            <h2 class="mt-4"> User Reviews </h2>

                            <div class="comon-com-div">
                              <div class="d-lg-flex justify-content-between">
                                <figure>
                                  <img
                                    src="assets/images/testimonials-1-1.jpg"
                                    alt="user-pic"
                                  />
                                </figure>
                                <div class="comment-text">
                                  <div class="d-flex align-items-center">
                                    <h5 class="mb-0"> Jone due </h5>{" "}
                                    <span class="d-inline ms-3">
                                      {" "}
                                      Oct 12 ,2021{" "}
                                    </span>
                                  </div>
                                  <div class="form-group">
                                    <div class="stars rt01">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                    </div>
                                  </div>
                                  <p>
                                    {" "}
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piece of classical Latin literature from 45
                                    BC, making it over 2000 years old. Richard
                                    McClintock.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div class="comon-com-div">
                              <div class="d-lg-flex justify-content-between">
                                <figure>
                                  <img
                                    src="assets/images/istockphoto-1277996375-612x612.jpg"
                                    alt="user-pic"
                                  />
                                </figure>
                                <div class="comment-text">
                                  <div class="d-flex align-items-center">
                                    <h5 class="mb-0"> Jone due </h5>{" "}
                                    <span class="d-inline ms-3">
                                      {" "}
                                      Oct 12 ,2021{" "}
                                    </span>
                                  </div>
                                  <div class="form-group">
                                    <div class="stars rt01">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                    </div>
                                  </div>
                                  <p>
                                    {" "}
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piece of classical Latin literature from 45
                                    BC, making it over 2000 years old. Richard
                                    McClintock.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="leave-sec-part">
                            <h2> Leave a Comment </h2>
                            <div class="row">
                              <div class="col-lg-12 mb-3">
                                <div class="form-group">
                                  <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="form-group">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Full Name"
                                  />
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="form-group">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Email"
                                  />
                                </div>
                              </div>

                              <div class="col-lg-12">
                                <div class="form-group">
                                  <textarea
                                    class="form-control"
                                    placeholder="Message"
                                  ></textarea>
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="form-group">
                                  <input
                                    type="submit"
                                    class="btn subimt-comment"
                                    value="Post Comment"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer class="float-start w-100 pt-5">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 align-content-center">
            <div class="col">
              <a href="index.html">
                <img alt="logo" src="assets/images/logo.png" />
              </a>
              <p class="text-white mt-3 col-lg-10">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>
            </div>
            <div class="col">
              <div class="colm-footer">
                <h5> Contact Us </h5>
                <ul>
                  <li>
                    {" "}
                    <i class="fab fa-whatsapp"></i> +62-311-89-90-19
                  </li>
                  <li>
                    {" "}
                    <i class="fas fa-paper-plane"></i> exmaple@gmail.com
                  </li>
                  <li>
                    {" "}
                    <i class="fas fa-phone-alt"></i> +62-311-89-90-19
                  </li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="colm-footer">
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
            <div class="col">
              <div class="colm-footer">
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
          <hr class="my-4" />
          <div class="d-flex align-items-center justify-content-between">
            <p> Copyright © 2023. All rights reserved.</p>
            <ul>
              <li>
                <a href="#">
                  {" "}
                  <i class="fab fa-facebook-f"></i>{" "}
                </a>
                <a href="#" class="mx-2">
                  {" "}
                  <i class="fab fa-twitter"></i>{" "}
                </a>
                <a href="#">
                  {" "}
                  <i class="fab fa-instagram"></i>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* <!-- mobile menu --> */}

      <div class="offcanvas offcanvas-end mobile-menu-div" id="mobile-menu">
        <div class="offcanvas-header">
          <button type="button" class="close-menu" data-bs-dismiss="offcanvas">
            <span> Close </span> <i class="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>

        <div class="offcanvas-body">
          <div class="head-contact">
            <a href="index.html" class="logo-side">
              <img src="assets/images/logo-drk.png" alt="logo" />
            </a>

            <div class="mobile-menu-sec mt-5">
              <nav class="navbar navbar-expand navbar-light">
                <div class="collapse navbar-collapse">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="astrologer.html">
                        Astrologer
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        Horoscope
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="love.html">
                            Love
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="love.html">
                            Career
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="love.html">
                            Money
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="love.html">
                            Health & Beauty
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="tarot.html">
                        Tarot{" "}
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="numerology.html">
                        Numerology{" "}
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        More
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="about.html">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="blog.html">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="contact-us.html">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <ul class="side-media list-unstyled">
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <i class="fab fa-facebook-f"></i>{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <i class="fab fa-twitter"></i>{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <i class="fab fa-google-plus-g"></i>{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <i class="fab fa-instagram"></i>{" "}
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- login Modal --> */}
      <div class="modal fade login-div-modal contact-form01" id="loginModal01">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header border-bottom-0">
              <button
                type="button"
                class="btn-close colis-btn"
                data-bs-dismiss="modal"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </span>
              </button>
            </div>
            <div class="modal-body">
              <div class="modla-contact">
                <h2> Login to your Account</h2>
                <div class="form-div-sections mt-5 d-inline-block w-100 px-5">
                  <form
                    name="fmn"
                    action="https://oxentictemplates.in/templatemonster/astrology/mj"
                    method="post"
                  >
                    <div class="row" data-aos="fade-down">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label> Full Name </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label> Your Email </label>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label> Date of Birth </label>
                          <input
                            id="datepicker"
                            placeholder="DD/MM/YYYY"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label> Time Of Birth </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="12:00"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group">
                          <label> Place of Birth </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter your City"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <input
                          type="submit"
                          class="btn btn-submit"
                          value="Signup"
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <p class="text-center  mt-3 mb-5">
                  {" "}
                  Do not have an account?
                  <a
                    data-bs-toggle="modal"
                    class="regster-bn"
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

      {/* <!-- register Modal --> */}

      <div class="modal fade login-div-modal contact-form01" id="registerModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header border-bottom-0">
              <button
                type="button"
                class="btn-close colis-btn"
                data-bs-dismiss="modal"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </span>
              </button>
            </div>
            <div class="modal-body">
              <div class="modla-contact">
                <h2> Sign Up for & consult your favourite Tarot Reader</h2>
                <div class="form-div-sections mt-5 d-inline-block w-100 px-5">
                  <form
                    name="fmn"
                    action="https://oxentictemplates.in/templatemonster/astrology/mj"
                    method="post"
                  >
                    <div class="row" data-aos="fade-down">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label> Full Name </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label> Your Email </label>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label> Date of Birth </label>
                          <input
                            id="datepicker"
                            placeholder="DD/MM/YYYY"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label> Time Of Birth </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="12:00"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group">
                          <label> Place of Birth </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter your City"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <input
                          type="submit"
                          class="btn btn-submit"
                          value="Signup"
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <p class="text-center  mt-3 mb-5">
                  {" "}
                  Do not have an account?
                  <a
                    data-bs-toggle="modal"
                    class="regster-bn"
                    data-bs-target="#loginModal"
                    data-bs-dismiss="modal"
                  >
                    {" "}
                    Login{" "}
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
