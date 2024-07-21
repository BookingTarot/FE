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
                          <p
                            className="mt-3"
                            style={{
                              fontFamily: "Arial, Helvetica, sans-serif ",
                            }}
                          >
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
                          <p
                            className="mt-3"
                            style={{
                              fontFamily: "Arial, Helvetica, sans-serif ",
                            }}
                          >
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
                            Seven of Cups Shadowscapes Tarot - Mô Tả & Giải
                            Nghĩa Trải Bài
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
                          <p
                            className="mt-3"
                            style={{
                              fontFamily: "Arial, Helvetica, sans-serif ",
                            }}
                          >
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
                            <i className="fas fa-tags"></i>Giải nghĩa bài Tarot
                          </h6>
                          <h5>
                            King of Wands Shadowscapes Tarot - Mô Tả & Giải
                            Nghĩa Trải Bài
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
                          <p
                            className="mt-3"
                            style={{
                              fontFamily: "Arial, Helvetica, sans-serif ",
                            }}
                          >
                            King of Wands Shadowscapes thường liên kết với cung
                            hoàng đạo Nhân Mã, mang theo một nguồn năng lượng
                            nam tính mạnh mẽ, cởi mở và đam mê phiêu lưu.
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/blogDetail4"
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
                            <i className="fas fa-tags"></i>Giải nghĩa bài Tarot
                          </h6>
                          <h5>Ace of Cups - Hạnh Phúc Đơn Thuần</h5>
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
                          <p
                            className="mt-3"
                            style={{
                              fontFamily: "Arial, Helvetica, sans-serif ",
                            }}
                          >
                            Sống với một trái tim chân thành và cởi mở. Cho phép
                            bản thân cảm nhận những cơ hội của tình yêu, niềm
                            vui và hạnh phúc.
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/blogDetail5"
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
                            <i className="fas fa-tags"></i>Giải nghĩa bài Tarot
                          </h6>
                          <h5>
                            {" "}
                            King of Cups Shadowscapes Tarot - Mô Tả & Giải Nghĩa
                            Trải Bài
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
                          <p
                            className="mt-3"
                            style={{
                              fontFamily: "Arial, Helvetica, sans-serif ",
                            }}
                          >
                            King of Cups trong Shadowscapes Tarot thực sự là một
                            biểu tượng của sự kết hợp tinh tế giữa tâm linh và
                            cảm xúc.
                          </p>
                        </div>
                      </div>
                    </Link>
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
