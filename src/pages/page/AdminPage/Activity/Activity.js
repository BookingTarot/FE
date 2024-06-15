import React, { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const API = "https://localhost:7218/api/Bookings";

export default function Activity() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');

    const fetchBookings = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            if (data.length > 0) {
                const transformedData = data.map(booking => ({
                    ...booking,
                    status: booking.status ? "Hoàn Thành" : "Bị Hủy",
                    gender: booking.gender ? "Nam" : "Nữ",
                    date: new Date(booking.date).toLocaleDateString('vi-VN'),
                    startTime: formatTime(booking.startTime),
                    endTime: formatTime(booking.endTime)
                }));
                setBookings(transformedData);
            }
            setLoading(false);
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchBookings();
    }, []);

    const formatTime = (timeString) => {
        const time = new Date(timeString);
        const hours = time.getHours();
        const minutes = time.getMinutes();
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    };

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const filteredBookings = bookings.filter(booking =>
        Object.values(booking).some(value =>
            typeof value === "string" && value.toLowerCase().includes(searchText.toLowerCase())
        )
    );

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
            selector: row => row.startTime
        },
        {
            name: 'Kết Thúc',
            selector: row => row.endTime
        },
        {
            name: 'Status',
            selector: row => row.status,
            cell: row => (
                <span style={{ color: row.status === "Hoàn Thành" ? "lime" : "red" }}>
                    {row.status}
                </span>
            )
        }
    ];

    const customStyles = {
        header: {
            style: {
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                fontWeight: 'bold',
                border: '2px solid #333333'
            },
        },
        headRow: {
            style: {
                backgroundColor: '#1a1a1a',
                border: '2px solid #333333'
            }
        },
        headCells: {
            style: {
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: '16px'
            },
        },
        rows: {
            style: {
                backgroundColor: '#2a2a2a',
                color: '#ffffff',
                '&:not(:last-of-type)': {
                    borderLeft: '2px solid #333333',
                    borderRight: '2px solid #333333'
                },
            },
            highlightOnHoverStyle: {
                backgroundColor: '#333333',
                borderBottomColor: '#333333',
                borderRadius: '25px',
                outline: '1px solid #ffffff',
            },
        },
        pagination: {
            style: {
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                border: '2px solid #333333'
            },
        },
    };

    return (
        <div className="container mt-2">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <InputGroup style={{ maxWidth: '180px' }}>
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
                selectableRows
                customStyles={customStyles}
                theme="dark"
            />
        </div>
    );
}
