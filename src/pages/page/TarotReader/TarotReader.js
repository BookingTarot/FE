import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Header from "../../../components/Header/Header";
import MobileMenu from "../../../components/Mobile Menu/MobileMenu";
import Footer from "../../../components/Footer/Footer";
import SessionType from "../../../components/Popup/SessionType";
import { Link } from "react-router-dom";
import Btn from "../../../components/Button/Btn";
import { useAuth } from "../../../components/Login/Authen";
import "./TarotReader.css";

export default function TarotReader() {
  const { user } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedTarotReaderId, setSelectedTarotReaderId] = useState(null);
  const [selectedTarotReaderName, setSelectedTarotReaderName] = useState(null);
  const [tarotReaders, setTarotReaders] = useState([]);
  const [filteredReaders, setFilteredReaders] = useState([]);
  const [filters, setFilters] = useState({
    love: false,
    work: false,
    health: false,
    finance: false,
    another: false,
  });
  const [hoveredReader, setHoveredReader] = useState(null);
  const [averageRatings, setAverageRatings] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const openModal = (tarotReaderId, tarotReaderName) => {
    setSelectedTarotReaderId(tarotReaderId);
    setSelectedTarotReaderName(tarotReaderName);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split("");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join("") + "...";
    }
    return text;
  };

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: checked }));
  };

  const totalPages = Math.ceil(filteredReaders.length / itemsPerPage);

  const currentData = filteredReaders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const applyFilters = () => {
    let newFilteredReaders = [...tarotReaders];

    const filterConditions = [];

    if (filters.love) {
      filterConditions.push("Tình yêu");
    }
    if (filters.work) {
      filterConditions.push("Công việc");
    }
    if (filters.health) {
      filterConditions.push("Sức khỏe");
    }
    if (filters.finance) {
      filterConditions.push("Tài chính");
    }
    console.log("Filter Conditions:", filterConditions);
    if (filters.another) {
      newFilteredReaders = newFilteredReaders.filter(
        (reader) =>
          !filterConditions.some((condition) => reader.kind.includes(condition))
      );
    } else if (filterConditions.length > 0) {
      newFilteredReaders = newFilteredReaders.filter((reader) =>
        filterConditions.some((condition) => reader.kind.includes(condition))
      );
    }

    setFilteredReaders(newFilteredReaders);
  };

  const handleSortByExperience = (years) => {
    let sortedReaders = [...filteredReaders];

    switch (years) {
      case "lessThan5":
        sortedReaders = sortedReaders.filter(
          (reader) => parseInt(reader.experience, 10) < 5
        );
        break;
      case "moreThan5":
        sortedReaders = sortedReaders.filter(
          (reader) => parseInt(reader.experience, 10) >= 5
        );
        break;
      default:
        sortedReaders = [...tarotReaders];
        break;
    }

    setFilteredReaders(sortedReaders);
  };

  useEffect(() => {
    const fetchTarotReaders = async () => {
      try {
        const response = await axios.get(
          "https://tarott.azurewebsites.net/api/TarotReader"
        );
        setTarotReaders(response.data);
        setFilteredReaders(response.data);
        fetchAverageRatings(response.data);
      } catch (error) {
        console.error("Error fetching the tarot readers data", error);
      }
    };

    fetchTarotReaders();
  }, []);

  const fetchAverageRatings = async (readers) => {
    const ratings = {};
    for (const reader of readers) {
      try {
        const response = await axios.get(
          `https://tarott.azurewebsites.net/api/Feedbacks/tarotreader/${reader.tarotReaderId}`
        );
        const feedbacks = response.data;
        ratings[reader.tarotReaderId] = calculateAverageRating(feedbacks);
      } catch (error) {
        console.error("Error fetching feedbacks", error);
        ratings[reader.tarotReaderId] = 0; // Default to 0 if there is an error
      }
    }
    setAverageRatings(ratings);
  };

  const calculateAverageRating = (feedbacks) => {
    if (feedbacks.length === 0) {
      return 0;
    }
    const totalRating = feedbacks.reduce(
      (total, feedback) => total + feedback.rating,
      0
    );
    return totalRating / feedbacks.length;
  };

  useEffect(() => {
    applyFilters();
  }, [filters, tarotReaders]);

  const handleBookMe = (readerId) => {
    if (!user) {
      navigate("/login");
    } else {
      openModal(readerId);
    }
  };

  const handleMouseEnter = (readerId) => {
    setHoveredReader(readerId);
  };

  const handleMouseLeave = () => {
    setHoveredReader(null);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const renderStars = (rating) => {
    if (typeof rating !== "number" || rating < 0 || rating > 5) {
      return null; // Handle invalid ratings
    }

    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <i key={`full-${index}`} className="fas fa-star"></i>
        ))}
        {halfStar === 1 && <i className="fas fa-star-half-alt"></i>}
        {[...Array(emptyStars)].map((_, index) => (
          <i key={`empty-${index}`} className="far fa-star"></i>
        ))}
      </>
    );
  };
  return (
    <div>
      <Header />

      <section className="sub-banner-section float-start w-100">
        <div className="img-main-abnner d-inline-block w-100">
          <img alt="sm" src="assets/images/horocurty03.jpg" />
        </div>
        <div className="container">
          <h2 className="text-center text-white"> Tarot Reader </h2>
        </div>
      </section>

      <main
        className="float-start w-100 body-main"
        style={{ backgroundColor: "#0c071c" }}
      >
        <section className="listing-page-div">
          <div className="container">
            <div className="row gx-lg-5">
              <div className="col-lg-3">
                <div
                  className="accordion mt-4 list-serach-acd"
                  id="accordionPanelsStayOpenExample"
                >
                  <div className="accordion-item" style={{ height: "300px" }}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                        style={{
                          padding: "8px",
                          fontFamily: "Arial, Helvetica, sans-serif ",
                        }}
                      >
                        Thể Loại
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body my-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            name="love"
                            checked={filters.love}
                            onChange={handleFilterChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                            style={{
                              marginLeft: "10px",
                              fontFamily: "Arial, Helvetica, sans-serif ",
                            }}
                          >
                            Tình yêu
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault2"
                            name="work"
                            checked={filters.work}
                            onChange={handleFilterChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault2"
                            style={{
                              marginLeft: "10px",
                              fontFamily: "Arial, Helvetica, sans-serif ",
                            }}
                          >
                            Công việc
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault3"
                            name="health"
                            checked={filters.health}
                            onChange={handleFilterChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault3"
                            style={{
                              marginLeft: "10px",
                              fontFamily: "Arial, Helvetica, sans-serif ",
                            }}
                          >
                            Sức khỏe
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault4"
                            name="finance"
                            checked={filters.finance}
                            onChange={handleFilterChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault4"
                            style={{
                              marginLeft: "10px",
                              fontFamily: "Arial, Helvetica, sans-serif ",
                            }}
                          >
                            Tài chính
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault5"
                            name="another"
                            checked={filters.another}
                            onChange={handleFilterChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault3"
                            style={{
                              marginLeft: "10px",
                              fontFamily: "Arial, Helvetica, sans-serif ",
                            }}
                          >
                            Khác
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9 mt-5 mt-lg-0">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="right-section-btn d-flex align-items-center">
                    <div className="dropdown">
                      <button
                        className="btn bg-light dfg dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{
                          width: "150px",
                          fontSize: "15px",
                          fontFamily: "Arial, Helvetica, sans-serif ",
                        }}
                      >
                        Kinh Nghiệm
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                        style={{ width: "150px" }}
                      >
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => handleSortByExperience()}
                          >
                            Toàn bộ
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => handleSortByExperience("lessThan5")}
                          >
                            Ít hơn 5 năm
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => handleSortByExperience("moreThan5")}
                          >
                            Hơn 5 năm
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="products">
                  <div className="row g-lg-5 mt-0">
                    {filteredReaders.map((reader, index) => (
                      <div
                        key={index}
                        className="item list-item col-md-12 col-xl-6 view-group grid-group-item collist"
                      >
                        <div
                          className="comon-items-d1 d-inline-block w-100 frameInfo"
                          onMouseEnter={() =>
                            handleMouseEnter(reader.tarotReaderId)
                          }
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link
                            to={`/tarotReaderDetail/${reader.tarotReaderId}`}
                            style={{ textDecoration: "none" }}
                          >
                            <div className="top-asto d-flex align-items-center justify-content-between w-100">
                              <div className="pro-astro d-flex align-items-start">
                                <div className="profile-astro">
                                  <img
                                    alt="ser"
                                    src="../../../assets/images/profile2.png"
                                  />
                                </div>

                                <div className="le-astro ms-4">
                                  <h5>{reader.fullName} </h5>
                                  <p className="rt-cion">
                                    <span>
                                      {renderStars(
                                        averageRatings[reader.tarotReaderId]
                                      )}
                                    </span>
                                  </p>
                                </div>
                              </div>

                              <div className="right-usert text-lg-end">
                                <h5
                                  style={{
                                    fontFamily: "Arial, Helvetica, sans-serif ",
                                  }}
                                >
                                  {" "}
                                  {truncateText(reader.kind, 25)}{" "}
                                </h5>
                                <p
                                  style={{
                                    fontSize: "14px",
                                    fontFamily: "Arial, Helvetica, sans-serif ",
                                  }}
                                >
                                  {" "}
                                  Kinh Nghiệm:{" "}
                                  {truncateText(reader.experience, 7)}
                                </p>
                              </div>
                            </div>
                          </Link>
                          <div className="lang-ved mt-4">
                            <p
                              style={{
                                fontSize: "14px",
                                fontFamily: "Arial, Helvetica, sans-serif ",
                              }}
                            >
                              <i
                                className="fas fa-newspaper"
                                style={{ fontSize: "20px" }}
                              ></i>{" "}
                              {hoveredReader === reader.tarotReaderId
                                ? reader.introduction
                                : truncateText(reader.introduction, 50)}
                            </p>
                          </div>

                          <hr />
                          <div
                            className="lang-ved mt-4"
                            style={{ justifyContent: "space-between" }}
                          >
                            {reader.sessionTypes.length > 0 && (
                              <div>
                                <p
                                  style={{
                                    fontWeight: "bold",
                                    marginTop: "1rem",
                                    fontSize: "14px",
                                  }}
                                ></p>
                                <p
                                  style={{
                                    marginTop: "1.5rem",
                                    fontSize: "14px",
                                  }}
                                >
                                  <i
                                    className="fas fa-money-bill-wave"
                                    style={{
                                      color: "#d3a417",
                                      fontSize: "20px",
                                      marginRight: "10px",
                                    }}
                                  ></i>
                                  {findLowestPrice(reader.sessionTypes)}
                                  .000+ VNĐ / buổi
                                </p>
                              </div>
                            )}

                            <Btn
                              onClick={() => handleBookMe(reader.tarotReaderId)}
                              className="btn btn-comij-call"
                            >
                              Đặt Lịch
                            </Btn>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <nav className="my-5 d-flex justify-content-end">
                    <ul className="pagination">
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(currentPage - 1)}
                        >
                          Trước
                        </button>
                      </li>
                      {pageNumbers.map((number) => (
                        <li
                          key={number}
                          className={`page-item ${
                            currentPage === number ? "active" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(number)}
                          >
                            {number}
                          </button>
                        </li>
                      ))}
                      <li
                        className={`page-item ${
                          currentPage === totalPages ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(currentPage + 1)}
                        >
                          Sau
                        </button>
                      </li>
                    </ul>
                  </nav>
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
          tarotReaderName={selectedTarotReaderName}
        />
      )}
    </div>
  );
}
function findLowestPrice(sessionTypes) {
  if (sessionTypes.length === 0) return "";

  let minPrice = sessionTypes[0].price;
  sessionTypes.forEach((sessionType) => {
    if (sessionType.price < minPrice) {
      minPrice = sessionType.price;
    }
  });

  return minPrice;
}
