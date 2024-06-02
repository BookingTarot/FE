import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Register from "../../../components/Login/Register";
import Login from "../../../components/Login/Login";
import MobileMenu from "../../../components/Mobile Menu/MobileMenu";
import Footer from "../../../components/Footer/Footer";

export default function Zodiac() {
  return (
    <div>
      {/* <!-- Header Modal --> */}
      <Header />

      <section className="sub-banner-section float-start w-100">
        <div className="img-main-abnner d-inline-block w-100">
          <img alt="sm" src="assets/images/horocurty03.jpg" />
        </div>
        <div className="container">
          <h2 className="text-center text-white"> Tử Vi Mỗi Ngày </h2>
          <nav className="mt-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Trang chủ</li>
              <li className="breadcrumb-item active">Tử Vi Mỗi Ngày</li>
            </ol>
          </nav>
        </div>
      </section>
      <main
        className="float-start w-100 body-main"
        style={{ backgroundColor: "#0c071c" }}
      >
        <section className="daily-horp d-inline-block w-100">
          <div className="container">
            <div className="comon-heading text-center">
              <h5 className="sub-heading" data-aos="fade-down">
                {" "}
                Tử Vi{" "}
              </h5>
              <h2
                className="text-white comon-heading mt-2 mb-3"
                data-aos="fade-up"
              >
                {" "}
                Tử Vi Mỗi Ngày dành cho Bạn{" "}
              </h2>
            </div>

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
                        <img src="assets/images/5005806.png" />
                      </figure>
                    </div>
                    <div className="col-lg-10" style={{ padding: "10px" }}>
                      <h5 className="text-white">
                        {" "}
                        <span> BẠCH DƯƠNG </span> <span>(21/3 - 19/4)</span>{" "}
                      </h5>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sự nghiệp: Trong công việc, bạn có thể cảm thấy hơi
                        buồn chán và thiếu động lực. Tình hình tài chính của bạn
                        vẫn ổn nhưng cần tiết kiệm cho những “ngày đen tối”.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Tình cảm: Bạn khá nghiêm túc và không thích đùa giỡn
                        trong ngày này. Cừu có thể ở một mình gặm nhấm những kỷ
                        niệm cũ và làm những gì khiến bản thân vui vẻ.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sức khỏe: Mặc dù hôm nay mọi thứ có vẻ hơi hỗn loạn
                        nhưng sức khỏe của bạn hoàn toàn ổn.{" "}
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
                        <img src="assets/images/5005810.png" />
                      </figure>
                    </div>
                    <div className="col-lg-10" style={{ padding: "10px" }}>
                      <h5 className="text-white">
                        {" "}
                        <span> Kim Ngưu </span> <span>(20/4 - 20/5)</span>{" "}
                      </h5>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sự nghiệp: Cuối tuần bạn được nghỉ ngơi đầy đủ và tạm
                        rời xa công việc. Hãy làm điều gì đó khiến bản thân
                        thích thú để nạp lại năng lượng nhé.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Tình cảm: Bạn cảm thấy mình hay lo lắng thái quá về
                        những chuyện không đâu. Ngưu cũng đang khó chịu với một
                        số tư tưởng áp đặt từ người lớn lên bản thân mình lúc
                        này.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sức khỏe: Hãy tránh xa đồ uống có ga một thời gian và
                        thay vào đó hãy uống nước lọc.{" "}
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
                        <img src="assets/images/5005814.png" />
                      </figure>
                    </div>
                    <div className="col-lg-10" style={{ padding: "10px" }}>
                      <h5 className="text-white">
                        {" "}
                        <span> SONG TỬ </span> <span>(21/5 - 20/6)</span>{" "}
                      </h5>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sự nghiệp: Bạn sẵn sàng nhận mọi nhiệm vụ cấp bách
                        trong ngày này. Bạn sẽ hoàn thành được khá nhiều việc
                        quan trọng nhờ sự kiên trì của bản thân.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Tình cảm: Bạn chỉ muốn đợi lương về, đợi những điều
                        tốt đẹp bình dị đến với mình. Ngoài ra, bất cứ thứ gì
                        cũng không muốn đợi, càng không muốn đợi ai, bạn hài
                        lòng với sự cô đơn.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sức khỏe: Sức khỏe tinh thần của bạn hôm nay hoàn toàn
                        ổn.{" "}
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
                        <img src="assets/images/5005816.png" />
                      </figure>
                    </div>
                    <div className="col-lg-10" style={{ padding: "10px" }}>
                      <h5 className="text-white">
                        {" "}
                        <span> CỰ GIẢI </span> <span>(21/3 - 19/4)</span>{" "}
                      </h5>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sự nghiệp: Ngay cả khi ở nhà, bạn vẫn sẽ gánh vác
                        nhiều trách nhiệm trong công việc hơn bình thường. Cua
                        nhỏ cảm thấy mệt mỏi và chán công việc hiện tại.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Tình cảm: Có những thứ tình cảm tuy bình lặng mà bền
                        lâu. Đúng người, kịp lúc, thì bạn và người ấy chẳng cần
                        thề hứa sẽ vẫn an yên.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sức khỏe: Hãy tận hưởng không khí trong lành và tận
                        hưởng ánh nắng mặt trời càng nhiều càng tốt.{" "}
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
                        <img src="assets/images/5005820.png" />
                      </figure>
                    </div>
                    <div className="col-lg-10" style={{ padding: "10px" }}>
                      <h5 className="text-white">
                        {" "}
                        <span> SƯ TỬ </span> <span>(23/7 - 22/8)</span>{" "}
                      </h5>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sự nghiệp: Bạn cần phải làm việc chăm chỉ hơn để đạt
                        được điều mình mong muốn trong cuộc sống. Tận dụng mọi
                        cơ hội bạn có được để cải thiện bản thân và chất lượng
                        cuộc sống của bạn.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Tình cảm: Nếu bạn thích ai đó thì đây không phải là
                        ngày để bạn thổ lộ tình cảm. Nếu đang mắc lỗi, bạn cần
                        sẵn sàng trả giá cho những sai lầm của mình.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sức khỏe: Chòm sao này nên đi ngủ sớm hơn và xem lại
                        giờ giấc ăn uống của mình.{" "}
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
                        <img src="assets/images/5005825.png" />
                      </figure>
                    </div>
                    <div className="col-lg-10" style={{ padding: "10px" }}>
                      <h5 className="text-white">
                        {" "}
                        <span> XỬ NỮ </span> <span>(23/8 - 22/9)</span>{" "}
                      </h5>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sự nghiệp: Rất có thể những người đang thất nghiệp sẽ
                        bắt gặp một cơ hội việc làm vô cùng thú vị trong ngày
                        hôm nay. Thế nhưng bạn nào đang đi làm cần thực sự
                        nghiêm túc với công việc hiện tại.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Tình cảm: Chòm sao này không còn muốn ồn ào, không
                        muốn tới lui những nơi đông đúc. Chỉ muốn ngồi một mình
                        ở nơi yên tĩnh nào đó, để ngắm nhìn cuộc sống trôi qua.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sức khỏe: Bạn nên hạn chế ăn đồ ngọt để cải thiện làn
                        da.{" "}
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
                        <img src="assets/images/5005830.png" />
                      </figure>
                    </div>
                    <div className="col-lg-10" style={{ padding: "10px" }}>
                      <h5 className="text-white">
                        {" "}
                        <span> Thiên Bình </span> <span>(23/9 - 23/10)</span>{" "}
                      </h5>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sự nghiệp: Bình Nhi chăm chỉ, bạn chưa bao giờ có suy
                        nghĩ dựa vào người khác để thăng tiến trong công việc.
                        Chẳng có gì bền bỉ bằng sự cố gắng của chính bản thân
                        mình.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Tình cảm: Có những chuyện trong lòng bạn hiểu rõ hơn
                        ai hết. Chẳng qua bạn đang cố tình làm ngơ và tỏ ra rằng
                        bản thân vẫn ổn, nghĩ tới nó theo hướng bạn mong muốn mà
                        thôi.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sức khỏe: Hôm nay bạn có thể gặp phải các vấn đề liên
                        quan đến chứng khó tiêu.{" "}
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
                        <img src="assets/images/5005834.png" />
                      </figure>
                    </div>
                    <div className="col-lg-10" style={{ padding: "10px" }}>
                      <h5 className="text-white">
                        {" "}
                        <span> BÒ CẠP </span> <span>(24/10 - 22/11)</span>{" "}
                      </h5>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sự nghiệp: Bạn có một công việc rất tốt và gặp nhiều
                        may mắn trong chuyện tiền bạc. Người khác có thể lười
                        nhưng bạn thì không, bạn cực kỳ tâm huyết với công việc.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Tình cảm: Tại thời điểm này, bạn có thể đắm chìm trong
                        những thú vui xác thịt! Cáp Nhi có một ngày tuyệt vời
                        bên gia đình và có một buổi hẹn hò khá thú vị.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sức khỏe: Bạn dễ bị hắt hơi, say nắng và ho thông
                        thường.{" "}
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
                        <img src="assets/images/5005845.png" />
                      </figure>
                    </div>
                    <div className="col-lg-10" style={{ padding: "10px" }}>
                      <h5 className="text-white">
                        {" "}
                        <span> NHÂN MÃ </span> <span>(22/11 - 21/12)</span>{" "}
                      </h5>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sự nghiệp: Nếu như bạn cảm thấy mệt mỏi quá rồi, vậy
                        thì hãy tắt đèn ngủ một giấc, đừng tự mình oán trách bản
                        thân. Sai ở đâu sửa ở đó, bạn nên dũng cảm đối diện với
                        sai sót trong công việc.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Tình cảm: Có những chuyện bạn biết rất rõ nhưng lại
                        không thể nói ra. Bởi một khi đã phơi bày, chẳng ai là
                        người vui vẻ cả.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sức khỏe: Bạn cần ra ngoài đi dạo để giải tỏa căng
                        thẳng.{" "}
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
                        <img src="assets/images/5005785.png" />
                      </figure>
                    </div>
                    <div className="col-lg-10" style={{ padding: "10px" }}>
                      <h5 className="text-white">
                        {" "}
                        <span> MA KẾT </span> <span>(22/12 - 19/1)</span>{" "}
                      </h5>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sự nghiệp: Những cơ hội mới sẽ đến với bạn ngày hôm
                        nay, nhưng bạn sẽ chọn một cơ hội mà bạn quen thuộc hơn
                        là một cơ hội có vẻ mang lại phần thưởng tốt hơn.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Tình cảm: Tâm trạng là của mình, nhất định phải nâng
                        niu. Đừng làm mình phiền muộn, tủi thân chỉ vì những
                        người và việc không xứng đáng.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sức khỏe: Hôm nay bạn nên đi ngủ sớm để nạp năng lượng
                        cho tuần mới nhé.{" "}
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
                        <img src="assets/images/5005796.png" />
                      </figure>
                    </div>
                    <div className="col-lg-10" style={{ padding: "10px" }}>
                      <h5 className="text-white">
                        {" "}
                        <span> BẢO BÌNH </span> <span>(20/1 - 18/2)</span>{" "}
                      </h5>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sự nghiệp: Hôm nay bạn sẽ không gặp nhiều may mắn
                        nhưng về mặt tích cực, bạn cũng sẽ không gặp nhiều xui
                        xẻo, đừng nghiêm túc thái quá nhé, lúc nên đùa thì cứ
                        đùa cho đầu óc thoải mái.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Tình cảm: Bạn có thể tự chữa lành bản thân sau những
                        mất mát xảy ra chứ không phải cầu mong ai đó bước đến
                        chữa lành giúp mình.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sức khỏe: Hôm nay sức khỏe của bạn rất tốt, bạn nên ăn
                        thêm nhiều rau xanh.{" "}
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
                        <img src="assets/images/5005801.png" />
                      </figure>
                    </div>
                    <div className="col-lg-10" style={{ padding: "10px" }}>
                      <h5 className="text-white">
                        {" "}
                        <span> SONG NGƯ </span> <span>(19/2 - 20/3)</span>{" "}
                      </h5>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sự nghiệp: Năng lượng tốt và những cơ hội tuyệt vời
                        đang đến với bạn, ngay cả khi bạn nghĩ rằng mọi hy vọng
                        đều đã mất.{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Tình cảm: Một chút mệt mỏi, một chút cô đơn, một chút
                        tủi thân. Nhưng không sao, mọi thứ rồi sẽ ổn thôi, ngày
                        mai sẽ là ngày hạnh phúc hơn đối với Ngư..{" "}
                      </p>
                      <p className="mt-2" style={{ textAlign: "start" }}>
                        {" "}
                        - Sức khỏe: Chòm sao này nên điều chỉnh cảm xúc thật cẩn
                        thận để tinh thần không bị xuống dốc.{" "}
                      </p>
                    </div>
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
