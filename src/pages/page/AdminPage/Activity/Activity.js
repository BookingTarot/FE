import React, { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';

const API = "https://localhost:7218/api/Bookings";

export default function Customer() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                // Sử dụng map để chuyển đổi chuỗi từ API endpoints
                const transformedData = data.map(user => ({
                    ...user,
                    status: user.status ? "Hoàn Thành" : "Bị Hủy",
                    gender: user.gender ? "Nam" : "Nữ",
                    date: new Date(user.date).toLocaleDateString('vi-VN')
                }));
                setUsers(transformedData);
            }
            console.log(data);
            setLoading(false);
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers(API);
    }, []);

    const columns = [
        {
            name: 'Tarot Reader',
            selector: row => row.tarotReaderName,
            wrap: true
        },
        {
            name: 'Khách Hàng',
            selector: row => row.customerName,
            wrap: true
        },
        {
            name: "Giới Tính",
            selector: row => row.gender
        },
        {
            name: 'Tuổi',
            selector: row => row.age
        },
        {
            name: 'Số Điện Thoại',
            selector: row => row.phoneNumber
        },
        {
            name: 'Dịch Vụ',
            selector: row => row.sessionTypeName,
            wrap: true
        },
        {
            name: 'Ngày xem',
            selector: row => row.date
        },
        {
            name: 'Bắt Đầu',
            selector: row => {
                // Chuyển đổi chuỗi thời gian thành đối tượng Date
                const startTime = new Date(row.startTime);
                // Lấy giờ và phút
                const hours = startTime.getHours();
                const minutes = startTime.getMinutes();
                // Format lại để hiển thị
                const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
                return formattedTime;
            }
        },
        {
            name: 'Kết Thúc',
            selector: row => {
                // Chuyển đổi chuỗi thời gian thành đối tượng Date
                const endTime = new Date(row.endTime);
                // Lấy giờ và phút
                const hours = endTime.getHours();
                const minutes = endTime.getMinutes();
                // Format lại để hiển thị
                const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
                return formattedTime;
            }
        },
        {
            name: 'Status',
            selector: row => row.status
        }
    ];

    return (
        <div className="container mt-5">
            <DataTable
                columns={columns}
                data={users}
                progressPending={loading}
                pagination
                selectableRows
                wrap
            />
        </div>
    );
}
