import "./TarotReaderAppointment.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

function TarotReaderAppointment({ user }) {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortDirection, setSortDirection] = useState("asc"); // Trạng thái sắp xếp (asc hoặc desc)
  const appointmentsPerPage = 10; // Số lượng appointments hiển thị trên mỗi trang
  const id = user.tarotReader.tarotReaderId;

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("https://tarot.somee.com/api/Bookings");
        const formattedAppointments = response.data.map((appointment) => {
          const formattedDate = new Date(appointment.date).toLocaleDateString("en-GB");
          const formattedTime = new Date(appointment.startTime).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
          return {
            ...appointment,
            date: formattedDate,
            startTime: formattedTime,
            dateObject: new Date(appointment.date), // Lưu thêm đối tượng Date để dễ sắp xếp
          };
        });

        // Tìm appointment có tarotReaderId tương ứng với id
        const filteredAppointments = formattedAppointments.filter(
          (appointment) => appointment.tarotReaderId === id
        );

        setAppointments(filteredAppointments);
      } catch (error) {
        console.error("Error fetching appointments", error);
      }
    };

    fetchAppointments();
  }, [id]);

  const handleSortClick = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newDirection);
    setAppointments((prevAppointments) =>
      [...prevAppointments].sort((a, b) => {
        if (newDirection === "asc") {
          return new Date(a.dateObject) - new Date(b.dateObject);
        } else {
          return new Date(b.dateObject) - new Date(a.dateObject);
        }
      })
    );
  };

  // Tính toán appointments hiển thị trên trang hiện tại
  const offset = currentPage * appointmentsPerPage;
  const currentAppointments = appointments.slice(offset, offset + appointmentsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <div className="row">
        <h1 className="title">Lịch hẹn</h1>
      </div>
      <div className="row">
        <div className="col-12 mt-4">
          <div className="table-responsive bg-white shadow rounded">
            <table className="table mb-0 table-center">
              <thead>
                <tr>
                  <th className="border-bottom p-3" style={{ minWidth: "50px" }}>#</th>
                  <th className="border-bottom p-3" style={{ minWidth: "180px" }}>Tên</th>
                  <th className="border-bottom p-3">Tuổi</th>
                  <th className="border-bottom p-3">Giới tính</th>
                  <th className="border-bottom p-3">Số điện thoại</th>
                  <th className="border-bottom p-3" style={{ minWidth: "150px" }} onClick={handleSortClick}>
                    Ngày {sortDirection === "asc" ? "↑" : "↓"}
                  </th>
                  <th className="border-bottom p-3">Thời gian</th>
                  <th className="border-bottom p-3">Gói dịch vụ</th>
                  <th className="border-bottom p-3" style={{ minWidth: "150px" }}>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {currentAppointments.map((appointment, index) => (
                  <tr key={index}>
                    <th className="p-3">{offset + index + 1}</th>
                    <td className="p-3">{appointment.customerName}</td>
                    <td className="p-3">{appointment.age}</td>
                    <td className="p-3">{appointment.gender ? "Nữ" : "Nam"}</td>
                    <td className="p-3">{appointment.phoneNumber}</td>
                    <td className="p-3">{appointment.date}</td>
                    <td className="p-3">{appointment.startTime}</td>
                    <td className="p-3">{appointment.sessionTypeName}</td>
                    {appointment.status === undefined ? (
                      <td className="p-3">
                        <button className="btn btn-success">Xác nhận</button>
                        <button className="btn btn-danger">Hủy</button>
                      </td>
                    ) : (
                      <td className={`p-3 ${appointment.status ? "true" : "false"}`}>
                        {appointment.status ? "Xác nhận" : "Hủy"}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(appointments.length / appointmentsPerPage)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default TarotReaderAppointment;
