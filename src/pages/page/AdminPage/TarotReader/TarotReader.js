import React, { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
import { Button, InputGroup, FormControl, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const TarotReaderAPI = "https://tarot.somee.com/api/TarotReader";

export default function TarotReader() {
  const [readers, setReaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState({
    tarotReaderId: "",
    fullName: "",
    experience: "",
    kind: "",
    image: Uint8Array,
    status: true,
  });
  const [imageFile, setImageFile] = useState(null);

  // Fetch readers data
  const fetchReaders = async () => {
    try {
      const res = await fetch(TarotReaderAPI);
      const data = await res.json();
      if (data.length > 0) {
        const transformedData = data.map((reader) => ({
          ...reader,
          status: reader.status ? "Available" : "Pending",
        }));
        setReaders(transformedData);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReaders();
  }, []);

  // Handle search
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  // Columns definition for DataTable
  const columns = [
    {
      name: "Avatar",
      cell: (row) => (
        <img
          src={row.image}
          alt="Avatar"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
      ),
    },
    {
      name: "Full Name",
      selector: (row) => row.fullName,
      wrap: true,
    },
    {
      name: "Experience",
      selector: (row) => row.experience,
    },
    {
      name: "Kind",
      selector: (row) => row.kind,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => (
        <span style={{ color: row.status === "Available" ? "lime" : "red" }}>
          {row.status}
        </span>
      ),
    },
  ];

  // Custom styles for DataTable
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

  const handleRowSelected = (state) => {
    setSelectedRows(state.selectedRows);
  };

  const handleEdit = () => {
    if (selectedRows.length === 1) {
      const reader = selectedRows[0];
      setEditData({
        tarotReaderId: reader.tarotReaderId,
        image: reader.image,
        fullName: reader.fullName,
        experience: reader.experience,
        kind: reader.kind,
        status: reader.status ? "Available" : "Pending",
      });
      setShowModal(true);
    } else {
      alert("Vui lòng chọn đúng một reader để chỉnh sửa.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditData({
      tarotReaderId: "",
      fullName: "",
      experience: "",
      kind: "",
      image: "",
      status: "",
    });
  };

  const convertImageToByteArray = (file) => {
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result); // Trả về dữ liệu như một Base64 string
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file); // Đọc tệp như một Base64 string
      } catch (error) {
        reject(error);
      }
    });
  };

  const handleUpdateReader = async () => {
    try {
      const imageFile = editData.image;
      if (!imageFile) {
        alert("Please select an image.");
        return;
      }

      const imageByteArray = await convertImageToByteArray(imageFile);

      const updatedReader = {
        tarotReaderId: editData.tarotReaderId,
        fullName: editData.fullName,
        experience: editData.experience,
        kind: editData.kind,
        image: imageByteArray,
        status: editData.status === "Available" ? true : false,
      };

      const res = await fetch(`${TarotReaderAPI}/${editData.tarotReaderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedReader),
      });

      if (res.ok) {
        setShowModal(false);
        alert("Tarot Reader updated successfully!");
        fetchReaders(); // Refresh the readers list after update
      } else {
        alert("Failed to update Tarot Reader");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    if (selectedRows.length > 0) {
      const confirmDelete = window.confirm(
        "Bạn có chắc chắn muốn xóa những readers này?"
      );
      if (confirmDelete) {
        try {
          await Promise.all(
            selectedRows.map(async (reader) => {
              const res = await fetch(`${TarotReaderAPI}/${reader.tarotReaderId}`, {
                method: "DELETE",
              });
              if (!res.ok) {
                throw new Error(`Failed to delete user with id ${reader.tarotReaderId}`);
              }
            })
          );
          fetchReaders(); // Refresh the user list after deletion
        } catch (e) {
          console.error(e);
        }
      }
    } else {
      alert("Vui lòng chọn ít nhất một reader để xóa.");
    }
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
        <div className="d-flex">
          <Button variant="success" className="me-2" onClick={handleEdit}>
            <i className="bi bi-pencil-square fs-4" onClick={handleDelete}></i>
          </Button>
          <Button variant="danger">
            <i className="bi bi-trash3-fill fs-4"></i>
          </Button>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={readers}
        progressPending={loading}
        pagination
        selectableRows
        onSelectedRowsChange={handleRowSelected}
        customStyles={customStyles}
        theme="dark"
      />

      {/* Update Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Tarot Reader</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Avatar File</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
            </Form.Group>
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
          <Button variant="primary" onClick={handleUpdateReader}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
