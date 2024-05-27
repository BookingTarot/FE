import React from "react";
import Register from "../../../components/Login/Register";
import Login from "../../../components/Login/Login";
import Header from "../../../components/Header/Header";
import MobileMenu from "../../../components/Mobile Menu/MobileMenu";
import Footer from "../../../components/Footer/Footer";
import TarotLove from "../../../components/TarotCard/TarotLove";
import TarotWork from "../../../components/TarotCard/TarotWork";
import TarotFinance from "../../../components/TarotCard/TarotFinance";
import TarotHealth from "../../../components/TarotCard/TarotHealth";
import Consult from "../../../components/Consult/Consult";

export default function TarotCard() {
  return (
    <div>
      {/* <!-- Header Modal --> */}
      <Header />

      <section className="sub-banner-section float-start w-100">
        <div className="img-main-abnner d-inline-block w-100">
          <img alt="sm" src="assets/images/horocurty03.jpg" />
        </div>
        <div className="container">
          <h2 className="text-center text-white"> Bài Tarot </h2>
          <nav className="mt-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Trang chủ</li>
              <li className="breadcrumb-item active">Bài Tarot</li>
            </ol>
          </nav>
        </div>
      </section>
      <main className="float-start w-100 body-main">
        <section className="daily-horp d-inline-block w-100">
          <div className="container">
            <div className="comon-heading text-center">
              <h5 className="sub-heading" data-aos="fade-down">
                {" "}
                Bài Tarot{" "}
              </h5>
              <h2
                className="text-white comon-heading mt-2 mb-3"
                data-aos="fade-up"
              >
                {" "}
                Đọc Bài Tarot Miễn Phí dành cho Bạn{" "}
              </h2>
            </div>

            <ul
              className="nav nav-pills mb-3 mt-5 justify-content-center"
              role="tablist"
              data-aos="fade-down"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-hop01"
                  type="button"
                  role="tab"
                >
                  {" "}
                  Tất cả Bài Tarot{" "}
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
                  Tarot Tình Yêu{" "}
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
                  Tarot Sự Nghiệp{" "}
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-hop04"
                  type="button"
                  role="tab"
                >
                  Tarot Sức Khỏe{" "}
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-hop05"
                  type="button"
                  role="tab"
                >
                  Tarot Tài Chính{" "}
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-hop01"
                role="tabpanel"
              >
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-5 g-lg-5 mt-0">
                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/lovers.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Lovers{" "}
                      </h5>
                      <p>
                        {" "}
                        The Loves trong bói Tarot chính xác về tình yêu lại chưa
                        có gì rõ ràng. Theo đó, quân bài này cho thấy bạn và
                        người ấy mới chỉ bắt đầu cảm mến nhau...{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/5ofwands.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        5 of Wands{" "}
                      </h5>
                      <p>
                        {" "}
                        5 of Wands là sự báo hiệu cho một cuộc cạnh tranh khốc
                        liệt. Không chỉ có bạn dành tình cảm cho người ấy. Mặt
                        khác, còn có rất nhiều đối tượng đang săn đón...{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/3ofcups.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        3 of Cups{" "}
                      </h5>
                      <p>
                        {" "}
                        Sự xuất hiện của 3 of Cups chứng tỏ thời gian vừa rồi
                        dường như bạn đã rất mệt mỏi. Phải chăng vì chưa thấu
                        hiểu nên cả hai thường xuyên cãi vã? Nếu tình trạng kể
                        trên tiếp diễn...{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/3ofsowrds.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        3 of Swords{" "}
                      </h5>
                      <p>
                        {" "}
                        Sự xuất hiện của 3 of Swords cho thấy bạn đang cảm thấy
                        đau khổ và bị bỏ rơi. Thậm chí có người còn hoảng loạn
                        vì nhận ra người ấy không quan tâm và tôn trọng mình như
                        khi...{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/10ofcups.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        10 of Cups{" "}
                      </h5>
                      <p>
                        {" "}
                        Nếu bạn bốc được 10 of Cups thì xin chúc mừng. Bởi lẽ,
                        đây là quân bài cho thấy tình cảm của người ấy dành cho
                        bạn đang rất cuồng nhiệt, dạt dào.{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/theworld.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        The World{" "}
                      </h5>
                      <p>
                        {" "}
                        Công việc mà bạn đang làm lúc này thực sự là công việc
                        mà bạn yêu thích. Nhưng theo đuổi thứ mình thích chưa
                        hẳn đã là điều dễ dàng với bạn, vậy nên nhiều khi bạn
                        hay...{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/theempress.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        The Empress{" "}
                      </h5>
                      <p>
                        {" "}
                        Bạn đang dành rất nhiều nỗ lực trong công việc để cạnh
                        tranh với những cá nhân khác trong lĩnh vực của bạn. Và
                        có thể nói rằng bạn đang đi làm là vì tiền...{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/thehangedman.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        The Hanged Man{" "}
                      </h5>
                      <p>
                        {" "}
                        Bạn đang nỗ lực chăm chỉ trong công việc với mục tiêu là
                        tạo ấn tượng tốt với sếp và đồng nghiệp. Bạn mong chờ
                        một tương lai sẽ có được sự thăng tiến với lộ trình rõ
                        ràng...{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/thechariot.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        The Chariot{" "}
                      </h5>
                      <p>
                        {" "}
                        The Chariot mang Hình ảnh Julius Caesar trên chiếc chiến
                        xa huy hoàng tiến vào thành Roma. Ông đã đánh bại kẻ thù
                        và thu về nhiều chiến lợi phẩm và đất đai...{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/8ofpentacles.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        8 of Pentacles{" "}
                      </h5>
                      <p>
                        {" "}
                        8 of Pentacles chúng ta thấy một chàng trai đang đục
                        khắc một đồng tiền. Anh ta đã hoàn thành được sáu đồng
                        và có một đồng nữa đang sắp hoàn thành...{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/moon.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Moon ngược{" "}
                      </h5>
                      <p>
                        {" "}
                        Dạng vấn đề tâm lý thông dụng, bao gồm hoảng loạn, lo âu
                        và trầm cảm mà người bị chưa nhận ra hay chưa giải quyết
                        được. Hãy khuyên khách hàng của bạn tìm...{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/nine.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Nine of Swords{" "}
                      </h5>
                      <p>
                        {" "}
                        Lo lâu và trầm cảm ngày càng bị thúc đẩy bởi những lời
                        tự phê phán bản thân tiêu cực. Mất ngủ là hậu quả của
                        căng thẳng và lo âu và những lời văng vẳng trong đầu
                        về...{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/devil.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Devil{" "}
                      </h5>
                      <p>
                        {" "}
                        Sự nghiện ngập và những thói quen không lành mạnh.
                        Nghiện ngập có thể bao gồm những thứ như chất kích
                        thích, thức uống có cồn và tình dục, hoặc những trường
                        hợp như...{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/temper.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Temperance ngược{" "}
                      </h5>
                      <p>
                        {" "}
                        Một vấn đề có thể xảy ra bởi sự mất cân bằng hóa học có
                        thể dẫn đến triệu chứng Lưỡng cực hoặc vấn đề tâm lý
                        khác có liên quan đến cơ thể hay sự cân bằng trong não
                        bộ...{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/tower.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Tower{" "}
                      </h5>
                      <p>
                        {" "}
                        Một khủng hoảng lớn hoặc một chuỗi dài hoảng sợ. Nó có
                        thể là kết quả của một thay đổi lớn trong cuộc đời mà
                        người ta không ngờ đến hoặc quá đột ngột...{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/ace.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Ace of Pentacles{" "}
                      </h5>
                      <p>
                        {" "}
                        Mô tả một bàn tay nâng lên cao một đồng xu hình ngôi sao
                        năm cánh. Phong cảnh bên dưới bàn tay đại diện cho chủ
                        đề chính của suit. Trong Ace of Pentacles, cảnh quan...{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/queen.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Queen of Pentacles{" "}
                      </h5>
                      <p>
                        {" "}
                        Queen of Pentacles mô tả một người phụ nữ đơn độc ngồi
                        trên ngai vàng chạm trổ những cây ăn quả, dê, thiên
                        thần, và các biểu tượng khác của thành công vật chất..{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/five.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Five Of Pentacles{" "}
                      </h5>
                      <p>
                        {" "}
                        Five of Pentacles, như những lá số 5 khác, miêu tả một
                        nghịch cảnh. Trong lá này, đôi vợ chồng nghèo đi bộ trên
                        tuyết, băng qua cửa kính rực rỡ của một nhà thờ. Nhà thờ
                        là...{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/four.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        Four Of Pentacles{" "}
                      </h5>
                      <p>
                        {" "}
                        Four of Pentacles cho thấy một người đàn ông ngồi trên
                        chiếc ghế, cách xa quê nhà. Ông giữ chặt pentacles hoặc
                        đồng tiền của mình trong một tư thế phòng...{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card-reda-cm d-inline-block w-100"
                      data-aos="zoom-in"
                    >
                      <figure>
                        <img alt="cr" src="assets/images/king.png" />
                      </figure>
                      <h5 className="text-white mt-3 d-inline-block w-100">
                        {" "}
                        King of Pentacles{" "}
                      </h5>
                      <p>
                        {" "}
                        King of Pentacles đại diện cho sự phong phú, an toàn,
                        tham vọng, sức mạnh, ổn định, kỷ luật, tin cậy và kiểm
                        soát. Ông là một người cha thích chăm sóc người khác
                        thông qua việc...{" "}
                      </p>
                      <a href="tarot-details.html">Xem thêm</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-hop02" role="tabpanel">
                <TarotLove />
              </div>

              <div className="tab-pane fade" id="pills-hop03" role="tabpanel">
                <TarotWork />
              </div>

              <div className="tab-pane fade" id="pills-hop04" role="tabpanel">
                <TarotHealth />
              </div>

              <div className="tab-pane fade" id="pills-hop05" role="tabpanel">
                <TarotFinance />
              </div>
            </div>
          </div>
        </section>

        <Consult />

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

      {/* <!-- login Modal --> */}
      <Login />

      {/* <!-- register Modal --> */}

      <Register />
    </div>
  );
}
