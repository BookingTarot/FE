import React, { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
import { Button, InputGroup, FormControl, Modal, Form } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BorderLeft } from "react-bootstrap-icons";

const API = "https://localhost:7218/api/User";
// const API = "https://tarot.somee.com/api/User";


export default function Customer() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRows, setSelectedRows] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [editUser, setEditUser] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        phoneNumber: '',
        gender: '',
        email: '',
        address: '',
        isActive: false
    });

    const fetchUsers = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            if (data.length > 0) {
                const transformedData = data
                    .filter(user => user.roleId === 2)
                    .map(user => ({
                        ...user,
                        name: `${user.firstName} ${user.lastName}`,
                        gender: user.gender ? "Nam" : "Nữ",
                        isActive: user.isActive ? "Active" : "InActive",
                        dateOfBirth: new Date(user.dateOfBirth).toLocaleDateString('vi-VN')
                    }));
                setUsers(transformedData);
            }
            setLoading(false);
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const handleEdit = () => {
        if (selectedRows.length === 1) {
            const user = selectedRows[0];
            setEditUser({
                firstName: user.firstName,
                lastName: user.lastName,
                dateOfBirth: user.dateOfBirth,
                phoneNumber: user.phoneNumber,
                gender: user.gender,
                email: user.email,
                address: user.address,
                isActive: user.isActive === "Active"
            });
            setShowModal(true);
        } else {
            alert("Vui lòng chọn đúng một user để chỉnh sửa.");
        }
    };

    const handleDelete = async () => {
        if (selectedRows.length > 0) {
            const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa những user này?");
            if (confirmDelete) {
                try {
                    await Promise.all(selectedRows.map(async (user) => {
                        const res = await fetch(`${API}/${user.userId}`, {
                            method: 'DELETE'
                        });
                        if (!res.ok) {
                            throw new Error(`Failed to delete user with id ${user.userId}`);
                        }
                    }));
                    fetchUsers();  // Refresh the user list after deletion
                } catch (e) {
                    console.error(e);
                    alert("An error occurred while deleting the users.");
                }
            }
        } else {
            alert("Vui lòng chọn ít nhất một user để xóa.");
        }
    };

    const handleRowSelected = (state) => {
        setSelectedRows(state.selectedRows);
    };

    const handleSave = async () => {
        const updatedUser = {
            ...editUser,
            gender: editUser.gender === "Nam"
        };
        try {
            const res = await fetch(`${API}/${selectedRows[0].id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedUser)
            });
            if (res.ok) {
                setShowModal(false);
                fetchUsers();
            } else {
                alert("Failed to update user");
            }
        } catch (e) {
            console.error(e);
            alert("An error occurred while updating the user.");
        }
    };

    const columns = [
        {
            name: 'Họ Tên',
            selector: row => row.name,
            sortable: true,
            wrap: true
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
            selector: row => row.email
        },
        {
            name: 'Số Điện Thoại',
            selector: row => row.phoneNumber
        },
        {
            name: 'Địa Chỉ',
            selector: row => row.address
        },
        {
            name: "Status",
            selector: row => row.isActive,
            cell: row => (
                <span style={{ color: row.isActive === "Active" ? "lime" : "red" }}>
                    {row.isActive}
                </span>
            )
        }
    ];

    const filteredUsers = users.filter(user => 
        Object.values(user).some(
            value => 
                typeof value === "string" && value.toLowerCase().includes(searchText.toLowerCase())
        )
    );

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
            <div className="d-flex justify-content-between align-items-center">
                <InputGroup style={{ maxWidth: '180px' }}>
                    <FormControl
                        placeholder="Search..."
                        value={searchText}
                        onChange={handleSearch}
                    />
                </InputGroup>
                <div className="d-flex">
                    <Button variant="success" className="me-2" onClick={handleEdit}>
                        <i className="bi bi-pencil-square fs-4"></i>
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        <i className="bi bi-trash3-fill fs-4"></i>
                    </Button>
                </div>
            </div>
            <DataTable
                columns={columns}
                data={filteredUsers}
                progressPending={loading}
                pagination
                selectableRows
                onSelectedRowsChange={handleRowSelected}
                customStyles={customStyles}
                theme="dark"
            />
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={editUser.firstName}
                                onChange={(e) => setEditUser({ ...editUser, firstName: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={editUser.lastName}
                                onChange={(e) => setEditUser({ ...editUser, lastName: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                type="date"
                                value={editUser.dateOfBirth}
                                onChange={(e) => setEditUser({ ...editUser, dateOfBirth: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                value={editUser.phoneNumber}
                                onChange={(e) => setEditUser({ ...editUser, phoneNumber: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                                as="select"
                                value={editUser.gender}
                                onChange={(e) => setEditUser({ ...editUser, gender: e.target.value })}
                            >
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={editUser.email}
                                onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                value={editUser.address}
                                onChange={(e) => setEditUser({ ...editUser, address: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="Is Active"
                                checked={editUser.isActive}
                                onChange={(e) => setEditUser({ ...editUser, isActive: e.target.checked })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
