import React, { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
import { Button, InputGroup, FormControl, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const TarotReaderAPI = "https://tarot.somee.com/api/TarotReader";

export default function TarotReader() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRows, setSelectedRows] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [editData, setEditData] = useState({
        tarotReaderId: '',
        fullName: '',
        experience: '',
        kind: '',
        image: '',
        status: ''
    });

    // Fetch users data
    const fetchUsers = async () => {
        try {
            const res = await axios.get(TarotReaderAPI);
            const data = res.data;
            if (data.length > 0) {
                const transformedData = data.map(user => ({
                    ...user,
                    status: user.status ? "Available" : "Pending",
                    dateOfBirth: new Date(user.dateOfBirth).toLocaleDateString('vi-VN')
                }));
                setUsers(transformedData);
            }
            setLoading(false);
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // Handle search
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    // Handle edit
    const handleEdit = () => {
        if (selectedRows.length === 1) {
            const user = selectedRows[0];
            setEditData({
                tarotReaderId: user.tarotReaderId,
                fullName: user.fullName,
                experience: user.experience,
                kind: user.kind,
                image: user.image,
                status: user.status ? "Available" : "Pending"
            });
            setShowModal(true);
        } else {
            alert("Vui lòng chọn đúng một user để chỉnh sửa.");
        }
    };

    // Handle delete
    const handleDelete = async () => {
        if (selectedRows.length > 0) {
            const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa những user này?");
            if (confirmDelete) {
                try {
                    await Promise.all(selectedRows.map(async (user) => {
                        const res = await axios.delete(`${TarotReaderAPI}/${user.tarotReaderId}`);
                        if (!res.data.success) {
                            throw new Error(`Failed to delete user with id ${user.tarotReaderId}`);
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

    // Filtered users based on search text
    const filteredUsers = users.filter(user =>
        Object.values(user).some(value =>
            typeof value === "string" && value.toLowerCase().includes(searchText.toLowerCase())
        )
    );

    // Columns definition for DataTable
    const columns = [
        {
            name: 'Avatar',
            cell: row => <img src={row.image} alt="Avatar" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        },
        {
            name: 'Họ Tên',
            selector: row => row.fullName,
            wrap: true
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
            cell: row => (
                <span style={{ color: row.status === "Available" ? "lime" : "red" }}>
                    {row.status}
                </span>
            )
        }
    ];

    // Custom styles for DataTable
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

    // Function to handle row selection
    const handleRowSelected = (state) => {
        setSelectedRows(state.selectedRows);
    };

    // Function to open modal for creating a new Tarot Reader
    const handleCreate = () => {
        setShowModal(true);
    };

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData({
            ...editData,
            [name]: value
        });
    };

    // Function to handle form submission for creating a new Tarot Reader
    const handleCreateSubmit = async () => {
        try {
            const res = await axios.post(TarotReaderAPI, {
                image: editData.image,
                fullName: editData.fullName,
                experience: editData.experience,
                kind: editData.kind,
                status: editData.status === "Available"
            });
    
            if (!res.data.success) {
                throw new Error('Failed to create Tarot Reader');
            }
    
            // Close the modal after successful creation
            setShowModal(false);
    
            // Refresh the list of users
            fetchUsers();
        } catch (error) {
            console.error('Error creating Tarot Reader:', error);
            alert('An error occurred while creating Tarot Reader.');
        }
    };    


    // Function to handle modal close
    const handleCloseModal = () => {
        setShowModal(false);
        setEditData({
            tarotReaderId: '',
            fullName: '',
            experience: '',
            kind: '',
            image: '',
            status: ''
        });
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
                <div className="d-flex">
                    <Button className="me-2" onClick={handleCreate}>
                        <i className="bi bi-person-fill-add fs-4"></i>
                    </Button>
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

            {/* Create Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Tarot Reader</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="fullName"
                                value={editData.fullName}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control
                                type="text"
                                name="experience"
                                value={editData.experience}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Kind</Form.Label>
                            <Form.Control
                                type="text"
                                name="kind"
                                value={editData.kind}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                name="image"
                                value={editData.image}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                as="select"
                                name="status"
                                value={editData.status}
                                onChange={handleInputChange}
                            >
                                <option value="Available">Available</option>
                                <option value="Pending">Pending</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCreateSubmit}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
