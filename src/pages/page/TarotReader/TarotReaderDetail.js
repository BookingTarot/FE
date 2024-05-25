import React from "react";
import Header from "../../../components/Header/Header";
import Login from "../../../components/Login/Login";
import Register from "../../../components/Login/Register";
import MobileMenu from "../../../components/Mobile Menu/MobileMenu";
import Footer from "../../../components/Footer/Footer";

export default function TarotReaderDetail() {
  return (
    <div>
      {/* <!-- Header Modal --> */}
      <Header />

      <section class="sub-banner-section float-start w-100">
        <div class="img-main-abnner d-inline-block w-100">
          <img alt="sm" src="assets/images/horocurty03.jpg" />
        </div>
        <div class="container">
          <h2 class="text-center text-white"> Tarot Reader details</h2>
          <nav class="mt-4">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">Home</li>
              <li class="breadcrumb-item active">Tarot Reader details</li>
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
