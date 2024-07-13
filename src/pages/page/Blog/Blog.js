import React from "react";
import Header from "../../../components/Header/Header";
import MobileMenu from "../../../components/Mobile Menu/MobileMenu";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./Blog.css";

export default function Blog() {
  return (
    <div>
      {/* <!-- Header Modal --> */}
      <Header />

      <section className="sub-banner-section float-start w-100">
        <div className="img-main-abnner d-inline-block w-100">
          <img alt="sm" src="assets/images/horocurty03.jpg" />
        </div>
        <div className="container">
          <h2 className="text-center text-white"> Blog </h2>
        </div>
      </section>
      <main
        className="float-start w-100 body-main"
        style={{ backgroundColor: "#0c071c" }}
      >
        <section
          className="blogs-info-div d-inline-block w-100 my-5"
          style={{ backgroundColor: "#0c071c" }}
        >
          <div className="container">
            <div className="row gy-5 g-lg-5">
              <div className="col-lg-12">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="listed-bn"></div>
                </div>

                <div id="products" className="mt-4">
                  <div className="d-flex flex-wrap justify-content-between">
                    <Link
                      to="/blogDetail"
                      className="item list-item col-md-6 col-lg-6 col-xl-6 view-group list-group-item"
                      style={{ flex: "0 0 48%", marginBottom: "20px" }}
                    >
                      <div className="inside-div01">
                        <div className="left-div-list">
                          <img
                            src="assets/images/imag-tarot_make-a-wish.webp"
                            alt="pnm"
                          />
                          <div className="hvert">
                            01<b className="d-block">Tháng 7</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            <i className="fas fa-tags"></i> Góc Tarot
                          </h6>
                          <h5>Giới Thiệu Các Bộ Bài Tarot Nổi Tiếng</h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> Bởi Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 01 Tháng 7 2024 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            Tarot đã trở thành một công cụ phổ biến cho việc
                            tiên đoán và tự khám phá bản thân. Với nhiều bộ bài
                            tarot khác nhau, mỗi bộ đều mang những nét độc đáo
                            và phong cách riêng.Tarot đã trở thành một công cụ
                            phổ biến cho việc tiên đoán và tự khám phá bản thân.
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/blogDetail1"
                      className="item list-item col-md-6 col-lg-6 col-xl-6 view-group list-group-item"
                      style={{ flex: "0 0 48%", marginBottom: "20px" }}
                    >
                      <div className="inside-div01">
                        <div className="left-div-list">
                          <img src="assets/images/aggju.jpg" alt="pnm" />
                          <div className="hvert">
                            03<b className="d-block">Tháng 7</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            <i className="fas fa-tags"></i>Tarot Sức Khỏe & Tâm
                            Lý
                          </h6>
                          <h5>
                            Tarot và Sức Khỏe Tâm Lý: Sử Dụng Tarot Như Một Công
                            Cụ Hỗ Trợ Tâm Lý
                          </h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> Bởi Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 03 Tháng 7 2024 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            Sử dụng tarot có thể giúp bạn hiểu rõ hơn về bản
                            thân, tìm ra nguyên nhân của những vấn đề tâm lý và
                            đưa ra giải pháp để cải thiện tình trạng hiện tại.
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/blogDetail2"
                      className="item list-item col-md-6 col-lg-6 col-xl-6 view-group list-group-item"
                      style={{ flex: "0 0 48%", marginBottom: "20px" }}
                    >
                      <div className="inside-div01">
                        <div className="left-div-list">
                          <img
                            src="assets/images/b25b0862914e3a91284933a7af276075.jpg"
                            alt="pnm"
                          />
                          <div className="hvert">
                            04<b className="d-block">Tháng 7</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            <i className="fas fa-tags"></i>Giải Nghĩa Bài Tarot
                          </h6>
                          <h5>
                            SEVEN OF CUPS SHADOWSCAPES TAROT - MÔ TẢ & GIẢI
                            NGHĨA TRẢI BÀI
                          </h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> Bởi Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 04 Tháng 7 2024 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            Làm thế nào để sống thanh thản và nhẹ nhàng? Lá bài
                            Seven of Cups Shadowscapes sẽ trả lời cho câu hỏi
                            đó. Nó được xem là một con đường hướng đến sự thanh
                            thản.
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/blogDetail3"
                      className="item list-item col-md-6 col-lg-6 col-xl-6 view-group list-group-item"
                      style={{ flex: "0 0 48%", marginBottom: "20px" }}
                    >
                      <div className="inside-div01">
                        <div className="left-div-list">
                          <img
                            src="assets/images/cat-crawford-b1AsZn2C-lo-unsplash.jpg"
                            alt="pnm"
                          />
                          <div className="hvert">
                            05<b className="d-block">Tháng 7</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            {" "}
                            <i className="fas fa-tags"></i>vulputate
                          </h6>
                          <h5>
                            KING OF WANDS SHADOWSCAPES TAROT - MÔ TẢ & GIẢI
                            NGHĨA TRẢI BÀI
                          </h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> Bởi Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 05 Tháng 7 2024 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            King of Wands Shadowscapes thường liên kết với cung
                            hoàng đạo Nhân Mã, mang theo một nguồn năng lượng
                            nam tính mạnh mẽ, cởi mở và đam mê phiêu lưu.
                          </p>
                        </div>
                      </div>
                    </Link>

                    <a
                      href="blog-details.html"
                      className="item list-item col-md-6 col-lg-6 col-xl-6 view-group list-group-item"
                      style={{ flex: "0 0 48%", marginBottom: "20px" }}
                    >
                      <div className="inside-div01">
                        <div className="left-div-list">
                          <img
                            src="assets/images/cat-crawford-b1AsZn2C-lo-unsplash.jpg"
                            alt="pnm"
                          />
                          <div className="hvert">
                            05<b className="d-block">Tháng 7</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            {" "}
                            <i className="fas fa-tags"></i>vulputate
                          </h6>
                          <h5>Curabitur với sự trỗi dậy của sự mạnh mẽ</h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> Bởi Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 05 Tháng 7 2024 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            Việc xem bài tarot từ lâu đã là nguồn cảm hứng và sự
                            hiểu biết cho những người đang tìm kiếm sự rõ ràng
                            trong cuộc sống của họ. Khám phá cách các lá bài có
                            thể chiếu sáng con đường và mang đến những phát hiện
                            sâu sắc trong cuộc hành trình của bạn.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      href="blog-details.html"
                      className="item list-item col-md-6 col-lg-6 col-xl-6 view-group list-group-item"
                      style={{ flex: "0 0 48%", marginBottom: "20px" }}
                    >
                      <div className="inside-div01">
                        <div className="left-div-list">
                          <img
                            src="assets/images/tengyart-VgijAV-e97Y-unsplash.jpg"
                            alt="pnm"
                          />
                          <div className="hvert">
                            06<b className="d-block">Tháng 7</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            <i className="fas fa-tags"></i>vulputate
                          </h6>
                          <h5>
                            {" "}
                            Năm 2024 là một năm đầy hứa hẹn cho những người đọc
                            tarot
                          </h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> Bởi Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 06 Tháng 7 2024 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            Năm 2024 hứa hẹn mang lại những cơ hội tuyệt vời
                            trong việc sử dụng bài tarot để đạt được sự hiểu
                            biết sâu sắc và sự rõ ràng trong cuộc sống. Tìm hiểu
                            cách các lá bài tarot có thể hướng dẫn bạn vượt qua
                            những thách thức và khám phá các khía cạnh mới của
                            bản thân.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MobileMenu />
      <Footer />
    </div>
  );
}
