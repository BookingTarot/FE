import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Header from "../../../components/Header/Header";
import MobileMenu from "../../../components/Mobile Menu/MobileMenu";
import Footer from "../../../components/Footer/Footer";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import imageBG from "../../../assets/images/horocurty03.jpg";
import SessionType from "../../../components/Popup/SessionType";
import { useAuth } from "../../../components/Login/Authen";
import { Link } from "react-router-dom";

export default function TarotReaderDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  const [tarotReader, setTarotReader] = useState(null);
  const [feedbacks, setFeedbacks] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTarotReaderId, setSelectedTarotReaderId] = useState(null);
  const [newFeedback, setNewFeedback] = useState({
    rating: 0,
    comments: "",
  });

  const openModal = (tarotReaderId) => {
    setSelectedTarotReaderId(tarotReaderId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const fetchTarotReader = async () => {
      try {
        const response = await axios.get(
          `https://tarot.somee.com/api/TarotReader/${id}`
        );
        setTarotReader(response.data);
      } catch (error) {
        console.error("Error fetching tarot reader data", error);
      }
    };

    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get(
          `https://tarot.somee.com/api/Feedbacks/tarotreader/${id}`
        );
        setFeedbacks(response.data);
      } catch (error) {
        console.error("Error fetching feedback data", error);
      }
    };

    fetchTarotReader();
    fetchFeedbacks();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFeedback({ ...newFeedback, [name]: value });
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please log in to post a comment.");
      return;
    }
    const feedbackData = {
      customerId: user.userId, // replace with actual user ID
      tarotReaderId: parseInt(id),
      rating: newFeedback.rating,
      comments: newFeedback.comments,
      date: new Date().toISOString(),
    };
    console.log("feedback data", feedbackData);
    console.log("user", user);

    try {
      const response = await axios.post(
        `https://localhost:7218/api/Feedbacks`,
        feedbackData
      );
      console.log("Feedback posted successfully:", response.data);
      setFeedbacks([...feedbacks, response.data]);
      setNewFeedback({ rating: 0, comments: "" });
    } catch (error) {
      console.error("Error posting feedback", error);
    }
  };

  if (!tarotReader) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <section className="sub-banner-section float-start w-100">
        <div className="img-main-abnner d-inline-block w-100">
          <img alt="sm" src={imageBG} />
        </div>
        <div className="container">
          <h2 className="text-center text-white">Chi Tiết về Tarot Reader</h2>
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
                    <h2>{tarotReader.fullName}</h2>

                    <h5 className="mt-3">Vedic, Numerology</h5>
                    <p className="mt-3">
                      <span>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </p>
                    <p className="rte mt-3">
                      <span>
                        <i className="fas fa-dollar-sign"></i>
                      </span>{" "}
                      10/min
                    </p>

                    <p className="offline">Offline</p>
                  </div>
                </div>

                <div className="book-div-group d-inline-block w-100 mt-5">
                  <button
                    onClick={() => openModal(tarotReader.tarotReaderId)}
                    className="btn book-btn"
                  >
                    <i className="fas fa-calendar-alt"></i> Book Me
                  </button>
                </div>
                <div className="folow-divd mt-5">
                  <h5 className="text-white">Follow On</h5>
                  <span className="mt-3 d-inline-block w-100">
                    <a className="btn fac">
                      <span>
                        <i className="fab fa-facebook-f"></i>
                      </span>
                    </a>
                    <a href="#" className="btn twitterb">
                      <span>
                        <i className="fab fa-twitter"></i>
                      </span>
                    </a>
                    <a href="#" className="btn intsga">
                      <span>
                        <i className="fab fa-instagram"></i>
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
                              Giới Thiệu
                            </h2>
                            <p style={{ textAlign: "start" }}>
                              {tarotReader.description}
                            </p>
                            <h2 className="mt-5" style={{ textAlign: "start" }}>
                              Experience
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
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Lịch Trống
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
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
                                      scheduleItem.startTime.slice(11),
                                    end:
                                      scheduleItem.date.slice(0, 10) +
                                      "T" +
                                      scheduleItem.endTime.slice(11),
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
                          Đánh Giá & Nhận Xét
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
                            <h2 className="mt-4">Đánh Giá</h2>
                            {feedbacks.length > 0 ? (
                              feedbacks.map((feedback, index) => (
                                <div key={index} className="comon-com-div">
                                  <div className="d-lg-flex justify-content-between">
                                    <figure>
                                      <img
                                        src="assets/images/testimonials-1-1.jpg"
                                        alt="user-pic"
                                      />
                                    </figure>
                                    <div className="comment-text">
                                      <div className="d-flex align-items-center">
                                        <h5 className="mb-0">
                                          {feedback.userName}
                                        </h5>{" "}
                                        <span className="d-inline ms-3">
                                          {feedback.date &&
                                            new Date(
                                              feedback.date
                                            ).toLocaleDateString()}
                                        </span>
                                      </div>
                                      <div className="form-group">
                                        <div className="stars rt01">
                                          {Array.from(
                                            { length: 5 },
                                            (_, idx) => (
                                              <i
                                                key={idx}
                                                className={`fas fa-star${
                                                  idx < feedback.rating
                                                    ? ""
                                                    : "-empty"
                                                }`}
                                              ></i>
                                            )
                                          )}
                                        </div>
                                      </div>
                                      <p>{feedback.comments}</p>
                                    </div>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <p>Hiện tại chưa có reviews.</p>
                            )}
                          </div>

                          <div className="leave-sec-part">
                            <h2>Bình Luận</h2>
                            {user ? (
                              <form onSubmit={handleSubmitComment}>
                                <div className="row">
                                  <div className="col-lg-12 mb-3">
                                    <div className="form-group">
                                      <div className="stars">
                                        {[1, 2, 3, 4, 5].map((rating) => (
                                          <i
                                            key={rating}
                                            className={`fa-star ${
                                              newFeedback.rating >= rating
                                                ? "fas"
                                                : "far"
                                            }`}
                                            onClick={() =>
                                              setNewFeedback({
                                                ...newFeedback,
                                                rating,
                                              })
                                            }
                                          />
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="form-group">
                                      <textarea
                                        className="form-control"
                                        placeholder="Message"
                                        name="comments"
                                        value={newFeedback.comments}
                                        onChange={handleInputChange}
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
                              </form>
                            ) : (
                              <Link to="/login">
                                <p>Hãy đăng nhập để thực hiện bình luận.</p>
                              </Link>
                            )}
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
      <Footer />
      <MobileMenu />
      {isModalOpen && (
        <SessionType
          selectedTarotReaderId={selectedTarotReaderId}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
