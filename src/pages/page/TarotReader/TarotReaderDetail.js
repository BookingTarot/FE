import React from "react";
import Header from "../../../components/Header/Header";
import MobileMenu from "../../../components/Mobile Menu/MobileMenu";
import Footer from "../../../components/Footer/Footer";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import imageBG from "../../../assets/images/horocurty03.jpg";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function TarotReaderDetail() {
  const { id } = useParams();
  const [tarotReader, setTarotReader] = useState(null);

  useEffect(() => {
    const fetchTarotReaders = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7218/api/TarotReader`
        );
        console.log(response.data);
        const reader = response.data.find(
          (reader) => reader.tarotReaderId === parseInt(id)
        );
        setTarotReader(reader);
        console.log(reader);
      } catch (error) {
        console.error("Error fetching tarot reader data", error);
      }
    };
    fetchTarotReaders();
  }, [id]);

  if (!tarotReader) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <!-- Header Modal --> */}
      <Header />

      <section className="sub-banner-section float-start w-100">
        <div className="img-main-abnner d-inline-block w-100">
          <img alt="sm" src={imageBG} />
        </div>
        <div className="container">
          <h2 className="text-center text-white"> Chi Tiết về Tarot Reader</h2>
          <nav className="mt-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Trang Chủ</li>
              <li className="breadcrumb-item active">
                Chi Tiết về Tarot Reader
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <main className="float-start w-100 body-main">
        <section
          className="astrology-page-details"
          style={{ backgroundColor: "#0c071c" }}
        >
          <div className="container">
            <div className="row gx-lg-5">
              <div className="col-lg-3">
                <div className="top-pro d-inline-block bg-white p-5 w-100">
                  <figure className="mx-auto d-block">
                    <img
                      alt="su"
                      src="assets/images/spiritual-man-india-traditional-clothing-39495501.jpg"
                    />
                  </figure>

                  <div className="name-t mt-4">
                    <h2>
                      {" "}
                      {tarotReader.user.firstName} {tarotReader.user.lastName}{" "}
                    </h2>

                    <h5 className="mt-3"> Vedic, Numerology </h5>
                    <p className="mt-3">
                      {" "}
                      <span>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>{" "}
                    </p>
                    <p className="rte mt-3">
                      {" "}
                      <span>
                        {" "}
                        <i className="fas fa-dollar-sign"></i>{" "}
                      </span>{" "}
                      10/min
                    </p>

                    <p className="offline"> Offline </p>
                  </div>
                </div>

                <div className="book-div-group d-inline-block w-100 mt-5">
                  <a href="#" className="btn book-btn">
                    {" "}
                    <i className="fas fa-calendar-alt"></i> Book Me{" "}
                  </a>
                  {/* <a href="#" className="btn call-btn mt-4">
                      {" "}
                      <i className="fas fa-phone-alt"></i> Start Call
                    </a>
                    <a href="#" className="btn call-btn mt-4">
                      {" "}
                      <i className="fas fa-comments"></i> Start Chat
                    </a> */}
                </div>
                <div className="folow-divd mt-5">
                  <h5 className="text-white"> Follow On </h5>
                  <span className="mt-3 d-inline-block w-100">
                    <a href="#" className="btn fac">
                      <span>
                        {" "}
                        <i className="fab fa-facebook-f"></i>{" "}
                      </span>
                    </a>
                    <a href="#" className="btn twitterb">
                      <span>
                        {" "}
                        <i className="fab fa-twitter"></i>{" "}
                      </span>
                    </a>
                    <a href="#" className="btn intsga">
                      <span>
                        {" "}
                        <i className="fab fa-instagram"></i>{" "}
                      </span>
                    </a>
                  </span>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="tabs-diub d-inline-block w-100 mt-5 mt-lg-0">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Thông Tin
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="about-comomn">
                            <h2 className="mt-4" style={{ textAlign: "start" }}>
                              {" "}
                              Giới Thiệu{" "}
                            </h2>
                            <p style={{ textAlign: "start" }}>
                              {" "}
                              {tarotReader.description}
                            </p>
                            <h2 className="mt-5" style={{ textAlign: "start" }}>
                              {" "}
                              Experience{" "}
                            </h2>
                            <p style={{ textAlign: "start" }}>
                              Công việc, tình yêu
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false" // This should be set to "false" to initially hide the accordion content
                          aria-controls="collapseTwo"
                        >
                          Lịch Trống
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse" // Remove the "show" class to initially hide the accordion content
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="avlabe-divbn">
                            <div id="calendar">
                              <FullCalendar
                                plugins={[dayGridPlugin]}
                                initialView="dayGridMonth"
                                events={tarotReader.schedules.map(
                                  (scheduleItem) => ({
                                    title: "Event",
                                    start:
                                      scheduleItem.date.slice(0, 10) +
                                      "T" +
                                      scheduleItem.startTime.slice(11), // Remove "1900-01-01" from the start time
                                    end:
                                      scheduleItem.date.slice(0, 10) +
                                      "T" +
                                      scheduleItem.endTime.slice(11), // Remove "1900-01-01" from the end time
                                  })
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
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
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="user-revices">
                            <h2 className="mt-4"> User Reviews </h2>

                            <div className="comon-com-div">
                              <div className="d-lg-flex justify-content-between">
                                <figure>
                                  <img
                                    src="assets/images/testimonials-1-1.jpg"
                                    alt="user-pic"
                                  />
                                </figure>
                                <div className="comment-text">
                                  <div className="d-flex align-items-center">
                                    <h5 className="mb-0"> Jone due </h5>{" "}
                                    <span className="d-inline ms-3">
                                      {" "}
                                      Oct 12 ,2021{" "}
                                    </span>
                                  </div>
                                  <div className="form-group">
                                    <div className="stars rt01">
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                  <p>
                                    {" "}
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piece of classNameical Latin literature from
                                    45 BC, making it over 2000 years old.
                                    Richard McClintock.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="comon-com-div">
                              <div className="d-lg-flex justify-content-between">
                                <figure>
                                  <img
                                    src="assets/images/istockphoto-1277996375-612x612.jpg"
                                    alt="user-pic"
                                  />
                                </figure>
                                <div className="comment-text">
                                  <div className="d-flex align-items-center">
                                    <h5 className="mb-0"> Jone due </h5>{" "}
                                    <span className="d-inline ms-3">
                                      {" "}
                                      Oct 12 ,2021{" "}
                                    </span>
                                  </div>
                                  <div className="form-group">
                                    <div className="stars rt01">
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                  <p>
                                    {" "}
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piece of classNameical Latin literature from
                                    45 BC, making it over 2000 years old.
                                    Richard McClintock.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="leave-sec-part">
                            <h2> Leave a Comment </h2>
                            <div className="row">
                              <div className="col-lg-12 mb-3">
                                <div className="form-group">
                                  <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Full Name"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                  />
                                </div>
                              </div>

                              <div className="col-lg-12">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    placeholder="Message"
                                  ></textarea>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <input
                                    type="submit"
                                    className="btn subimt-comment"
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
    </div>
  );
}
