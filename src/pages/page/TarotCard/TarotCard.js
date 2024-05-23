import React from "react";
import Register from "../../../components/Login/Register";
import Login from "../../../components/Login/Login";
import Header from "../../../components/Header/Header";
import MobileMenu from "../../../components/Mobile Menu/MobileMenu";
import Footer from "../../../components/Footer/Footer";

export default function TarotCard() {
  return (
    <div>
      {/* <!-- Header Modal --> */}
      <Header />

      <section className="sub-banner-section float-start w-100">
        <div className="img-main-abnner d-inline-block w-100">
          <img alt="sm" src="assets/images/horocurty03.jpg" />
        </div>
        <div className="container">
          <h2 className="text-center text-white"> Tarot Card </h2>
          <nav className="mt-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item active">Tarot Card</li>
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
                Tarot Card{" "}
              </h5>
              <h2
                className="text-white comon-heading mt-2 mb-3"
                data-aos="fade-up"
              >
                {" "}
                Free Tarot Card Readings for you{" "}
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
                  All Tarot{" "}
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
                  Love Tarot{" "}
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
                  Unique Tarot{" "}
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
                  Money Tarot{" "}
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
                  Forecast Tarot{" "}
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-hop01"
                role="tabpanel"
              >
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-5 g-lg-5 mt-0">
                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_daily-love.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Love Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="tarot-details.html">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_love-potential.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Former Flame{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="tarot-details.html">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_love-potential.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Love Potential{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="tarot-details.html">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_love-potential.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Flirt Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="tarot-details.html">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_make-a-wish.webp"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Make A Wish{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="tarot-details.html">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_angel.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Angel Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="tarot-details.html">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_angel.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Angel Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="tarot-details.html">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_breakup.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Breakup Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="tarot-details.html">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_dream.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Dream Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="tarot-details.html">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_daily-career.webp"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Career Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="tarot-details.html">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_egyptian.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Egyptian Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="tarot-details.html">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_erotic.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Erotic Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="tarot-details.html">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_inner-animal.webp"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Gems Oracle{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="tarot-details.html">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_monthly.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Monthly Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="tarot-details.html">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_monthly.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Daily Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="tarot-details.html">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/imag-tarot_zen.jpg" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Zen Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="tarot-details.html">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_money-oracle.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Money Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="tarot-details.html">read more..</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-hop02" role="tabpanel">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-5 mt-0">
                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_daily-love.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Love Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_love-potential.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Former Flame{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_love-potential.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Love Potential{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_love-potential.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Flirt Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_make-a-wish.webp"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Make A Wish{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_angel.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Angel Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_angel.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Angel Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_breakup.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Breakup Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_dream.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Dream Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_daily-career.webp"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Career Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_egyptian.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Egyptian Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_erotic.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Erotic Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_inner-animal.webp"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Gems Oracle{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_monthly.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Monthly Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_monthly.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Daily Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/imag-tarot_zen.jpg" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Zen Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_money-oracle.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Money Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="pills-hop03" role="tabpanel">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-5 mt-0">
                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_daily-love.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Love Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_love-potential.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Former Flame{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_love-potential.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Love Potential{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_love-potential.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Flirt Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_make-a-wish.webp"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Make A Wish{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_angel.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Angel Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_angel.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Angel Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_breakup.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Breakup Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_dream.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Dream Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_daily-career.webp"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Career Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_egyptian.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Egyptian Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_erotic.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Erotic Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_inner-animal.webp"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Gems Oracle{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_monthly.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Monthly Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_monthly.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Daily Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/imag-tarot_zen.jpg" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Zen Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_money-oracle.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Money Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="pills-hop04" role="tabpanel">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-5 mt-0">
                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_daily-love.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Love Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_love-potential.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Former Flame{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_love-potential.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Love Potential{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_love-potential.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Flirt Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_make-a-wish.webp"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Make A Wish{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_angel.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Angel Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_angel.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Angel Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_breakup.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Breakup Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_dream.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Dream Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_daily-career.webp"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Career Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_egyptian.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Egyptian Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_erotic.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Erotic Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_inner-animal.webp"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Gems Oracle{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_monthly.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Monthly Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_monthly.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Daily Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/imag-tarot_zen.jpg" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Zen Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_money-oracle.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Money Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="pills-hop05" role="tabpanel">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-5 mt-0">
                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_daily-love.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Love Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_love-potential.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Former Flame{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_love-potential.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Love Potential{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_love-potential.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Flirt Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_make-a-wish.webp"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Make A Wish{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_angel.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Angel Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_angel.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Angel Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_breakup.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Breakup Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_dream.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Dream Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_daily-career.webp"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Career Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_egyptian.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Egyptian Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_erotic.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Erotic Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_inner-animal.webp"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Gems Oracle{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_monthly.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Monthly Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_monthly.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Daily Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/imag-tarot_zen.jpg" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Zen Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img
                          alt="cr"
                          src="assets/images/imag-tarot_money-oracle.jpg"
                        />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Money Tarot{" "}
                      </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </p>
                      <a href="#">read more..</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                Consult Our Tarot reader
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
                  <p> Tarot</p>
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
                  <p> Tarot</p>
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
                  <p> Tarot</p>
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
                  <p> Tarot</p>
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
                  <p>Tarot</p>
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

      {/* <!-- footer Modal --> */}
      <Footer />

      {/* <!-- mobile menu --> */}

      <MobileMenu />

      {/* <!-- login Modal --> */}
      <Login />

      {/* <!-- register Modal --> */}

      <Register />
    </div>
  );
}
