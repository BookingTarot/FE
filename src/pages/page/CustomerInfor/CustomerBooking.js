import Header from "../../../components/Header/Header";
import { useAuth } from "../../../components/Login/Authen";
import React, { useState, useEffect } from "react";

export default function CustomerBooking() {
  const { user } = useAuth();
  const [bookingHistory, setBookingHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBookingHistory, setFilteredBookingHistory] = useState([]);

  useEffect(() => {
    const fetchBookingHistory = async () => {
      try {
        const response = await fetch(
          `https://tarott.azurewebsites.net/api/Bookings?customerId=${user.customer.customerId}`
        );
        const data = await response.json();
        setBookingHistory(data);
      } catch (error) {
        console.error("Error fetching booking history:", error);
      }
    };

    if (user) {
      fetchBookingHistory();
    }
  }, [user]);

  useEffect(() => {
    // Filter booking history based on search term
    if (searchTerm.trim() === "") {
      setFilteredBookingHistory([]);
    } else {
      const filtered = bookingHistory.filter((booking) =>
        booking.tarotReaderName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBookingHistory(filtered);
    }
  }, [searchTerm, bookingHistory]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const displayBookings =
    searchTerm === "" ? bookingHistory : filteredBookingHistory;

  return (
    <div>
      <Header />
      <div className="booking-history">
        <h2 style={{ color: "white" }}>Lịch Sử Đặt Lịch</h2>
        <div style={{ textAlign: "right", margin: "10px" }}>
          <input
            type="text"
            placeholder="Tìm kiếm theo tên Tarot Reader"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{
              padding: "5px",
              width: "100%",
              maxWidth: "180px",
              height: "40px",
            }}
          />
        </div>
        <div
          className="table-container"
          style={{ overflowX: "auto", margin: "10px" }}
        >
          <table
            className="table"
            style={{ width: "100%", minWidth: "600px", padding: "10px" }}
          >
            <thead>
              <tr>
                <th>Tarot Reader</th>
                <th>Ngày đặt lịch</th>
                <th>Bắt đầu</th>
                <th>Kết thúc</th>
                <th>Buổi đọc</th>
                <th>Giá</th>
                <th>Mô tả</th>
                <th>Trạng thái</th>
                <th>Link Xem Bài</th>
              </tr>
            </thead>
            <tbody>
              {displayBookings.map((booking) => (
                <tr key={booking.scheduleId}>
                  <td>{booking.tarotReaderName}</td>
                  <td>{new Date(booking.startTime).toLocaleDateString()}</td>
                  <td>
                    {new Date(booking.startTime).toLocaleTimeString("vi-VN", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </td>
                  <td>
                    {new Date(booking.startTime).toLocaleTimeString("vi-VN", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </td>
                  <td>{booking.sessionTypeName}</td>
                  <td>
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(booking.amount * 1000)}
                  </td>
                  <td>{booking.description}</td>
                  <td>
                    {booking.status ? "Đã hoàn thành" : "Chưa hoàn thành"}
                  </td>
                  <td>
                    {booking.status ? (
                      <a href={booking.linkMeet}>Tham gia xem bài</a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
