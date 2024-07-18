import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Button, InputGroup, FormControl, Modal, Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

// const API = "https://tarot.somee.com/api/User";
const API = "https://tarott.azurewebsites.net/api/User";
// const readerAPI = "https://tarot.somee.com/api/TarotReader";
const readerAPI = "https://tarott.azurewebsites.net/api/User/register-tarotreader";

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showReaderModal, setShowReaderModal] = useState(false);

  const [newReader, setNewReader] = useState({
    userId: "",
    lastName: "",
    firstName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    password: "",
    address: "",
    introduction: "",
    description: "",
    experience: "",
    kind: "",
    image: "",
    isActive: true,
    status: true,
  });

  const fetchUsers = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      if (data.length > 0) {
        const transformedData = data
          .filter((user) => user.roleId === 3)
          .map((user) => ({
            ...user,
            name: `${user.firstName} ${user.lastName}`,
            gender: user.gender ? "Nam" : "Nữ",
            isActive: user.isActive ? "Active" : "InActive",
            dateOfBirth: new Date(user.dateOfBirth).toLocaleDateString("vi-VN"),
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

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleDelete = async () => {
    if (selectedRows.length > 0) {
      const confirmDelete = window.confirm(
        "Bạn có chắc chắn muốn xóa những user này?"
      );
      if (confirmDelete) {
        try {
          await Promise.all(
            selectedRows.map(async (user) => {
              const res = await fetch(`${API}/${user.userId}`, {
                method: "DELETE",
              });
              if (!res.ok) {
                throw new Error(`Failed to delete user with id ${user.userId}`);
              }
            })
          );
          fetchUsers(); // Refresh the user list after deletion
        } catch (e) {
          console.error(e);
        }
      }
    } else {
      alert("Vui lòng chọn ít nhất một user để xóa.");
    }
  };

  const handleRowSelected = (state) => {
    setSelectedRows(state.selectedRows);
  };

  const convertImageToByteArray = (file) => {
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result.split(',')[1]); // Chỉ lấy phần Base64 sau dấu phẩy
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file); // Đọc tệp như một Base64 string
      } catch (error) {
        reject(error);
      }
    });
  };

  const handleImageChange = (file) => {
    setNewReader({ ...newReader, image: file });
  };

  const handleCreateReader = async () => {
    try {
      const imageFile = newReader.image;
      let imageByteArray = "";

      if (imageFile instanceof File) {
        imageByteArray = await convertImageToByteArray(imageFile);
      } else {
        imageByteArray = imageFile;
      }

      const selectedUser = selectedRows[0];

      const newReaderData = {
        userId: selectedUser.userId,
        introduction: newReader.introduction,
        description: newReader.description,
        experience: newReader.experience,
        kind: newReader.kind,
        image: imageByteArray,
        status: newReader.status,
      };
      console.log("Data sent to API:", newReaderData);

      const res = await fetch(readerAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReaderData),
      });

      if (res.ok) {
        setShowReaderModal(false);
        alert("Tarot Reader created successfully!");
      } else {
        alert("Failed to create Tarot Reader");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const columns = [
    {
      name: "Họ Tên",
      selector: (row) => row.name,
      sortable: true,
      wrap: true,
    },
    {
      name: "Giới Tính",
      selector: (row) => row.gender,
    },
    {
      name: "Ngày Sinh",
      selector: (row) => row.dateOfBirth,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Số Điện Thoại",
      selector: (row) => row.phoneNumber,
    },
    {
      name: "Địa Chỉ",
      selector: (row) => row.address,
    },
    {
      name: "Status",
      selector: (row) => row.isActive,
      cell: (row) => (
        <span style={{ color: row.isActive === "Active" ? "lime" : "red" }}>
          {row.isActive}
        </span>
      ),
    },
  ];

  const filteredUsers = users.filter((user) =>
    Object.values(user).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchText.toLowerCase())
    )
  );

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
      <div className="d-flex justify-content-between align-items-center">
        <InputGroup style={{ maxWidth: "180px" }}>
          <FormControl
            placeholder="Search..."
            value={searchText}
            onChange={handleSearch}
          />
        </InputGroup>
        <div className="d-flex">
          <Button variant="primary" className="me-2" onClick={() => setShowReaderModal(true)}>
            Thêm Tài Khoản
          </Button>
          <Button variant="danger" className="me-2" onClick={handleDelete}>
            Xóa Tài Khoản
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

      <Modal show={showReaderModal} onHide={() => setShowReaderModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm Tarot Reader</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="text"
                value={selectedRows[0]?.userId || ""}
                onChange={(e) =>
                  setNewReader({ ...newReader, userId: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ảnh Đại Diện</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => handleImageChange(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Giới Thiệu</Form.Label>
              <Form.Control
                as="textarea"
                row={3}
                value={newReader.introduction}
                onChange={(e) =>
                  setNewReader({ ...newReader, introduction: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mô Tả</Form.Label>
              <Form.Control
                as="textarea"
                row={3}
                value={newReader.description}
                onChange={(e) =>
                  setNewReader({ ...newReader, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Kinh Nghiệm</Form.Label>
              <Form.Control
                type="text"
                value={newReader.experience}
                onChange={(e) =>
                  setNewReader({ ...newReader, experience: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Thể Loại</Form.Label>
              <Form.Control
                type="text"
                value={newReader.kind}
                onChange={(e) =>
                  setNewReader({ ...newReader, kind: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={newReader.status}
                onChange={(e) =>
                  setNewReader({ ...newReader, status: e.target.value })
                }
              >
              <option value={true}>Available</option>
              <option value={false}>Pending</option>
            </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowReaderModal(false)}>
            Thoát
          </Button>
          <Button variant="primary" onClick={handleCreateReader}>
            Thêm Mới Tarot Reader
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
