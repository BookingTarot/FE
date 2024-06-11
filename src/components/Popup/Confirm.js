import React from "react";
import Btn from "../Button/Btn";
import { useAuth } from "../Login/Authen";

export default function Confirm({ onClose, sessionType, bookingDetails }) {
  const {user} = useAuth();
  console.log("abc", {user});
  const handleConfirm = async () => {
    try {
      const bookingData = {
        customerId: user.customerId,
        tarotReaderId: bookingDetails.tarotReaderId,
        amount: bookingDetails.price, 
        description: `Booking for ${bookingDetails.sessionTypeName} session`, 
        sessionTypeId: sessionType.id, 
        bookDate: new Date().toISOString(), // 
        startTime: bookingDetails.startTime,
        endTime: bookingDetails.endTime
      };

      const response = await fetch('https://localhost:7218/api/Bookings/Booking with Schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error('Failed to confirm booking');
      }

      console.log('Booking confirmed:', bookingData);
      onClose();
    } catch (error) {
      console.error('Error confirming booking:', error.message);
      // Handle error, show error message, etc.
    }
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
      <div className="modal-dialog" style={{ maxWidth: "550px", width: "90%", maxHeight: "80%" }}>
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
            <div className="modal-contact" style={{padding: "20px", textAlign: "center"}}>
              <h2>Xác nhận đặt lịch</h2>
              <p style={{textAlign: "start"}}>Tarot Reader: {bookingDetails.tarotReaderName}</p>
              <p style={{textAlign: "start"}}>Loại phiên: {bookingDetails.sessionTypeName}</p>
              <p style={{textAlign: "start"}}>Thời lượng: {bookingDetails.sessionDuration} phút</p>
              <p style={{textAlign: "start"}}>Ngày: {new Date(bookingDetails.date).toLocaleDateString()}</p>
              <p style={{textAlign: "start"}}>Thời gian: {new Date(bookingDetails.startTime).toLocaleTimeString()} - {new Date(bookingDetails.endTime).toLocaleTimeString()}</p>
              <p style={{textAlign: "start"}}>Giá: {bookingDetails.price}.000đ</p>
              <Btn onClick={handleConfirm}>Xác nhận</Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
