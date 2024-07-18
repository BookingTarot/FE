import React from "react";
import Btn from "../Button/Btn";
import { useAuth } from "../Login/Authen";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Confirm({ onClose, sessionType, bookingDetails }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  console.log("Confirm ddata", bookingDetails);

  const handleConfirm = async () => {
    try {
      const bookingData = {
        customerId: user.customer.customerId, // Assuming user.id is the customer's ID
        tarotReaderId: sessionType.tarotReaderId,
        amount: bookingDetails.price,
        description: `Đặt lịch cho ${bookingDetails.sessionTypeName}`,
        scheduleId: bookingDetails.schedule,
        sessionTypeId: sessionType.sessionTypeId,
      };

      console.log("Booking Data:", bookingData);

      const response = await fetch(
        "https://tarott.azurewebsites.net/api/Bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to confirm booking: ${errorText}`);
      }

      console.log("Booking confirmed");

      // If booking creation is successful, fetch the latest booking ID
      const latestBookingId = await fetchLatestBookingId();
      if (!latestBookingId) {
        throw new Error("Failed to retrieve latest booking ID");
      }

      console.log("Latest Booking ID:", latestBookingId);

      // Send POST request to create payment link
      const paymentLinkResponse = await createPaymentLink(latestBookingId);
      if (!paymentLinkResponse.ok) {
        const errorText = await paymentLinkResponse.text();
        throw new Error(`Failed to create payment link: ${errorText}`);
      }

      console.log("Payment link created");

      // Handle payment link response
      const paymentLinkData = await paymentLinkResponse.json();
      const paymentLink = paymentLinkData.url; // Assuming the API returns a paymentUrl

      // Update the schedule status to false
      await updateScheduleStatus(bookingDetails, sessionType);

      console.log("Schedule status updated");

      // Redirect to the payment link or handle as needed
      // window.location.href = paymentLink;

      toast.success(
        "Đặt lịch thành công! Đang chuyển đến trang thanh toán...",
        {
          // onClose: () => navigate("/"),
        }
      );
    } catch (error) {
      console.error("Error confirming booking:", error.message);
      // Handle error, show error message, etc.
    }
  };

  const fetchLatestBookingId = async () => {
    try {
      const response = await fetch(
        `https://tarott.azurewebsites.net/api/Bookings?CustomerId=${user.customer.customerId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to retrieve latest booking ID");
      }

      const bookings = await response.json();
      console.log("Bookings array:", bookings);

      // Lấy phần tử cuối cùng từ mảng bookings
      const latestBooking = bookings[bookings.length - 1];

      console.log("Latest booking:", latestBooking);

      if (!latestBooking) {
        throw new Error("No bookings found");
      }

      return latestBooking.bookingId;
    } catch (error) {
      console.error("Error fetching latest booking ID:", error.message);
      return null;
    }
  };

  const createPaymentLink = async (bookingId) => {
    try {
      const response = await fetch(
        "https://tarott.azurewebsites.net/create-payment-link",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
          },
          body: JSON.stringify({
            bookingId: bookingId,
            returnUrl: "https://www.tellory.id.vn",
            cancelUrl: "https://www.tellory.id.vn",
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to create payment link: ${errorText}`);
      }

      console.log("Payment link response:", response);

      return response;
    } catch (error) {
      console.error("Error creating payment link:", error.message);
      return null;
    }
  };

  const updateScheduleStatus = async (bookingDetails, sessionType) => {
    const { schedule } = bookingDetails;
    const { tarotReaderId } = sessionType;
    const { date } = bookingDetails;
    const { endTime } = bookingDetails;
    const { startTime } = bookingDetails;

    try {
      const response = await fetch(
        `https://tarott.azurewebsites.net/api/Schedules`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            scheduleId: schedule,
            tarotReaderId: tarotReaderId,
            date: date,
            startTime: startTime,
            endTime: endTime,
            status: false,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Failed to update schedule status: ${errorText}`);
        throw new Error(`Failed to update schedule status: ${errorText}`);
      }

      const result = await response.json();
      console.log("Schedule status updated successfully", result);
    } catch (error) {
      console.error("Error updating schedule status:", error.message);
    }
  };

  return (
    <div>
      <ToastContainer />
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
        <div
          className="modal-dialog"
          style={{ maxWidth: "550px", width: "90%", maxHeight: "80%" }}
        >
          <div
            className="modal-content"
            style={{
              borderRadius: "30px",
              boxShadow: "rgb(0, 0, 0) 0px 3px 0px 0px",
            }}
          >
            <div
              className="modal-header border-bottom-0"
              style={{ backgroundColor: "transparent" }}
            >
              <button
                style={{ marginRight: "5px" }}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <div
                className="modal-contact"
                style={{ padding: "20px", textAlign: "center" }}
              >
                <h2>Xác nhận đặt lịch</h2>
                <p style={{ textAlign: "start" }}>
                  Tarot Reader: {bookingDetails.tarotReaderName}
                </p>
                <p style={{ textAlign: "start" }}>
                  Loại phiên: {bookingDetails.sessionTypeName}
                </p>
                <p style={{ textAlign: "start" }}>
                  Thời lượng: {bookingDetails.sessionDuration} phút
                </p>
                <p style={{ textAlign: "start" }}>
                  Ngày: {new Date(bookingDetails.date).toLocaleDateString()}
                </p>
                <p style={{ textAlign: "start" }}>
                  Thời gian:{" "}
                  {new Date(bookingDetails.startTime).toLocaleTimeString()} -{" "}
                  {new Date(bookingDetails.endTime).toLocaleTimeString()}
                </p>
                <p style={{ textAlign: "start" }}>
                  Giá: {bookingDetails.price}.000đ
                </p>
                <Btn onClick={handleConfirm}>Xác nhận</Btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
