import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
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

      <section className="sub-banner-section float-start w-100">
        <div className="img-main-abnner d-inline-block w-100">
          <img alt="sm" src="assets/images/horocurty03.jpg" />
        </div>
        <div className="container">
          <h2 className="text-center text-white"> Blog </h2>
          <nav className="mt-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item active"> Blog </li>
            </ol>
          </nav>
        </div>
      </section>
      <main className="float-start w-100 body-main">
        <section className="blogs-info-div d-inline-block w-100 my-5">
          <div className="container">
            <div className="row gy-5 g-lg-5">
              <div className="col-lg-8">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="listed-bn">
                    <ul className="list-unstyled d-flex align-items-center justify-content-end">
                      <li className="ms-0">
                        <a id="list" className="active">
                          {" "}
                          <i className="fas fa-th-list"></i>{" "}
                        </a>
                      </li>
                      <li>
                        <a id="grid">
                          {" "}
                          <i className="fas fa-th-large"></i>{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h6 className="ms-lg-4 ashow">
                    {" "}
                    Showing <b> 1-4 </b> of <b> 13 </b> results{" "}
                  </h6>
                </div>

                <div id="products" className="mt-4">
                  <div className="row justify-content-between gy-5 g-lg-5">
                    <a
                      href="blog-details.html"
                      className="item list-item col-md-6 col-lg-6 col-xl-6 view-group list-group-item"
                    >
                      <div className="inside-div01">
                        <div className="left-div-list">
                          <img
                            src="assets/images/imag-tarot_make-a-wish.webp"
                            alt="pnm"
                          />
                          <div className="hvert">
                            10<b className="d-block">Jan</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            {" "}
                            <i className="fas fa-tags"></i> vulputate
                          </h6>
                          <h5>All the Lorem Ipsum generators Internet</h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> By Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 25 May 2021 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            {" "}
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      href="blog-details.html"
                      className="item list-item col-md-6 col-lg-6 col-xl-6 view-group list-group-item"
                    >
                      <div className="inside-div01">
                        <div className="left-div-list">
                          <img src="assets/images/aggju.jpg" alt="pnm" />
                          <div className="hvert">
                            10<b className="d-block">Jan</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            {" "}
                            <i className="fas fa-tags"></i>vulputate
                          </h6>
                          <h5>It is a long established fact that </h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> By Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 25 May 2021 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            {" "}
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      href="blog-details.html"
                      className="item list-item col-md-6 col-lg-6 col-xl-6 view-group list-group-item"
                    >
                      <div className="inside-div01">
                        <div className="left-div-list">
                          <img
                            src="assets/images/b25b0862914e3a91284933a7af276075.jpg"
                            alt="pnm"
                          />
                          <div className="hvert">
                            10<b className="d-block">Jan</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            {" "}
                            <i className="fas fa-tags"></i>vulputate
                          </h6>
                          <h5>In sed tortor eget risus egestas </h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> By Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 25 May 2021 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            {" "}
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      href="blog-details.html"
                      className="item list-item col-md-6 col-lg-6 col-xl-6 view-group list-group-item"
                    >
                      <div className="inside-div01">
                        <div className="left-div-list">
                          <img
                            src="assets/images/cat-crawford-b1AsZn2C-lo-unsplash.jpg"
                            alt="pnm"
                          />
                          <div className="hvert">
                            10<b className="d-block">Jan</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            {" "}
                            <i className="fas fa-tags"></i>vulputate
                          </h6>
                          <h5>Curabitur vitae leo feugiat </h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> By Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 25 May 2021 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            {" "}
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      href="blog-details.html"
                      className="item list-item col-md-6 col-lg-6 col-xl-6 view-group list-group-item"
                    >
                      <div className="inside-div01">
                        <div className="left-div-list">
                          <img
                            src="assets/images/tengyart-VgijAV-e97Y-unsplash.jpg"
                            alt="pnm"
                          />
                          <div className="hvert">
                            10<b className="d-block">Jan</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            {" "}
                            <i className="fas fa-tags"></i>vulputate
                          </h6>
                          <h5>Nullam et urna rhoncus purus </h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> By Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 25 May 2021 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            {" "}
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      href="blog-details.html"
                      className="item list-item col-md-6 col-lg-6 col-xl-6 view-group list-group-item"
                    >
                      <div className="inside-div01">
                        <div className="left-div-list">
                          <img
                            src="assets/images/tania-medina-zwsL1bj_yKA-unsplash.jpg"
                            alt="pnm"
                          />
                          <div className="hvert">
                            10<b className="d-block">Jan</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            {" "}
                            <i className="fas fa-tags"></i>vulputate
                          </h6>
                          <h5>Sed eget sapien eget felis commodo </h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> By Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 25 May 2021 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            {" "}
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="right-comon-linst05 pt-0">
                  <h3> Categories </h3>
                  <ul className="mt-5">
                    <li>
                      {" "}
                      <a href="#"> Pellentesque </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> Morbi viverra </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> scelerisque </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> Vestibulum </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> Pellentesque </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> ultricies </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#"> scelerisque </a>{" "}
                    </li>
                  </ul>
                </div>

                <div className="right-comon-linst05 mt-5">
                  <h3 className="mb-5"> Recent Post </h3>
                  <a href="#" className="d-flex post-cmonk align-items-center">
                    <div className="img-small01">
                      <img
                        alt="gmh"
                        src="assets/images/numerology-concept-still-life.jpg"
                      />
                    </div>
                    <div className="right-details-yui">
                      <p> 16 jan, 2023 </p>
                      <h5>Morbi vitae felis eget turpis</h5>
                    </div>
                  </a>
                  <a href="#" className="d-flex post-cmonk align-items-center">
                    <div className="img-small01">
                      <img alt="gmh" src="assets/images/moon-phasing1.png" />
                    </div>
                    <div className="right-details-yui">
                      <p> 16 jan, 2023 </p>
                      <h5>Sed et sem at risus consectetur</h5>
                    </div>
                  </a>
                  <a href="#" className="d-flex post-cmonk align-items-center">
                    <div className="img-small01">
                      <img alt="gmh" src="assets/images/imag-tarot_zen.jpg" />
                    </div>
                    <div className="right-details-yui">
                      <p> 16 jan, 2023 </p>
                      <h5>Nullam mattis nisl eget </h5>
                    </div>
                  </a>
                  <a href="#" className="d-flex post-cmonk align-items-center">
                    <div className="img-small01">
                      <img
                        alt="gmh"
                        src="assets/images/tengyart-VgijAV-e97Y-unsplash.jpg"
                      />
                    </div>
                    <div className="right-details-yui">
                      <p> 16 jan, 2023 </p>
                      <h5>Vestibulum feugiat lorem</h5>
                    </div>
                  </a>
                </div>

                <div className="right-comon-linst05 tabs-links mt-5">
                  <h3 className="mb-5"> Tags </h3>
                  <ul>
                    <li>
                      <a href="#" className="btn">
                        {" "}
                        Vestibulum{" "}
                      </a>
                      <a href="#" className="btn">
                        {" "}
                        Morbi{" "}
                      </a>
                      <a href="#" className="btn">
                        {" "}
                        Curabitur{" "}
                      </a>
                      <a href="#" className="btn">
                        {" "}
                        Nullam{" "}
                      </a>
                      <a href="#" className="btn">
                        {" "}
                        Pellentesque{" "}
                      </a>
                      <a href="#" className="btn">
                        {" "}
                        Nullam{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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

      {/* <!-- mobile menu --> */}

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
              <img src="assets/images/logo-drk.png" alt="logo" />
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

      {/* <!-- login Modal --> */}
      <div
        className="modal fade login-div-modal contact-form01"
        id="loginModal01"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <button
                type="button"
                className="btn-close colis-btn"
                data-bs-dismiss="modal"
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
                  <form
                    name="fmn"
                    action="https://oxentictemplates.in/templatemonster/astrology/mj"
                    method="post"
                  >
                    <div className="row" data-aos="fade-down">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label> Full Name </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label> Your Email </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label> Date of Birth </label>
                          <input
                            id="datepicker"
                            placeholder="DD/MM/YYYY"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label> Time Of Birth </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="12:00"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label> Place of Birth </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your City"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <input
                          type="submit"
                          className="btn btn-submit"
                          value="Signup"
                        />
                      </div>
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

      {/* <!-- register Modal --> */}

      <div
        className="modal fade login-div-modal contact-form01"
        id="registerModal"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <button
                type="button"
                className="btn-close colis-btn"
                data-bs-dismiss="modal"
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
                <h2> Sign Up for & consult your favourite Tarot Reader</h2>
                <div className="form-div-sections mt-5 d-inline-block w-100 px-5">
                  <form
                    name="fmn"
                    action="https://oxentictemplates.in/templatemonster/astrology/mj"
                    method="post"
                  >
                    <div className="row" data-aos="fade-down">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label> Full Name </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label> Your Email </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label> Date of Birth </label>
                          <input
                            id="datepicker"
                            placeholder="DD/MM/YYYY"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label> Time Of Birth </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="12:00"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label> Place of Birth </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your City"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <input
                          type="submit"
                          className="btn btn-submit"
                          value="Signup"
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <p className="text-center  mt-3 mb-5">
                  {" "}
                  Do not have an account?
                  <a
                    data-bs-toggle="modal"
                    className="regster-bn"
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
