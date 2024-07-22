import React from "react";
import Header from "../../../components/Header/Header";
import Login from "../../../components/Login/Login";
import Register from "../../../components/Login/Register";
import MobileMenu from "../../../components/Mobile Menu/MobileMenu";
import Footer from "../../../components/Footer/Footer";

export default function BlogDetail() {
  return (
    <div>
      {/* <!-- Header Modal --> */}
      <Header />

      <section className="sub-banner-section float-start w-100">
        <div className="img-main-abnner d-inline-block w-100">
          <img alt="sm" src="assets/images/horocurty03.jpg" />
        </div>
        <div className="container">
          <h2 className="text-center" style={{ color: "#d3a417" }}>
            {" "}
            Giới Thiệu Các Bộ Bài Tarot Nổi Tiếng{" "}
          </h2>
        </div>
      </section>
      <main className="float-start w-100 body-main">
        <section className="blogs-info-div d-inline-block w-100 my-5">
          <div className="container">
            <div className="row gy-5 g-lg-5">
              <div className="col-lg-12">
                <div className="left-details-info">
                  <figure className="moni">
                    <img
                      alt="hjm"
                      src="assets/images/imag-tarot_make-a-wish.webp"
                    />
                  </figure>
                  <div className="d-flex justify-content-between share-div mt-5">
                    <ul className="list-unstyled d-flex">
                      <li>
                        {" "}
                        <i className="far fa-user"></i> Bởi Admin{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="far fa-calendar-alt"></i> 01 Tháng 7 2024{" "}
                      </li>
                    </ul>
                  </div>
                  <h1 className="mt-5" style={{ color: "#d3a417" }}>
                    {" "}
                    Giới Thiệu{" "}
                  </h1>

                  <p
                    className="mt-4"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Tarot đã trở thành một công cụ phổ biến cho việc tiên đoán
                    và tự khám phá bản thân. Với nhiều bộ bài tarot khác nhau,
                    mỗi bộ đều mang những nét độc đáo và phong cách riêng. Dưới
                    đây, chúng tôi sẽ giới thiệu các bộ bài tarot nổi tiếng
                    nhất, giúp bạn có cái nhìn tổng quan và lựa chọn bộ bài phù
                    hợp với mình.
                  </p>

                  <h1 className="mt-5" style={{ color: "#d3a417" }}>
                    {" "}
                    1. Rider-Waite Tarot{" "}
                  </h1>

                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Nguồn gốc: Được thiết kế bởi A.E. Waite và vẽ bởi Pamela
                    Colman Smith vào năm 1909.
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Đặc điểm:
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    - Hình ảnh chi tiết, dễ hiểu.
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    - Phù hợp cho cả người mới bắt đầu và những người đã có kinh
                    nghiệm.
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Ý nghĩa: Các lá bài của Rider-Waite thường được sử dụng để
                    giải thích các ý nghĩa chuẩn của tarot, làm nền tảng cho
                    nhiều bộ bài khác.
                  </p>

                  <h1 className="mt-5" style={{ color: "#d3a417" }}>
                    {" "}
                    2. Thoth Tarot
                  </h1>

                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Nguồn gốc: Được thiết kế bởi Aleister Crowley và vẽ bởi Lady
                    Frieda Harris vào giữa thế kỷ 20.
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Đặc điểm:
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    - Hình ảnh phức tạp, đa dạng màu sắc.
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    - Tập trung vào các yếu tố huyền bí và tâm linh.
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Ý nghĩa: Thoth Tarot yêu cầu người dùng phải có kiến thức
                    sâu rộng về tarot và các hệ thống huyền học khác.
                  </p>

                  <h1 className="mt-5" style={{ color: "#d3a417" }}>
                    {" "}
                    3. Tarot de Marseille
                  </h1>

                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Nguồn gốc: Xuất hiện từ thế kỷ 15 tại Pháp.
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Đặc điểm:
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    - Hình ảnh đơn giản, cổ điển.
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    - Là một trong những bộ bài tarot cổ xưa nhất.
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Ý nghĩa: Tarot de Marseille được ưa chuộng bởi những người
                    muốn tìm hiểu tarot từ góc nhìn lịch sử và truyền thống.
                  </p>

                  <h1 className="mt-5" style={{ color: "#d3a417" }}>
                    {" "}
                    4. Wild Unknown Tarot
                  </h1>

                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Nguồn gốc: Được tạo ra bởi nghệ sĩ Kim Krans vào năm 2012.
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Đặc điểm:
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    - Hình ảnh nghệ thuật, đậm chất thiên nhiên.
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    - Phù hợp với những người yêu thích nghệ thuật và thiên
                    nhiên.
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Ý nghĩa: Bộ bài này giúp kết nối người dùng với tự nhiên và
                    các yếu tố nguyên thủy.
                  </p>

                  <h1 className="mt-5" style={{ color: "#d3a417" }}>
                    {" "}
                    5. Modern Witch Tarot
                  </h1>

                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Nguồn gốc: Được thiết kế bởi Lisa Sterle vào năm 2019.
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Đặc điểm:
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    - Hình ảnh hiện đại, phản ánh văn hóa đương đại.
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    - Phù hợp với người trẻ tuổi và những người muốn tìm kiếm sự
                    kết nối với thế giới hiện đại.
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      color: "white",
                      textAlign: "start",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Ý nghĩa: Modern Witch Tarot mang lại góc nhìn mới mẻ và hiện
                    đại cho tarot, phù hợp với thế hệ trẻ.
                  </p>
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
