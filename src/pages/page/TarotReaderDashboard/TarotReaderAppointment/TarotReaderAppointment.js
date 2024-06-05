import "./TarotReaderAppointment.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function TarotReaderAppointment() {
    const [appointments, setAppointments] = useState([]);
    const id = 2;

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get("https://localhost:7218/api/Bookings");
                const formattedAppointments = response.data.map(appointment => {
                    const formattedDate = new Date(appointment.date).toLocaleDateString('en-GB');
                    const formattedTime = new Date(appointment.startTime).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
                    return { ...appointment, date: formattedDate, startTime: formattedTime };
                });
    
                // Tìm appointment có tarotReaderId tương ứng với id
                const filteredAppointments = formattedAppointments.filter(appointment => appointment.tarotReaderId === id);
    
                setAppointments(filteredAppointments);
            } catch (error) {
                console.error("Error fetching appointments", error);
            }
        };
    
        fetchAppointments();
    }, [id]);

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
                                    <th className="border-bottom p-3" style={{ minWidth: '50px' }}>#</th>
                                    <th className="border-bottom p-3" style={{ minWidth: '180px' }}>Tên</th>
                                    <th className="border-bottom p-3">Tuổi</th>
                                    <th className="border-bottom p-3">Giới tính</th>
                                    <th className="border-bottom p-3">Số điện thoại</th>
                                    <th className="border-bottom p-3" style={{ minWidth: '150px' }}>Ngày</th>
                                    <th className="border-bottom p-3">Thời gian</th>                                    
                                    <th className="border-bottom p-3">Gói dịch vụ</th>
                                    <th className="border-bottom p-3" style={{ minWidth: '150px' }}>Trạng thái</th>
                                </tr>
                            </thead>

                            <tbody>
                                {appointments.map((appointment, index) => (
                                    <tr key={index}>
                                        <th className="p-3">{index + 1}</th>
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
                                        ):(
                                            <td className={`p-3 ${appointment.status === 'Confirmed' ? 'confirmed' : 'disabled'}`}>                                                                                        
                                                {appointment.status === 'Confirmed' ? 'Xác nhận' : ''}
                                                {appointment.status === 'Disabled' ? 'Hủy' : ''}
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TarotReaderAppointment;
