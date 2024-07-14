import React from "react";
import Header from "../../../components/Header/Header";
import Register from "../../../components/Login/Register";
import Login from "../../../components/Login/Login";
import MobileMenu from "../../../components/Mobile Menu/MobileMenu";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Horoscope from "../../../components/TabContent/Horoscope";
import "../HomePage/AstrologyHome.css";

export default function AstrologyHome() {
  return (
    <div>
      <Header />

      <section className="banner-section float-start w-100">
        <div className="img-main-abnner d-inline-block w-100">
          <img alt="sm" src="assets/images/bg-bannerpic.jpg" />
        </div>
        <div className="main-bg-start"></div>
        <div className="container">
          <div className="banner-text-home">
            <div className="row row-cols-1 row-cols-lg-2 align-items-center g-lg-5">
              <div className="col" style={{ marginBottom: "30px" }}>
                <h1
                  className="text-white my-3"
                  data-aos="fade-down"
                  style={{ fontSize: "3.5rem" }}
                >
                  KHÁM PHÁ TƯƠNG LAI
                  <span className="d-block"> CHẠM ĐẾN TÂM HỒN </span>
                </h1>
                <p data-aos="fade-up" style={{ textAlign: "start" }}>
                  Trải nghiệm tương tác & chiếu sáng sâu sắc từ các bài đọc
                  Tarot
                </p>

                <div className="mt-5">
                  <Link
                    to="/tarotReader"
                    className="btn btn-get-btn"
                    data-aos="fade-up"
                  >
                    ĐẶT LỊCH NGAY
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="main d-none d-lg-block">
                  <div className="big-circle">
                    <div className="icon-block">
                      <img alt="web design icon" src="assets/images/as6.png" />
                    </div>
                    <div className="icon-block">
                      <img alt="game design icon" src="assets/images/as7.png" />
                    </div>
                    <div className="icon-block">
                      <img alt="game dev icon" src="assets/images/as8.png" />
                    </div>
                    <div className="icon-block">
                      <img alt="ui-ux icon" src="assets/images/as9.png" />
                    </div>

                    <div className="icon-block">
                      <img alt="ui-ux icon" src="assets/images/as10.png" />
                    </div>

                    <div className="icon-block">
                      <img alt="ui-ux icon" src="assets/images/as11.png" />
                    </div>
                  </div>
                  <div className="circle">
                    <div className="icon-block">
                      <img alt="app icon" src="assets/images/as1.png" />
                    </div>
                    <div className="icon-block">
                      <img alt="blockchain icon" src="assets/images/as2.png" />
                    </div>
                    <div className="icon-block">
                      <img alt="ar-vr icon" src="assets/images/as3.png" />
                    </div>
                    <div className="icon-block">
                      <img
                        alt="artificial intelligence icon"
                        src="assets/images/as4.png"
                      />
                    </div>

                    <div className="icon-block">
                      <img
                        alt="artificial intelligence icon"
                        src="assets/images/as11.png"
                      />
                    </div>
                  </div>
                  <div className="center-logo">
                    <img alt="logo" src="assets/images/middle-img.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="float-start w-100 body-main">
        <section
          className="div01-top d-inline-block w-100"
          style={{ backgroundColor: "#0c071c" }}
        >
          <div className="container">
            <div className="row row-cols-1 h-top row-cols-md-3 g-4 g-lg-5">
              <div className="col">
                <a
                  href="#"
                  className="comon-felature01 d-grid align-content-center w-100"
                  data-aos="fade-up"
                  style={{ textDecoration: "none" }}
                >
                  <div className="c-img mx-auto mb-2">
                    <img alt="sop" src="assets/images/3776970.png" />
                  </div>
                  <h5
                    className="text-white"
                    style={{
                      textAlign: "center",
                      textDecoration: "none !important",
                    }}
                  >
                    ĐA DẠNG TRẢI NGHIỆM TAROT
                  </h5>
                  <p style={{ textDecoration: "none !important" }}>
                    Tellory cung cấp nhiều loại trải nghiệm tarot phong phú, từ
                    các buổi đọc bài chuyên sâu đến các buổi tư vấn cá nhân. Hãy
                    để Tellory giúp bạn giải mã những bí ẩn cuộc sống với những
                    trải nghiệm tarot độc đáo và thú vị.
                  </p>
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  className="comon-felature01 d-grid align-content-center w-100"
                  data-aos="fade-down"
                  style={{ textDecoration: "none" }}
                >
                  <div className="c-img mx-auto mb-2">
                    <img alt="sop" src="assets/images/815838.png" />
                  </div>
                  <h5 className="text-white"> ĐẶT CHỖ NHANH CHÓNG, AN TOÀN </h5>
                  <p>
                    {" "}
                    Với Tellory, bạn có thể dễ dàng đặt chỗ và thanh toán trực
                    tuyến một cách an toàn và tiện lợi. Chúng tôi cam kết bảo
                    mật thông tin và đảm bảo mọi giao dịch diễn ra suôn sẻ.
                  </p>
                </a>
              </div>

              <div className="col">
                <a
                  href="#"
                  className="comon-felature01 d-grid align-content-center w-100"
                  data-aos="fade-up"
                  style={{ textDecoration: "none" }}
                >
                  <div className="c-img mx-auto mb-2">
                    <img alt="sop" src="assets/images/1408347.png" />
                  </div>
                  <h5 className="text-white" style={{ textAlign: "center" }}>
                    {" "}
                    KẾT NỐI VỚI NHỮNG BẬC THẦY TAROT UY TÍN{" "}
                  </h5>
                  <p>
                    {" "}
                    Tellory là cầu nối giữa bạn và các chuyên gia tarot hàng
                    đầu, được chọn lọc kỹ lưỡng. Được chọn lọc kỹ lưỡng, những
                    người đọc bài của chúng tôi sẽ mang đến cho bạn những lời
                    khuyên chân thành và chính xác, giúp bạn tìm thấy ánh sáng
                    trong những khúc quanh cuộc sống.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
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
                Xem Tarot – Khám Phá Tương Lai
              </h2>
            </div>
            <p
              className="col-lg-7 mx-auto d-block text-center subi-text"
              data-aos="fade-down"
            >
              {" "}
              Tellory là người bạn đồng hành đáng tin cậy, nơi tập hợp nhiều
              tarot reader với mọi cấp độ kinh nghiệm. Hãy để chúng tôi giúp bạn
              khám phá những bí ẩn của cuộc sống và tìm thấy hướng đi cho tương
              lai.
            </p>
            <div className="row mt-5 gy-4 g-lg-4">
              <div className="col-lg-3">
                <div className="comon-services02" data-aos="fade-down">
                  <figure>
                    <img alt="su" src="assets/images/3013143.png" />
                  </figure>
                  <h4 className="text-white mt-3">Tình Yêu</h4>
                  <p className="mt-2">
                    Các chuyên gia tarot trên Tellory giúp bạn thấu hiểu sâu sắc
                    về tình cảm và các mối quan hệ, mang đến những lời khuyên
                    chân thành để nuôi dưỡng và phát triển tình yêu.
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
                    Với sự am hiểu sâu rộng, các tarot reader đưa ra lời khuyên
                    bổ ích về tình trạng sức khỏe hiện tại và cách cải thiện nó,
                    giúp bạn đạt được trạng thái cân bằng và khỏe mạnh.
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
                    Tarot reader của chúng tôi cung cấp những cái nhìn sắc bén
                    về con đường sự nghiệp, giúp bạn định hướng rõ ràng và tận
                    dụng cơ hội thăng tiến trong công việc.
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
                    Tarot reader trên Tellory hỗ trợ bạn quản lý tài chính hiệu
                    quả, nhận diện cơ hội đầu tư và đưa ra những quyết định tài
                    chính khôn ngoan, giúp bạn đạt được sự thịnh vượng.
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
                <h2 className="text-white"> LÁ BÀI HÔM NAY CỦA BẠN </h2>
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

        {/* <section
          className="daily-horp d-inline-block w-100"
          style={{ backgroundColor: "#0c071c" }}
        >
          <div className="container">
            <div className="comon-heading text-center">
              <h5 className="sub-heading" data-aos="fade-down">
                {" "}
                Tử Vi{" "}
              </h5>
              <h2
                className="text-white comon-heading mt-2 mb-3 nav-link.active.nameImportant"
                data-aos="fade-up"
              >
                {" "}
                Tử Vi Mỗi Ngày dành cho Bạn{" "}
              </h2>
            </div>

            <ul
              className="nav nav-pills mb-3 mt-5 justify-content-center"
              role="tablist"
              data-aos="fade-down"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active buttonWhite"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-hop01"
                  type="button"
                  role="tab"
                  style={{ color: "white !important" }}
                >
                  {" "}
                  Tử Vi Mỗi Ngày
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
                  Tarot{" "}
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
                  Thần Số Học{" "}
                </button>
              </li>
            </ul>
            <Horoscope />
          </div>
        </section> */}
      </main>

      {/* <!-- footer Modal --> */}
      <Footer />

      {/* <!-- mobile menu --> */}

      <MobileMenu />
    </div>
  );
}
