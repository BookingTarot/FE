import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { InputGroup, FormControl, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const bookingAPI = "https://tarott.azurewebsites.net/api/Bookings";
const telloryLogoUrl = "../../../../assets/images/logo.png";

export default function Transaction() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(bookingAPI);
        let data = await res.json();
        data = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBookings(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  useEffect(() => {
    // Filter and sort bookings based on search text, start date, and end date
    const filtered = bookings.filter((booking) =>
      booking.customerName.toLowerCase().includes(searchText.toLowerCase())
    );
    const sorted = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    setFilteredBookings(sorted);
  }, [bookings, searchText, startDate, endDate]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const columns = [
    {
      name: "Kênh thanh toán",
      selector: (row) => (
        <>
          <img
            src={telloryLogoUrl}
            alt="Tellory Logo"
            style={{ width: "50px" }}
          />
          Tellory
        </>
      ),
      sortable: true,
    },
    { name: "Tổng tiền", selector: (row) => row.amount, sortable: true },
    {
      name: "Ngày tạo",
      selector: (row) => row.date,
      sortable: true,
      format: (row) => new Date(row.date).toLocaleDateString(),
    },
    { name: "Mô tả", selector: (row) => row.customerName + " Thanh Toan" },
    { name: "Mã đơn hàng", selector: (row) => row.bookingId },
    {
      name: "Status",
      selector: (row) => row.status,
      format: (row) => (
        <span style={{ color: row.status ? "green" : "red" }}>
          {row.status ? "Đã thanh toán" : "Chờ thanh toán"}
        </span>
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
        <div className="d-flex">
          <Form.Group controlId="startDate" className="mr-3 mb-0">
            <Form.Label className="mr-2" style={{ color: "white" }}>
              Từ:
            </Form.Label>
            <FormControl
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </Form.Group>
          <Form.Group
            controlId="endDate"
            className="mr-3 mb-0"
            style={{ marginLeft: "10px" }}
          >
            <Form.Label className="mr-2" style={{ color: "white" }}>
              Đến:
            </Form.Label>
            <FormControl
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </Form.Group>
        </div>
        <InputGroup style={{ maxWidth: "180px" }}>
          <FormControl
            placeholder="Search..."
            value={searchText}
            onChange={handleSearch}
          />
        </InputGroup>
      </div>
      <DataTable
        columns={columns}
        data={filteredBookings}
        progressPending={loading}
        pagination
        customStyles={customStyles}
        theme="dark"
      />
    </div>
  );
}
