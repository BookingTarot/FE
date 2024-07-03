import React from "react";
import Header from "../../../components/Header/Header";
import Register from "../../../components/Login/Register";
import Login from "../../../components/Login/Login";
import MobileMenu from "../../../components/Mobile Menu/MobileMenu";
import Footer from "../../../components/Footer/Footer";

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
          <nav className="mt-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item active"> Blog </li>
            </ol>
          </nav>
        </div>
      </section>
      <main
        className="float-start w-100 body-main"
        style={{ backgroundColor: "#0c071c" }}
      >
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
                            01<b className="d-block">Tháng 7</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            <i className="fas fa-tags"></i> Góc Tarot
                          </h6>
                          <h5>
                            Giải Mã Tarot: Hướng Dẫn Cho Người Mới Bắt Đầu
                          </h5>
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
                            Khám phá thế giới tarot đầy thú vị với hướng dẫn
                            toàn diện của chúng tôi. Dù bạn là người mới bắt đầu
                            muốn học những điều cơ bản hay là người đọc tarot có
                            kinh nghiệm đang tìm cách nâng cao kiến thức, bài
                            viết này cung cấp những thông tin giá trị về nghệ
                            thuật đọc tarot. Tìm hiểu về lịch sử, ý nghĩa của
                            các lá bài và những mẹo để đọc bài chính xác. Bắt
                            đầu hành trình vào thế giới huyền bí của tarot ngay
                            hôm nay!
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
                            03<b className="d-block">Tháng 7</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            <i className="fas fa-tags"></i>vulputate
                          </h6>
                          <h5>
                            Đây là một sự thật đã được thiết lập từ lâu rằng
                          </h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> By Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 03 Tháng 7 2024 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            Một sự thật đã được thiết lập từ lâu rằng người đọc
                            sẽ bị phân tâm bởi nội dung dễ đọc của một trang khi
                            nhìn vào cách trình bày của nó. Lorem Ipsum đã là
                            văn bản chuẩn của ngành công nghiệp in ấn và sắp chữ
                            từ những năm 1500, khi một nhà in ấn vô danh lấy một
                            bộ sưu tập các bản in và sắp xếp chúng để tạo ra một
                            mẫu sách.
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
                            04<b className="d-block">Tháng 7</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            <i className="fas fa-tags"></i>vulputate
                          </h6>
                          <h5>
                            Trong khi đọc bài Tarot, hãy tập trung vào mục tiêu
                            và duy trì trạng thái tinh thần bình tĩnh
                          </h5>
                          <div className="d-flex align-items-center">
                            <div className="admin-t">
                              <i className="far fa-user"></i>
                              <span> By Admin </span>
                            </div>
                            <div className="admin-t">
                              <i className="fas fa-calendar-alt"></i>
                              <span> 04 Tháng 7 2024 </span>
                            </div>
                          </div>
                          <p className="mt-3">
                            Khi đọc bài Tarot, việc tập trung vào mục tiêu và
                            duy trì trạng thái tinh thần bình tĩnh là rất quan
                            trọng. Bài viết này hướng dẫn cách sử dụng bài Tarot
                            để tìm kiếm câu trả lời trong những tình huống khó
                            khăn.
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
                            {" "}
                            <i className="fas fa-tags"></i> Tarot
                          </h6>
                          <h5>Khám phá sự kỳ diệu của bài Tarot</h5>
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
                            {" "}
                            Bài Tarot không chỉ đơn giản là một phương pháp dự
                            đoán tương lai mà nó còn là một công cụ tuyệt vời để
                            khám phá sâu sắc về bản thân và về các mối quan hệ
                            xung quanh. Hãy cùng chúng tôi tìm hiểu về sức mạnh
                            tâm linh và sự kỳ diệu của bài Tarot trong cuộc sống
                            hàng ngày của bạn.
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
                            06<b className="d-block">Tháng 7</b>
                          </div>
                        </div>
                        <div className="right-list-div">
                          <h6>
                            {" "}
                            <i className="fas fa-tags"></i> Tarot
                          </h6>
                          <h5>Khám phá những bài Tarot nổi tiếng và ý nghĩa</h5>
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
                            {" "}
                            Bài Tarot không chỉ là một loại bói toán mà còn là
                            một cách để khám phá những tầng sâu của tâm hồn và
                            tìm hiểu về mối quan hệ, sự nghiệp và tương lai của
                            bạn. Hãy cùng chúng tôi đi vào thế giới phép màu của
                            bài Tarot và những ý nghĩa sâu sắc mà nó mang lại.
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

      {/* <!-- footer Modal --> */}
      <Footer />

      {/* <!-- mobile menu --> */}

      <MobileMenu />
    </div>
  );
}
