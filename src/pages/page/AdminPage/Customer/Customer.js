import React, { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';

const API = "https://localhost:7218/api/User";

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
                    name: `${user.firstName} ${user.lastName}`,
                    gender: user.gender ? "Nam" : "Nữ",
                    dateOfBirth: new Date(user.dateOfBirth).toLocaleDateString('vi-VN')
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
            name: 'Họ Tên',
            selector: row => row.name
        },
        {
            name: 'Giới Tính',
            selector: row => row.gender
        },
        {
            name: 'Ngày Sinh',
            selector: row => row.dateOfBirth
        },
        {
            name: 'Email',
            selector: row => row.email,
            wrap: true
        },
        {
            name: 'Số Điện Thoại',
            selector: row => row.phoneNumber
        },
        {
            name: 'Địa Chỉ',
            selector: row => row.address,
            wrap: true
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
