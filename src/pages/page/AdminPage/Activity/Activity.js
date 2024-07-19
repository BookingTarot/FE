import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Button, InputGroup, FormControl, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const API = "https://tarott.azurewebsites.net/api/Bookings";
const statusOptions = ["Chưa thanh toán", "Đã thanh toán"];

export default function Activity() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editBooking, setEditBooking] = useState({
    bookingId: 0,
    tarotReaderId: 0,
    customerId: 0,
    date: "",
    amount: 0,
    description: "",
    scheduleId: 0,
    sessionTypeId: 0,
    status: true,
    linkMeet: "",
  });

  const fetchBookings = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      if (data.length > 0) {
        const transformedData = data.map((booking) => ({
          ...booking,
          status: booking.status ? "Đã thanh toán" : "Chưa thanh toán",
          gender: booking.gender ? "Nam" : "Nữ",
          startTime: formatTime(booking.startTime),
          endTime: formatTime(booking.endTime),
        }));
        transformedData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBookings(transformedData);
      }
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const formatTime = (timeString) => {
    const time = new Date(timeString);
    const day = time.getDate();
    const month = time.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
    const year = time.getFullYear();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    return `${day}-${month}-${year} ${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}`;
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredBookings = bookings.filter((booking) =>
    Object.values(booking).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const handleEdit = (booking) => {
    setEditBooking({
      bookingId: booking.bookingId,
      tarotReaderId: booking.tarotReaderId,
      customerId: booking.customerId,
      date: booking.date,
      amount: booking.amount,
      description: booking.description,
      scheduleId: booking.scheduleId,
      sessionTypeId: booking.sessionTypeId,
      status: booking.status === "Đã thanh toán",
      linkMeet: booking.linkMeet,
    });
    setShowModal(true);
  };

  const handleSave = async () => {
    try {
      const bookingData = {
        bookingId: editBooking.bookingId,
        tarotReaderId: editBooking.tarotReaderId,
        customerId: editBooking.customerId,
        amount: editBooking.amount,
        date: editBooking.date,
        description: editBooking.description,
        scheduleId: editBooking.scheduleId,
        sessionTypeId: editBooking.sessionTypeId,
        status: true,
        linkMeet: editBooking.linkMeet, // Send status as boolean
      };

      console.log("Booking Data to Update:", bookingData);

      const res = await fetch(`${API}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (res.ok) {
        console.log("Update successful");
        fetchBookings(); // Refresh bookings after successful update
        setShowModal(false); // Close modal
      } else {
        console.error("Failed to update booking");
      }
    } catch (error) {
      console.error("Error updating booking:", error);
    }
  };

  const columns = [
    {
      name: "Tarot Reader",
      selector: (row) => row.tarotReaderName,
      wrap: true,
    },
    {
      name: "Khách hàng",
      selector: (row) => row.customerName,
      wrap: true,
    },
    {
      name: "Giới tính",
      selector: (row) => row.gender,
    },
    {
      name: "Tuổi",
      selector: (row) => row.age,
    },
    {
      name: "Số điện thoại",
      selector: (row) => row.phoneNumber,
    },
    {
      name: "Buổi đọc bài",
      selector: (row) => row.sessionTypeName,
      wrap: true,
    },
    {
      name: "Ngày",
      selector: (row) => row.date,
    },
    {
      name: "Thờ gian bắt đầu",
      selector: (row) => row.startTime,
    },
    {
      name: "Thời gian kết thúc",
      selector: (row) => row.endTime,
    },
    {
      name: "Trạng thái",
      selector: (row) => row.status,
      cell: (row) => (
        <span
          style={{ color: row.status === "Đã thanh toán" ? "lime" : "red" }}
        >
          {row.status}
        </span>
      ),
    },
    {
      name: "Mã Đơn",
      selector: (row) => row.bookingId,
    },
    {
      name: "Link Meet",
      selector: (row) => row.linkMeet,
    },
    {
      name: "Thực hiện",
      cell: (row) => (
        <Button variant="info" onClick={() => handleEdit(row)}>
          Cập nhật
        </Button>
      ),
    },
  ];

  const customStyles = {
    header: {
      style: {
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        fontWeight: "bold",
        border: "2px solid #333333",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#1a1a1a",
        border: "2px solid #333333",
      },
    },
    headCells: {
      style: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: "16px",
      },
    },
    rows: {
      style: {
        backgroundColor: "#2a2a2a",
        color: "#ffffff",
        "&:not(:last-of-type)": {
          borderLeft: "2px solid #333333",
          borderRight: "2px solid #333333",
        },
      },
      highlightOnHoverStyle: {
        backgroundColor: "#333333",
        borderBottomColor: "#333333",
        borderRadius: "25px",
        outline: "1px solid #ffffff",
      },
    },
    pagination: {
      style: {
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        border: "2px solid #333333",
      },
    },
  };

  return (
    <div className="container mt-2">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <InputGroup style={{ maxWidth: "180px" }}>
          <FormControl
            placeholder="Search..."
            value={searchText}
            onChange={handleSearch}
          />
        </InputGroup>
      </div>
      <DataTable
        columns={[...columns]}
        data={filteredBookings}
        progressPending={loading}
        pagination
        selectableRows
        customStyles={customStyles}
        theme="dark"
      />
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Cập nhật thông tin đặt lịch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="editBooking.amount">
            <Form.Label>Giá</Form.Label>
            <FormControl
              type="number"
              value={editBooking.amount}
              onChange={(e) =>
                setEditBooking({
                  ...editBooking,
                  amount: parseFloat(e.target.value),
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="editBooking.description">
            <Form.Label>Mô tả</Form.Label>
            <FormControl
              type="text"
              value={editBooking.description}
              onChange={(e) =>
                setEditBooking({
                  ...editBooking,
                  description: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="editBooking.status">
            <Form.Label>Trạng thái</Form.Label>
            <Form.Select
              value={editBooking.status ? "Đã thanh toán" : "Chưa thanh toán"}
              onChange={(e) =>
                setEditBooking({
                  ...editBooking,
                  status: e.target.value === "Đã thanh toán",
                })
              }
            >
              {/* {statusOptions.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))} */}
              <option value="Đã thanh toán">Đã thanh toán</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="editBooking.description">
            <Form.Label>Link Meet</Form.Label>
            <FormControl
              type="text"
              value={editBooking.linkMeet}
              onChange={(e) =>
                setEditBooking({
                  ...editBooking,
                  linkMeet: e.target.value,
                })
              }
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Lưu Thông Tin
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
