import React from "react";
import { Link } from "react-router-dom";

export default function Numerology() {
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
          <h2 className="text-center text-white"> Numerology </h2>
          <nav className="mt-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item active">Numerology</li>
            </ol>
          </nav>
        </div>
      </section>
      <main className="float-start w-100 body-main">
        <section className="daily-horp d-inline-block w-100">
          <div className="container">
            <div className="comon-heading text-center">
              <h5 className="sub-heading" data-aos="fade-down">
                {" "}
                Numerology{" "}
              </h5>
              <h2
                className="text-white comon-heading mt-2 mb-3"
                data-aos="fade-up"
              >
                {" "}
                Free Numerology Readings for you{" "}
              </h2>
            </div>

            <ul
              className="nav nav-pills mb-3 mt-5 justify-content-center"
              role="tablist"
              data-aos="fade-down"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-hop01"
                  type="button"
                  role="tab"
                >
                  {" "}
                  Today{" "}
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-hop02"
                  type="button"
                  role="tab"
                >
                  Yesterday{" "}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-hop03"
                  type="button"
                  role="tab"
                >
                  Tomorrow{" "}
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-hop04"
                  type="button"
                  role="tab"
                >
                  Weekly{" "}
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-hop05"
                  type="button"
                  role="tab"
                >
                  Monthly{" "}
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-hop06"
                  type="button"
                  role="tab"
                >
                  Horoscope 2023{" "}
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-hop01"
                role="tabpanel"
              >
                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>01</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white">
                        {" "}
                        <span> One </span>{" "}
                      </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a
                        href="number-details.html"
                        className="btn btn-more mt-2"
                      >
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>02</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Two </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a
                        href="number-details.html"
                        className="btn btn-more mt-2"
                      >
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>03</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Three </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a
                        href="number-details.html"
                        className="btn btn-more mt-2"
                      >
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>04</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Four </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a
                        href="number-details.html"
                        className="btn btn-more mt-2"
                      >
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>05</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Five </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>06</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Six </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>07</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Seven </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>08</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Eight </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>09</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Nine </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-hop02" role="tabpanel">
                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>01</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white">
                        {" "}
                        <span> One </span>{" "}
                      </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>02</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Two </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>03</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Three </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>04</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Four </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>05</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Five </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>06</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Six </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>07</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Seven </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>08</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Eight </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>09</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Nine </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-hop03" role="tabpanel">
                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>01</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white">
                        {" "}
                        <span> One </span>{" "}
                      </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>02</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Two </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>03</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Three </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>04</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Four </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>05</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Five </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>06</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Six </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>07</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Seven </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>08</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Eight </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>09</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Nine </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="pills-hop04" role="tabpanel">
                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>01</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white">
                        {" "}
                        <span> One </span>{" "}
                      </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>02</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Two </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>03</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Three </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>04</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Four </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>05</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Five </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>06</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Six </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>07</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Seven </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>08</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Eight </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>09</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Nine </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="pills-hop05" role="tabpanel">
                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>01</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white">
                        {" "}
                        <span> One </span>{" "}
                      </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>02</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Two </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>03</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Three </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>04</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Four </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>05</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Five </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>06</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Six </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>07</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Seven </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>08</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Eight </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>09</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Nine </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="pills-hop06" role="tabpanel">
                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>01</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white">
                        {" "}
                        <span> One </span>{" "}
                      </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>02</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Two </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>03</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Three </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>04</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Four </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>05</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Five </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>06</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Six </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>07</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Seven </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>08</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Eight </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="comin-divu-main d-grid align-content-center w-100"
                  data-aos="zoom-in"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-2">
                      <div className="nu01">
                        <h2>09</h2>
                      </div>
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-white"> Nine </h5>
                      <p className="mt-2">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown.{" "}
                      </p>
                      <a href="#" className="btn btn-more mt-2">
                        {" "}
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="konow-more-zoidc d-inline-block w-100">
          <div className="container">
            <div className="col-lg-6">
              <div className="form-zodiuc">
                <div className="comon-heading text-center text-lg-start">
                  <h5 className="sub-heading" data-aos="fade-down">
                    {" "}
                    Your Number{" "}
                  </h5>
                  <h2
                    className="text-white comon-heading mt-3 mb-3"
                    data-aos="fade-up"
                  >
                    {" "}
                    Get Your Number Predictions
                  </h2>
                </div>
                <p data-aos="fade-down">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown{" "}
                </p>

                <form
                  action="https://oxentictemplates.in/templatemonster/astrology/me"
                  method="get"
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
                        value="Find Number"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="img-bh">
            <img alt="" src="assets/images/numerology-concept-still-life.jpg" />
          </div>
        </section>

        <section className="our-astroly d-inline-block w-100">
          <div className="container">
            <div className="comon-heading text-center">
              <h2
                className="text-white comon-heading mt-3 mb-3"
                data-aos="fade-down"
              >
                {" "}
                Consult Our Numerology
              </h2>
              <h6 className="text-white" data-aos="fade-up">
                {" "}
                100+ Best Astrologers for Online Consultation
              </h6>
            </div>
            <div className="astrolger owl-carousel owl-theme mt-5">
              <a
                href="#"
                className="items-astro d-lg-grid align-content-center w-100"
              >
                <div className="bg-round-im">
                  <img alt="hj" src="assets/images/author-bg.png" />
                  <div className="img-user mx-auto">
                    <img
                      alt="suer"
                      src="assets/images/spiritual-man-india-traditional-clothing-39495501.jpg"
                    />
                  </div>
                </div>
                <div className="asto-te-dl text-center">
                  <h5> James Dan </h5>
                  <p> Numerology</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="me-2">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-translate"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                        <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                      </svg>{" "}
                    </span>
                    <ul className="d-flex align-content-center">
                      <li> English , </li>
                      <li> Hindi </li>
                    </ul>
                  </div>
                  <div className="exp justify-content-between mt-2">
                    <span className="d-block">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-mortarboard"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                      </svg>{" "}
                      15Years
                    </span>

                    <h4 className="d-flex text-center justify-content-center mt-3 align-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-currency-dollar"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                      </svg>
                      10
                    </h4>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="items-astro d-lg-grid align-content-center w-100"
              >
                <div className="bg-round-im">
                  <img alt="hj" src="assets/images/author-bg.png" />
                  <div className="img-user mx-auto">
                    <img
                      alt="suer"
                      src="assets/images/istockphoto-1277971635-612x612.jpg"
                    />
                  </div>
                </div>
                <div className="asto-te-dl text-center">
                  <h5> Amit Patel </h5>
                  <p> Numerology</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="me-2">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-translate"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                        <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                      </svg>{" "}
                    </span>
                    <ul className="d-flex align-content-center">
                      <li> English , </li>
                      <li> Hindi </li>
                    </ul>
                  </div>
                  <div className="exp justify-content-between mt-2">
                    <span className="d-block">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-mortarboard"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                      </svg>{" "}
                      10Years
                    </span>

                    <h4 className="d-flex text-center justify-content-center mt-3 align-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-currency-dollar"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                      </svg>
                      20
                    </h4>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="items-astro d-lg-grid align-content-center w-100"
              >
                <div className="bg-round-im">
                  <img alt="hj" src="assets/images/author-bg.png" />
                  <div className="img-user mx-auto">
                    <img
                      alt="suer"
                      src="assets/images/image-13-1561127528.jpg"
                    />
                  </div>
                </div>
                <div className="asto-te-dl text-center">
                  <h5> Sumit Ghosh </h5>
                  <p> Numerology</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="me-2">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-translate"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                        <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                      </svg>{" "}
                    </span>
                    <ul className="d-flex align-content-center">
                      <li> English , </li>
                      <li> Hindi </li>
                    </ul>
                  </div>
                  <div className="exp justify-content-between mt-2">
                    <span className="d-block">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-mortarboard"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                      </svg>{" "}
                      12Years
                    </span>

                    <h4 className="d-flex text-center justify-content-center mt-3 align-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-currency-dollar"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                      </svg>
                      25
                    </h4>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="items-astro d-lg-grid align-content-center w-100"
              >
                <div className="bg-round-im">
                  <img alt="hj" src="assets/images/author-bg.png" />
                  <div className="img-user mx-auto">
                    <img
                      alt="suer"
                      src="assets/images/depositphotos_81108858-stock-photo-casual-business-indian-boy-portrait.jpg"
                    />
                  </div>
                </div>
                <div className="asto-te-dl text-center">
                  <h5> Ochoa Patel </h5>
                  <p> Numerology</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="me-2">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-translate"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                        <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                      </svg>{" "}
                    </span>
                    <ul className="d-flex align-content-center">
                      <li> English , </li>
                      <li> Hindi </li>
                    </ul>
                  </div>
                  <div className="exp justify-content-between mt-2">
                    <span className="d-block">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-mortarboard"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                      </svg>{" "}
                      20Years
                    </span>

                    <h4 className="d-flex text-center justify-content-center mt-3 align-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-currency-dollar"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                      </svg>
                      14
                    </h4>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="items-astro d-lg-grid align-content-center w-100"
              >
                <div className="bg-round-im">
                  <img alt="hj" src="assets/images/author-bg.png" />
                  <div className="img-user mx-auto">
                    <img
                      alt="suer"
                      src="assets/images/close-up-portrait-young-indian-man-white-shirt-posing-standing-smiling-looks-calm.webp"
                    />
                  </div>
                </div>
                <div className="asto-te-dl text-center">
                  <h5> Irwin Dan </h5>
                  <p> Numerology</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="me-2">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-translate"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                        <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                      </svg>{" "}
                    </span>
                    <ul className="d-flex align-content-center">
                      <li> English , </li>
                      <li> Hindi </li>
                    </ul>
                  </div>
                  <div className="exp justify-content-between mt-2">
                    <span className="d-block">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-mortarboard"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                      </svg>{" "}
                      10Years
                    </span>

                    <h4 className="d-flex text-center justify-content-center mt-3 align-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-currency-dollar"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                      </svg>
                      20
                    </h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="news-letter-div d-inline-block w-100">
          <div className="container">
            <div className="comon-heading text-center mt-5">
              <h5 className="sub-heading" data-aos="fade-down">
                {" "}
                Our Newsletter{" "}
              </h5>
              <h2
                className="text-white comon-heading mt-2 mb-3"
                data-aos="fade-up"
              >
                {" "}
                Subscribe And Ask For Free{" "}
              </h2>
            </div>
            <p
              className="col-lg-8 mx-auto d-block text-center"
              data-aos="fade-up"
            >
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
            <form
              method="get"
              action="https://oxentictemplates.in/templatemonster/astrology/gm"
              className="w-100"
            >
              <div
                className="subcribe-section mt-5 col-lg-5 mx-auto d-flex justify-content-center"
                data-aos="fade-up"
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                />
                <button type="submit" className="subscribe btn">
                  {" "}
                  subscribe
                </button>
              </div>
            </form>
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
