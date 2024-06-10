import React from "react";
import Btn from "../Button/Btn";

export default function Confirm({ onClose, sessionType, bookingDetails }) {
  const handleConfirm = () => {
    // Handle confirmation logic here, such as sending a booking request to the server
    console.log('Booking confirmed:', bookingDetails);
    onClose();
  };

  return (
    <div
      className="modal show"
      id="confirmBooking"
      tabIndex="-1"
      aria-labelledby="confirmBookingLabel"
      aria-hidden="true"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="modal-dialog" style={{ maxWidth: "600px", width: "90%", maxHeight: "80%" }}>
        <div
          className="modal-content"
          style={{
            borderRadius: "30px",
            boxShadow: "rgb(0, 0, 0) 0px 3px 0px 0px",
          }}
        >
          <div className="modal-header border-bottom-0" style={{backgroundColor: "transparent"}}>
            <button
              style={{ marginRight: "5px" }}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="modal-contact">
              <h2>Xác nhận đặt lịch</h2>
              <p style={{textAlign: "start"}}>Tarot Reader: {bookingDetails.tarotReaderName}</p>
              <p style={{textAlign: "start"}}>Loại phiên: {bookingDetails.sessionTypeName}</p>
              <p style={{textAlign: "start"}}>Thời lượng: {bookingDetails.sessionDuration} phút</p>
              <p style={{textAlign: "start"}}>Ngày: {new Date(bookingDetails.date).toLocaleDateString()}</p>
              <p style={{textAlign: "start"}}>Thời gian: {new Date(bookingDetails.startTime).toLocaleTimeString()} - {new Date(bookingDetails.endTime).toLocaleTimeString()}</p>
              <p style={{textAlign: "start"}}>Giá: {bookingDetails.price}.000đ</p>
              <Btn onClick={handleConfirm}>Xác nhận</Btn>
              <Btn onClick={onClose}>Hủy</Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
