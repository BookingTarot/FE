import React from "react";
import "../TabContent/Horoscope.css";

export default function Horoscope() {
  return (
    <div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-hop01"
          role="tabpanel"
        >
          <div
            className="comin-divu-main d-grid align-content-center w-100"
            data-aos="zoom-in"
          >
            <div className="row align-items-center">
              <div className="col-lg-2">
                <figure className="mx-auto mb-lg-0">
                  <img alt="uo" src="assets/images/5005806.png" />
                </figure>
              </div>
              <div
                className="col-lg-10"
                style={{ textAlign: "start", padding: "5px" }}
              >
                <h5 className="text-white">
                  {" "}
                  <span> BẠCH DƯƠNG </span> <span>(21/3 - 19/4)</span>{" "}
                </h5>
                <p className="mt-2">
                  {" "}
                  Nay Bạch Dương khá nghiêm túc, sống có kỷ luật hơn do Mặt
                  Trăng đổi nhà.{" "}
                </p>
              </div>
            </div>
          </div>

          <div
            className="comin-divu-main d-grid align-content-center w-100"
            data-aos="zoom-in"
          >
            <div className="row align-items-center">
              <div className="col-lg-2">
                <figure className="mx-auto mb-lg-0">
                  <img alt="yu" src="assets/images/5005810.png" />
                </figure>
              </div>
              <div
                className="col-lg-10"
                style={{ textAlign: "start", padding: "5px" }}
              >
                <h5 className="text-white">
                  {" "}
                  KIM NGƯU <span>(20/4 - 20/5)</span>{" "}
                </h5>
                <p className="mt-2">
                  {" "}
                  Góc 45 độ của Mặt Trăng với sao Thiên Vương khiến Kim Ngưu dễ
                  dàng nhận thấy mình đang bị tổn thương và lo lắng.{" "}
                </p>
              </div>
            </div>
          </div>

          <div
            className="comin-divu-main d-grid align-content-center w-100"
            data-aos="zoom-in"
          >
            <div className="row align-items-center">
              <div className="col-lg-2">
                <figure className="mx-auto mb-lg-0">
                  <img alt="sui" src="assets/images/5005814.png" />
                </figure>
              </div>
              <div
                className="col-lg-10"
                style={{ textAlign: "start", padding: "5px" }}
              >
                <h5 className="text-white">
                  {" "}
                  SONG TỬ <span>(21/5 - 20/6)</span>{" "}
                </h5>
                <p className="mt-2">
                  {" "}
                  Song Tử cảm thấy thoải mái và không ngại tiếp chuyện với bất
                  cứ ai khi Mặt Trăng tam hợp tiểu hành tinh Juno.{" "}
                </p>
              </div>
            </div>
          </div>

          <a
            href="/zodiac"
            className="btn btn-more01 d-table mx-auto text-center colorWhite"
            data-aos="fade-up"
          >
            <span> Xem thêm Tử Vi </span>
          </a>
        </div>
        <div className="tab-pane fade" id="pills-hop02" role="tabpanel">
          <div
            className="comin-divu-main d-grid align-content-center w-100"
            data-aos="zoom-in"
          >
            <div className="row align-items-center">
              <div className="col-lg-2">
                <figure className="mx-auto mb-lg-0">
                  <img alt="sui" src="assets/images/8381914.png" />
                </figure>
              </div>
              <div
                className="col-lg-10"
                style={{ textAlign: "start", padding: "5px" }}
              >
                <h5 className="text-white"> Tarot Tình Yêu </h5>
                <p className="mt-2">
                  {" "}
                  Tarot Tình Yêu là một công cụ để khám phá các mối quan hệ tình
                  cảm, đưa ra những hiểu biết sâu sắc về tình trạng hiện tại, và
                  dự đoán tương lai tình yêu của bạn. Từ những lá bài như The
                  Lovers đến Two of Cups, Tarot mang đến thông điệp về sự kết
                  nối và hòa hợp trong tình yêu.{" "}
                </p>
              </div>
            </div>
          </div>

          <div
            className="comin-divu-main d-grid align-content-center w-100"
            data-aos="zoom-in"
          >
            <div className="row align-items-center">
              <div className="col-lg-2">
                <figure className="mx-auto mb-lg-0">
                  <img alt="si" src="assets/images/8381914.png" />
                </figure>
              </div>
              <div
                className="col-lg-10"
                style={{ textAlign: "start", padding: "5px" }}
              >
                <h5 className="text-white"> Tarot Sự Nghiệp</h5>
                <p className="mt-2">
                  {" "}
                  Tarot Sự Nghiệp giúp bạn xác định con đường nghề nghiệp của
                  mình, tìm ra cơ hội thăng tiến và vượt qua những thách thức
                  trong công việc. Với các lá bài như The Emperor và Eight of
                  Pentacles, Tarot cung cấp cái nhìn về sự lãnh đạo và công việc
                  chăm chỉ.{" "}
                </p>
              </div>
            </div>
          </div>

          <div
            className="comin-divu-main d-grid align-content-center w-100"
            data-aos="zoom-in"
          >
            <div className="row align-items-center">
              <div className="col-lg-2">
                <figure className="mx-auto mb-lg-0">
                  <img alt="sui" src="assets/images/8381914.png" />
                </figure>
              </div>
              <div
                className="col-lg-10"
                style={{ textAlign: "start", padding: "5px" }}
              >
                <h5 className="text-white"> Tarot Sức Khỏe</h5>
                <p className="mt-2">
                  {" "}
                  Tarot Sức Khỏe cung cấp những lời khuyên về tình trạng sức
                  khỏe hiện tại, cách cải thiện và duy trì sức khỏe tốt. Các lá
                  bài như The Strength và The Star giúp bạn hiểu rõ hơn về sức
                  mạnh nội tâm và sự chữa lành.{" "}
                </p>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="btn btn-more01 d-table mx-auto text-center"
            data-aos="fade-in"
          >
            <span> Xem thêm Bài Tarot </span>
          </a>
        </div>
        <div className="tab-pane fade" id="pills-hop03" role="tabpanel">
          <div
            className="comin-divu-main d-grid align-content-center w-100"
            data-aos="zoom-in"
          >
            <div className="row align-items-center">
              <div className="col-lg-2">
                <figure className="mx-auto mb-lg-0">
                  <img alt="card" src="assets/images/6767016.png" />
                </figure>
              </div>
              <div
                className="col-lg-10"
                style={{ textAlign: "start", padding: "5px" }}
              >
                <h5 className="text-white"> Số 1 </h5>
                <p className="mt-2">
                  {" "}
                  Biểu tượng của sự khởi đầu, độc lập, lãnh đạo và quyết đoán.
                  Những người mang con số này thường là những cá thể mạnh mẽ, tự
                  tin và đầy tham vọng. Họ có xu hướng tiên phong, thích dẫn đầu
                  và không ngại đương đầu với thử thách.{" "}
                </p>
              </div>
            </div>
          </div>

          <div
            className="comin-divu-main d-grid align-content-center w-100"
            data-aos="zoom-in"
          >
            <div className="row align-items-center">
              <div className="col-lg-2">
                <figure className="mx-auto mb-lg-0">
                  <img alt="card" src="assets/images/6767016.png" />
                </figure>
              </div>
              <div
                className="col-lg-10"
                style={{ textAlign: "start", padding: "5px" }}
              >
                <h5 className="text-white"> Số 2 </h5>
                <p className="mt-2">
                  {" "}
                  Mẫu người tình cảm, kết nối, hợp tác, luôn hướng tới việc mang
                  lại hòa bình và cân bằng cho một mối quan hệ hoặc tình huống.{" "}
                </p>
              </div>
            </div>
          </div>

          <div
            className="comin-divu-main d-grid align-content-center w-100"
            data-aos="zoom-in"
          >
            <div className="row align-items-center">
              <div className="col-lg-2">
                <figure className="mx-auto mb-lg-0">
                  <img alt="card" src="assets/images/6767016.png" />
                </figure>
              </div>
              <div
                className="col-lg-10"
                style={{ textAlign: "start", padding: "5px" }}
              >
                <h5 className="text-white"> Số 3 </h5>
                <p className="mt-2">
                  {" "}
                  Con số mang năng lượng của người truyền cảm hứng. Họ vô tư,
                  hoạt ngôn có sự sáng tạo; họ là những người có đầu óc thông
                  minh nhanh nhạy, thích suy luận và giao tiếp hài hước. Những
                  người có số 3 trong thần số học họ luôn là tâm điểm chú ý
                  trong số đông và là điểm sáng trong công việc.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
