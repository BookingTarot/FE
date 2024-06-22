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
  });

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

  const applyFilters = () => {
    let newFilteredReaders = tarotReaders;

    if (filters.love) {
      newFilteredReaders = newFilteredReaders.filter((reader) =>
        reader.kind.includes("Psychic")
      );
    }

    if (filters.work) {
      newFilteredReaders = newFilteredReaders.filter((reader) =>
        reader.kind.includes("Công Việc")
      );
    }

    if (filters.health) {
      newFilteredReaders = newFilteredReaders.filter((reader) =>
        reader.kind.includes("Sức khỏe")
      );
    }

    if (filters.finance) {
      newFilteredReaders = newFilteredReaders.filter((reader) =>
        reader.kind.includes("Tài chính")
      );
    }

    setFilteredReaders(newFilteredReaders);
  };

  const handleSortByExperience = (years) => {
    let sortedReaders = [...filteredReaders];
    switch (years) {
      case "lessThan1":
        sortedReaders = sortedReaders.filter((reader) => reader.experience < 1);
        break;
      case "moreThan1":
        sortedReaders = sortedReaders.filter(
          (reader) => reader.experience >= 1
        );
        break;
      case "moreThan3":
        sortedReaders = sortedReaders.filter(
          (reader) => reader.experience >= 3
        );
        break;
      case "moreThan5":
        sortedReaders = sortedReaders.filter(
          (reader) => reader.experience >= 5
        );
        break;
      default:
        break;
    }
    setFilteredReaders(sortedReaders);
  };

  useEffect(() => {
    const fetchTarotReaders = async () => {
      try {
        const response = await axios.get(
          "https://tarot.somee.com/api/TarotReader"
        );

        const filterDuration = response.data.map((reader) => ({
          ...reader,
          sessionTypes: reader.sessionTypes.filter(
            (sessionType) => sessionType.duration === 30
          ),
        }));
        setTarotReaders(filterDuration);
        setFilteredReaders(filterDuration);
      } catch (error) {
        console.error("Error fetching the tarot readers data", error);
      }
    };

    fetchTarotReaders();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, tarotReaders]);

  const handleBookMe = (readerId) => {
    if (!user) {
      // If user is not logged in, redirect to login page
      navigate("/login");
    } else {
      openModal(readerId);
    }
  };

  return (
    <div>
      {/* <!-- Header Modal --> */}
      <Header />

      <section class="sub-banner-section float-start w-100">
        <div class="img-main-abnner d-inline-block w-100">
          <img alt="sm" src="assets/images/horocurty03.jpg" />
        </div>
        <div class="container">
          <h2 class="text-center text-white"> Tarot Reader </h2>
          <nav class="mt-4">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">Trang Chủ</li>
              <li class="breadcrumb-item active">Tarot Reader</li>
            </ol>
          </nav>
        </div>
      </section>
      <main
        class="float-start w-100 body-main"
        style={{ backgroundColor: "#0c071c" }}
      >
        <section class="listing-page-div">
          <div class="container">
            <div class="row gx-lg-5">
              <div class="col-lg-3">
                <div
                  class="accordion mt-4 list-serach-acd"
                  id="accordionPanelsStayOpenExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        Kinh Nghiệm
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse show"
                    >
                      <div class="accordion-body my-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            name="love"
                            checked={filters.love}
                            onChange={handleFilterChange}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Tình yêu
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault2"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault2"
                          >
                            Công việc
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault3"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault3"
                          >
                            Sức khỏe
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault4"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault4"
                          >
                            Tài chính
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    {/* <h2 class="accordion-header">
                      <button
                        class="accordion-button "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapsefour"
                      >
                        Experience
                      </button>
                    </h2> */}
                    <div
                      id="panelsStayOpen-collapsefour"
                      class="accordion-collapse collapse show"
                    >
                      {/* <div class="accordion-body my-5">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault11"
                          />
                          <label
                            class="form-check-label rt-icon"
                            for="flexCheckDefault11"
                          >
                            Upto 10 Years
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault12"
                          />
                          <label
                            class="form-check-label rt-icon"
                            for="flexCheckDefault8"
                          >
                            Upto 15 Years
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault13"
                          />
                          <label
                            class="form-check-label rt-icon"
                            for="flexCheckDefault13"
                          >
                            Upto 10 Years
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault14"
                          />
                          <label
                            class="form-check-label rt-icon"
                            for="flexCheckDefault14"
                          >
                            20 Years & Above
                          </label>
                        </div>
                      </div> */}
                    </div>
                  </div>

                  <input type="submit" class="btn submit-btn" value="Filter" />
                </div>
              </div>

              <div class="col-lg-9 mt-5 mt-lg-0">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="right-section-btn d-flex align-items-center">
                    <div class="dropdown">
                      <button
                        class="btn bg-light dfg dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sắp xếp
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <button
                            class="dropdown-item"
                            onClick={() => handleSortByExperience("lessThan1")}
                          >
                            Ít hơn 1 năm
                          </button>
                        </li>
                        <li>
                          <button
                            class="dropdown-item"
                            onClick={() => handleSortByExperience("moreThan1")}
                          >
                            Hơn 1 năm
                          </button>
                        </li>
                        <li>
                          <button
                            class="dropdown-item"
                            onClick={() => handleSortByExperience("moreThan3")}
                          >
                            Hơn 3 năm
                          </button>
                        </li>
                        <li>
                          <button
                            class="dropdown-item"
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
                  <div class="row g-lg-5 mt-0">
                    {tarotReaders.map((reader, index) => (
                      <div
                        key={index}
                        className="item list-item col-md-12 col-xl-6 view-group grid-group-item collist"
                      >
                        <div className="comon-items-d1 d-inline-block w-100">
                          <Link to={`${reader.tarotReaderId}`}>
                            <div className="top-asto d-flex align-items-center justify-content-between w-100">
                              <div className="pro-astro d-flex align-items-start">
                                <div className="profile-astro">
                                  <img
                                    alt="ser"
                                    src="assets/images/profile2.png"
                                  />
                                </div>

                                <div className="le-astro ms-4">
                                  <h5>{reader.fullName} </h5>
                                  <p className="rt-cion">
                                    <span>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                    </span>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </p>
                                </div>
                              </div>

                              <div className="right-usert text-lg-end">
                                <h5> {reader.kind} </h5>
                                <p> Exp: {reader.experience} </p>
                              </div>
                            </div>
                          </Link>
                          <div className="lang-ved mt-4">
                            <p>
                              <i className="fas fa-newspaper"></i>{" "}
                              {truncateText(reader.introduction, 40)}
                            </p>
                          </div>

                          <hr />
                          <div
                            className="lang-ved mt-4"
                            style={{ justifyContent: "space-between" }}
                          >
                            {reader.sessionTypes.map((sessionType) => (
                              <p
                                key={sessionType.sessionTypeId}
                                style={{ marginTop: "1.5rem" }}
                              >
                                <i
                                  className="fas fa-clock"
                                  style={{
                                    color: "#273cb9",
                                    fontSize: "25px",
                                  }}
                                ></i>
                                {sessionType.duration} phút
                              </p>
                            ))}

                            <btn
                              onClick={() => handleBookMe(reader.tarotReaderId)}
                              className="btn btn-comij-call"
                            >
                              Book Me
                            </btn>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <nav class="my-5">
                    <ul class="pagination">
                      <li class="page-item disabled">
                        <a class="page-link" href="#">
                          Previous
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item active" aria-current="page">
                        <a class="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
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

      {/* <!-- SessionType menu --> */}
      {isModalOpen && (
        <SessionType
          selectedTarotReaderId={selectedTarotReaderId}
          onClose={closeModal}
          tarotReaderName={selectedTarotReaderName}
        />
      )}

      {/* <SessionType /> */}
    </div>
  );
}
