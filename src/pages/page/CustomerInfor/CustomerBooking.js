import { useAuth } from "../../../components/Login/Authen";
import React, { useState, useEffect } from "react";

export default function CustomerBooking() {
  const { user } = useAuth();
  const [bookingHistory, setBookingHistory] = useState([]);

  useEffect(() => {
    const fetchBookingHistory = async () => {
      try {
        const response = await fetch(
          `https://tarot.somee.com/api/Bookings?customerId=${user.userId}`
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

  return (
    <div className="booking-history">
      <h2>Booking History</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Tarot Reader</th>
            <th>Customer Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Session Type</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookingHistory.map((booking) => (
            <tr key={booking.scheduleId}>
              <td>{booking.tarotReaderName}</td>
              <td>{booking.customerName}</td>
              <td>{booking.age}</td>
              <td>{booking.gender ? "Male" : "Female"}</td>
              <td>{booking.phoneNumber}</td>
              <td>{new Date(booking.date).toLocaleDateString()}</td>
              <td>
                {new Date(booking.startTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>
              <td>
                {new Date(booking.endTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>
              <td>{booking.sessionTypeName}</td>
              <td>{booking.amount}</td>
              <td>{booking.description}</td>
              <td>{booking.status ? "Completed" : "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
