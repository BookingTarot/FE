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
          <h2 className="text-center text-white"> About </h2>
          <nav className="mt-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item active"> About </li>
            </ol>
          </nav>
        </div>
      </section>
      <main className="float-start w-100 body-main">
        <section className="about-part-section d-inline-block w-100">
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-2 gy-5 g-lg-5">
              <div className="col">
                <div className="img-box01 d-inline-block w-100 position-relative">
                  <figure className="moon-img">
                    <img alt="moon" src="assets/images/moon.jpg" />
                  </figure>
                  <figure
                    className="big-imog aos-init aos-animate"
                    data-aos="fade-down"
                  >
                    <img alt="sm" src="assets/images/imok.png" />
                  </figure>
                  <div
                    className="wt-yeras d-flex align-items-center text-center justify-content-center aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <h4 className="text-center">
                      16 +<span className="d-lg-block">Year Experience</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col">
                <h5 data-aos="fade-down"> About Tellory </h5>
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

                <a href="#" className="read-btn btn mt-4" data-aos="fade-down">
                  {" "}
                  <span> Khám Phá Ngay </span>{" "}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="review-main-astroly d-inline-block w-100 mt-5 mb-5">
          <div className="container">
            <div className="row row-cols-2 row-cols-lg-4 mb-5">
              <div className="col">
                <div
                  className="feate text-center aos-init aos-animate"
                  data-aos="fade-down"
                >
                  <h2 className="text-white">
                    99 <span>+</span>
                  </h2>
                  <p className="text-white">
                    {" "}
                    Trusted by <br />
                    Many Clients
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className="feate text-center aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <h2 className="text-white">
                    50 <span>+</span>
                  </h2>
                  <p className="text-white">
                    {" "}
                    Types of
                    <br />
                    Horoscopes
                  </p>
                </div>
              </div>

              <div className="col">
                <div
                  className="feate text-center aos-init aos-animate"
                  data-aos="fade-down"
                >
                  <h2 className="text-white">
                    99 <span>+</span>
                  </h2>
                  <p className="text-white">
                    {" "}
                    Qualified <br />
                    Astrologers
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className="feate text-center aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <h2 className="text-white">
                    99 <span>+</span>
                  </h2>
                  <p className="text-white">
                    {" "}
                    Success <br />
                    Horoscope
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="horosocpe-div d-inline-block w-100">
          <div className="container">
            <div className="comon-heading text-center">
              <h5 className="sub-heading" data-aos="fade-up">
                {" "}
                Our Service
              </h5>
              <h2
                className="text-white comon-heading mt-3 mb-3"
                data-aos="fade-up"
              >
                Our Astrologers Work for You
              </h2>
            </div>
            <p
              className="col-lg-7 mx-auto d-block text-center subi-text"
              data-aos="fade-down"
            >
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
            <div className="row mt-5 gx-4">
              <div className="col-lg-3">
                <div className="comon-services02" data-aos="fade-down">
                  <figure>
                    <img alt="su" src="assets/images/3013143.png" />
                  </figure>
                  <h4 className="text-white mt-3">Kundli Dosha</h4>
                  <p className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
                  <h4 className="text-white mt-3">Birth Journal</h4>
                  <p className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
                  <h4 className="text-white mt-3">Tarot Reading</h4>
                  <p className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
                  <h4 className="text-white mt-3">Numerology Tips</h4>
                  <p className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
                <h2 className="text-white"> Tips Of the day </h2>
                <p className="ms-md-5 col-lg-7">
                  {" "}
                  <span className="me-3 text-white">
                    {" "}
                    <i className="fas fa-quote-left"></i>{" "}
                  </span>{" "}
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="review-main-astroly d-inline-block w-100 mt-5 mb-5">
          <div className="container">
            <div className="comon-heading text-center tryu">
              <h5 className="sub-heading" data-aos="fade-down">
                {" "}
                Testimonial{" "}
              </h5>
              <h2
                className="text-white comon-heading mt-2 mb-3"
                data-aos="fade-up"
              >
                {" "}
                Success Stories{" "}
              </h2>
            </div>

            <div
              className="sucees-sty owl-carousel owl-theme mt-5"
              data-aos="fade-up"
            >
              <div className="items-storty text-center">
                <span className="d-block qote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-quote"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                </span>
                <p className="text-white">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
                <div className="usertcbg text-center">
                  <h5> Jame Smith </h5>
                  <p>Myndtown, United Kingdom</p>
                  <figure className="mx-auto">
                    <img alt="ser" src="assets/images/testimonials-1-1.jpg" />
                  </figure>
                  <ul className="d-flex align-items-center justify-content-center">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="items-storty text-center">
                <span className="d-block qote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-quote"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                </span>
                <p className="text-white">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
                <div className="usertcbg text-center">
                  <h5> Klein Dan </h5>
                  <p> Ruddlemoor, United Kingdom</p>
                  <figure className="mx-auto">
                    <img
                      alt="ser"
                      src="assets/images/istockphoto-963801050-612x612.jpg"
                    />
                  </figure>
                  <ul className="d-flex align-items-center justify-content-center">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="items-storty text-center">
                <span className="d-block qote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-quote"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                </span>
                <p className="text-white">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
                <div className="usertcbg text-center">
                  <h5> Quinn Smith </h5>
                  <p> Edendonich, United Kingdom</p>
                  <figure className="mx-auto">
                    <img
                      alt="ser"
                      src="assets/images/istockphoto-1200677760-612x612.jpg"
                    />
                  </figure>
                  <ul className="d-flex align-items-center justify-content-center">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="items-storty text-center">
                <span className="d-block qote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-quote"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                </span>
                <p className="text-white">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
                <div className="usertcbg text-center">
                  <h5> Hills Smith </h5>
                  <p> Tytherleigh, United Kingdom</p>
                  <figure className="mx-auto">
                    <img
                      alt="ser"
                      src="assets/images/istockphoto-1277996375-612x612.jpg"
                    />
                  </figure>
                  <ul className="d-flex align-items-center justify-content-center">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="news-letter-div d-inline-block w-100">
          <div className="container">
            <div className="comon-heading text-center mt-5">
              <h5 className="sub-heading" data-aos="fade-down">
                {" "}
                Our Newsletter{" "}
              </h5>
              <h2
                className="text-white comon-heading mt-2 mb-3"
                data-aos="fade-up"
              >
                {" "}
                Subscribe And Ask For Free{" "}
              </h2>
            </div>
            <p
              className="col-lg-8 mx-auto d-block text-center"
              data-aos="fade-up"
            >
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
            <form
              method="get"
              action="https://oxentictemplates.in/templatemonster/astrology/gm"
              className="w-100"
            >
              <div
                className="subcribe-section mt-5 col-lg-5 mx-auto d-flex justify-content-center"
                data-aos="fade-up"
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                />
                <button type="submit" className="subscribe btn">
                  {" "}
                  subscribe
                </button>
              </div>
            </form>
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
