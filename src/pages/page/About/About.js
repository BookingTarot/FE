import React from "react";
import Login from "../../../components/Login/Login";
import Register from "../../../components/Login/Register";
import Header from "../../../components/Header/Header";
import MobileMenu from "../../../components/Mobile Menu/MobileMenu";
import Footer from "../../../components/Footer/Footer";

export default function About() {
  return (
    <div>
      {/* <!-- Header Modal --> */}
      <Header />

      <section className="sub-banner-section float-start w-100">
        <div className="img-main-abnner d-inline-block w-100">
          <img alt="sm" src="assets/images/horocurty03.jpg" />
        </div>
        <div className="container">
          <h2 className="text-center text-white"> Về Chúng Tôi </h2>
        </div>
      </section>
      <main className="float-start w-100 body-main">
        <section
          className="about-part-section d-inline-block w-100"
          style={{ backgroundColor: "#0c071c" }}
        >
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-2 gy-5 g-lg-5">
              <div className="col">
                <div className="img-box01 d-inline-block w-100 position-relative">
                  <figure className="moon-img">
                    <img alt="moon" src="assets/images/moon.jpg" />
                  </figure>
                  <figure className="big-imog" data-aos="fade-down">
                    <img alt="sm" src="assets/images/imok.png" />
                  </figure>
                  <div
                    className="wt-yeras d-flex align-items-center text-center justify-content-center"
                    data-aos="fade-up"
                  >
                    <h4 className="text-center">
                      1 +<span className="d-lg-block">Số Năm Kinh Nghiệm</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col">
                <h5 data-aos="fade-down" style={{ textAlign: "center" }}>
                  {" "}
                  Về Tellory{" "}
                </h5>
                <h2 className="text-white my-2" data-aos="fade-down">
                  {" "}
                  Chúng Tôi Có Thể Giúp Bạn
                  <span className="d-lg-block" data-aos="fade-up">
                    {" "}
                    Tự Tin Hơn Với Bài Tarot
                  </span>
                </h2>
                <p className="mt-3" data-aos="fade-up">
                  {" "}
                  Tarot là một môn tập luyện bí truyền có hơn 400 năm tuổi gần
                  đây đã bùng nổ thành một nghi thức suy ngẫm phổ biến đối với
                  hàng triệu người trên toàn thế giới. Đối tượng ngày càng mở
                  rộng của nó đang tìm kiếm các công cụ tốt hơn để cùng nhau
                  giải bài tarot trực tuyến.{" "}
                </p>
                <p className="mt-3">
                  {" "}
                  Vì vậy, Tellory đã xây dựng một nền tảng mới để phát triển
                  theo nhu cầu của tarot. Chúng tôi tạo ra những công cụ tuyệt
                  vời bao gồm các phiên tarot được cá nhân hóa, bộ bài kỹ thuật
                  số, đặt chỗ dễ dàng và hơn thế nữa!
                </p>

                <div style={{ float: "right" }}>
                  <a
                    href="#"
                    className="read-btn btn mt-4"
                    data-aos="fade-down"
                    style={{ float: "right" }}
                  >
                    <span> Khám Phá Ngay </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="choose-div-signu  d-inline-block w-100">
          <div className="container">
            <div className="comon-heading text-center">
              <h5 className="sub-heading" data-aos="fade-down">
                {" "}
                Biểu Tượng Hoàng Đạo{" "}
              </h5>
              <h2
                className="text-white comon-heading mt-3"
                data-aos="fade-down"
              >
                {" "}
                Khám Phá Bản Thân Với Các Cung Hoàng Đạo{" "}
              </h2>
            </div>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-6 gy-5 g-lg-5 mt-4"
              data-aos="fade-up"
            >
              <div className="col">
                <a
                  href="#"
                  className="text-center comon-zodic w-100 d-grid align-content-center justify-content-center"
                  style={{ textDecoration: "none" }}
                >
                  <div className="round-imog">
                    <img alt="al" src="assets/images/round.png" />
                    <div className="img-out diamond1">
                      <img alt="Aries" src="assets/images/10350949.png" />
                    </div>
                  </div>
                  <div className="textr-dels mt-3">
                    <h5
                      className="text-white"
                      style={{ textDecoration: "none !important" }}
                    >
                      {" "}
                      BẠCH DƯƠNG{" "}
                    </h5>
                    <p
                      className="mt-2"
                      style={{ textDecoration: "none !important" }}
                    >
                      {" "}
                      21/3 - 19/4
                    </p>
                  </div>
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  className="text-center comon-zodic w-100 d-grid align-content-center justify-content-center"
                  style={{ textDecoration: "none" }}
                >
                  <div className="round-imog">
                    <img alt="al" src="assets/images/round.png" />
                    <div className="img-out diamond1">
                      <img alt="Aries" src="assets/images/9009939.png" />
                    </div>
                  </div>
                  <div
                    className="textr-dels mt-3"
                    style={{ textDecoration: "none" }}
                  >
                    <h5
                      className="text-white"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      KIM NGƯU{" "}
                    </h5>
                    <p className="mt-2"> 20/4 - 20/5 </p>
                  </div>
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  className="text-center comon-zodic w-100 d-grid align-content-center justify-content-center"
                  style={{ textDecoration: "none" }}
                >
                  <div className="round-imog">
                    <img alt="al" src="assets/images/round.png" />
                    <div className="img-out diamond1">
                      <img alt="Aries" src="assets/images/47271.png" />
                    </div>
                  </div>
                  <div className="textr-dels mt-3">
                    <h5 className="text-white"> SONG TỬ </h5>
                    <p className="mt-2"> 21/5 - 20/6 </p>
                  </div>
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  className="text-center comon-zodic w-100 d-grid align-content-center justify-content-center"
                  style={{ textDecoration: "none" }}
                >
                  <div className="round-imog">
                    <img alt="al" src="assets/images/round.png" />
                    <div className="img-out diamond1">
                      <img alt="Aries" src="assets/images/3201854.png" />
                    </div>
                  </div>

                  <div className="textr-dels mt-3">
                    <h5 className="text-white"> CỰ GIẢI </h5>
                    <p className="mt-2"> 21/6 - 22/7 </p>
                  </div>
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  className="text-center comon-zodic w-100 d-grid align-content-center justify-content-center"
                  style={{ textDecoration: "none" }}
                >
                  <div className="round-imog">
                    <img alt="al" src="assets/images/round.png" />
                    <div className="img-out diamond1">
                      <img alt="Aries" src="assets/images/10350961.png" />
                    </div>
                  </div>
                  <div className="textr-dels mt-3">
                    <h5 className="text-white"> SƯ TỬ </h5>
                    <p className="mt-2"> 23/7 - 22/8 </p>
                  </div>
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  className="text-center comon-zodic w-100 d-grid align-content-center justify-content-center"
                  style={{ textDecoration: "none" }}
                >
                  <div className="round-imog">
                    <img alt="al" src="assets/images/round.png" />
                    <div className="img-out diamond1">
                      <img alt="Aries" src="assets/images/47148.png" />
                    </div>
                  </div>
                  <div className="textr-dels mt-3">
                    <h5 className="text-white"> XỬ NỮ </h5>
                    <p className="mt-2"> 23/8 - 22/9 </p>
                  </div>
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  className="text-center comon-zodic w-100 d-grid align-content-center justify-content-center"
                  style={{ textDecoration: "none" }}
                >
                  <div className="round-imog">
                    <img alt="al" src="assets/images/round.png" />
                    <div className="img-out diamond1">
                      <img alt="Aries" src="assets/images/10350969.png" />
                    </div>
                  </div>
                  <div className="textr-dels mt-3">
                    <h5 className="text-white"> THIÊN BÌNH</h5>
                    <p className="mt-2"> 23/9 - 22/10 </p>
                  </div>
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  className="text-center comon-zodic w-100 d-grid align-content-center justify-content-center"
                  style={{ textDecoration: "none" }}
                >
                  <div className="round-imog">
                    <img alt="al" src="assets/images/round.png" />
                    <div className="img-out diamond1">
                      <img alt="Aries" src="assets/images/8062843.png" />
                    </div>
                  </div>
                  <div className="textr-dels mt-3">
                    <h5 className="text-white"> THIÊN YẾT </h5>
                    <p className="mt-2"> 23/10 - 21/11 </p>
                  </div>
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  className="text-center comon-zodic w-100 d-grid align-content-center justify-content-center"
                  style={{ textDecoration: "none" }}
                >
                  <div className="round-imog">
                    <img alt="al" src="assets/images/round.png" />
                    <div className="img-out diamond1">
                      <img alt="Aries" src="assets/images/75522.png" />
                    </div>
                  </div>
                  <div className="textr-dels mt-3">
                    <h5 className="text-white"> NHÂN MÃ </h5>
                    <p className="mt-2"> 22/11 - 21/12 </p>
                  </div>
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  className="text-center comon-zodic w-100 d-grid align-content-center justify-content-center"
                  style={{ textDecoration: "none" }}
                >
                  <div className="round-imog">
                    <img alt="al" src="assets/images/round.png" />
                    <div className="img-out diamond1">
                      <img alt="Aries" src="assets/images/9009955.png" />
                    </div>
                  </div>
                  <div className="textr-dels mt-3">
                    <h5 className="text-white"> MA KẾT </h5>
                    <p className="mt-2"> Dec 22 - Jan 19 </p>
                  </div>
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  className="text-center comon-zodic w-100 d-grid align-content-center justify-content-center"
                  style={{ textDecoration: "none" }}
                >
                  <div className="round-imog">
                    <img alt="al" src="assets/images/round.png" />
                    <div className="img-out diamond1">
                      <img alt="Aries" src="assets/images/47246.png" />
                    </div>
                  </div>
                  <div className="textr-dels mt-3">
                    <h5 className="text-white"> BẢO BÌNH </h5>
                    <p className="mt-2"> Jan 20 - Feb 18 </p>
                  </div>
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  className="text-center comon-zodic w-100 d-grid align-content-center justify-content-center"
                  style={{ textDecoration: "none" }}
                >
                  <div className="round-imog">
                    <img alt="al" src="assets/images/round.png" />
                    <div className="img-out diamond1">
                      <img alt="Aries" src="assets/images/7125116.png" />
                    </div>
                  </div>
                  <div className="textr-dels mt-3">
                    <h5 className="text-white"> SONG NGƯ </h5>
                    <p className="mt-2"> Feb 19 - Mar 20 </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          className="horosocpe-div d-inline-block w-100"
          style={{ backgroundColor: "#0c071c" }}
        >
          <div className="container">
            <div className="comon-heading text-center">
              <h5 className="sub-heading" data-aos="fade-up">
                {" "}
                DỊCH VỤ CHÚNG TÔI
              </h5>
              <h2
                className="text-white comon-heading mt-3 mb-3"
                data-aos="fade-up"
              >
                Xem Tarot – Khai Mở Tương Lai
              </h2>
            </div>
            <p
              className="col-lg-7 mx-auto d-block text-center subi-text"
              data-aos="fade-down"
            >
              {" "}
              Tellory tổ chức các chuyên gia tarot giàu lòng nhân ái và hòa
              nhập, những người cung cấp các bài đọc và bài học cho mọi cấp độ
              kinh nghiệm
            </p>
            <div className="row mt-5 gy-4 g-lg-4">
              <div className="col-lg-3">
                <div className="comon-services02" data-aos="fade-down">
                  <figure>
                    <img alt="su" src="assets/images/3013143.png" />
                  </figure>
                  <h4 className="text-white mt-3">Tình Yêu</h4>
                  <p className="mt-2">
                    Tarot giúp bạn hiểu rõ hơn về tình cảm và mối quan hệ của
                    mình.
                  </p>
                  <span className="d-block">
                    {" "}
                    <i className="fas fa-ellipsis-h"></i>{" "}
                  </span>
                </div>

                <div className="comon-services02" data-aos="fade-up">
                  <figure>
                    <img alt="su" src="assets/images/8596897.png" />
                  </figure>
                  <h4 className="text-white mt-3">Sức Khỏe</h4>
                  <p className="mt-2">
                    Tarot đưa ra lời khuyên về tình trạng sức khỏe và cách cải
                    thiện.
                  </p>
                  <span className="d-block">
                    {" "}
                    <i className="fas fa-ellipsis-h"></i>{" "}
                  </span>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="middle-io position-relative w-100 d-none d-lg-block"
                  data-aos="fade-down"
                >
                  <div className="img-anim">
                    <img alt="sui" src="assets/images/service_img2.png" />
                  </div>
                  <figure>
                    <img alt="sow" src="assets/images/sop.png" />
                  </figure>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="comon-services02" data-aos="fade-down">
                  <figure>
                    <img alt="su" src="assets/images/867780.png" />
                  </figure>
                  <h4 className="text-white mt-3">Công Việc</h4>
                  <p className="mt-2">
                    Tarot cung cấp cái nhìn sâu sắc về con đường sự nghiệp và cơ
                    hội thăng tiến.
                  </p>
                  <span className="d-block">
                    {" "}
                    <i className="fas fa-ellipsis-h"></i>{" "}
                  </span>
                </div>

                <div className="comon-services02" data-aos="fade-up">
                  <figure>
                    <img alt="su" src="assets/images/9289285.png" />
                  </figure>
                  <h4 className="text-white mt-3">Tài Chính</h4>
                  <p className="mt-2">
                    Tarot hỗ trợ bạn quản lý tài chính và nhận diện cơ hội đầu
                    tư.
                  </p>
                  <span className="d-block">
                    {" "}
                    <i className="fas fa-ellipsis-h"></i>{" "}
                  </span>
                </div>
              </div>

              <div
                className="middle-io position-relative w-100 d-block d-lg-none"
                data-aos="fade-down"
              >
                <div className="img-anim">
                  <img alt="sui" src="assets/images/service_img2.png" />
                </div>
                <figure>
                  <img alt="sow" src="assets/images/sop.png" />
                </figure>
              </div>
            </div>
            <div className="tipsoft" data-aos="fade-up">
              <div className="d-md-flex justify-content-center align-items-center">
                <h2 className="text-white"> Mẹo Trong Ngày </h2>
                <p className="ms-md-5 col-lg-7">
                  <span className="me-3 text-white">
                    {" "}
                    <i className="fas fa-quote-left"></i>{" "}
                  </span>{" "}
                  Một sự thật đã được chứng minh từ lâu rằng người đọc sẽ bị
                  phân tâm bởi nội dung có thể đọc được của một trang khi nhìn
                  vào bố cục của nó.{" "}
                  <span className="me-3 text-white">
                    {" "}
                    <i
                      className="fas fa-quote-right"
                      style={{ marginLeft: "10px" }}
                    ></i>{" "}
                  </span>{" "}
                </p>
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
