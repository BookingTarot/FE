import React, { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';

const API = "https://localhost:7218/api/TarotReader";

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
                    status: user.status ? "Avaiable" : "Pending",
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
            name: 'Avatar',
            cell: row => <img src={row.image} alt="Avatar" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        },
        {
            name: 'Họ Tên',
            selector: row => row.fullName
        },
        {
            name: 'Kinh Nghiệm',
            selector: row => row.experience
        },
        {
            name: 'Lĩnh Vực',
            selector: row => row.kind
        },
        {
            name: 'Status',
            selector: row => row.status,
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
            />
        </div>
    );
}
