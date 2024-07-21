import React, { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
import { Button, InputGroup, FormControl, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TarotReaderAPI = "https://tarott.azurewebsites.net/api/TarotReader";
// const TarotReaderAPI = "https://localhost:7218/api/TarotReader";

const newReaderAPI = "https://tarott.azurewebsites.net/api/User/register-tarotreader";
// const newReaderAPI = "https://localhost:7218/api/User/register-tarotreader";

export default function TarotReader() {
  const [readers, setReaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editData, setEditData] = useState({
    tarotReaderId: "",
    fullName: "",
    introduction: "",
    description: "",
    experience: "",
    kind: "",
    image: "",
    status: true,
  });

  const [newReader, setNewReader] = useState({
    lastName: "",
    firstName: "",
    dateOfBirth: "",
    gender: false,
    phoneNumber: "",
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
      cell: (row) => {
        const imageFormat = row.image.startsWith("/9j/") ? "jpeg" : "png"; // Giả định rằng /9j/ là phần đầu của Base64 cho JPEG
        console.log(`data:image/${imageFormat};base64,${row.image}`); // Kiểm tra dữ liệu image
        return (
          <img
            src={`data:image/${imageFormat};base64,${row.image}`}
            alt="Avatar"
            style={{ width: "50px", height: "50px", borderRadius: "50%", margin: "5px" }}
          />
        );
      },
    },
    {
      name: "Họ Tên",
      selector: (row) => row.fullName,
      wrap: true,
    },
    {
      name: "Kinh Nghiệm",
      selector: (row) => row.experience,
    },
    {
      name: "Lĩnh Vực",
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
        introduction: reader.introduction,
        description: reader.description,
        experience: reader.experience,
        kind: reader.kind,
        status: reader.status === "Available" ? true : false,
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

  const handleFileChange = (e) => {
    setEditData({ ...editData, image: e.target.files[0] });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditData({
      tarotReaderId: "",
      fullName: "",
      introduction: "",
      description: "",
      experience: "",
      kind: "",
      image: "",
      status: true,
    });
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

  const handleUpdateReader = async () => {
    try {
      const imageFile = editData.image;
      let imageByteArray = "";

      if (imageFile instanceof File) {
        imageByteArray = await convertImageToByteArray(imageFile);
      } else {
        imageByteArray = imageFile;
      }

      const updatedReader = {
        tarotReaderId: editData.tarotReaderId,
        introduction: editData.introduction,
        description: editData.description,
        experience: editData.experience,
        kind: editData.kind,
        image: imageByteArray,
        status: editData.status,
      };

      const res = await fetch(`${TarotReaderAPI}`, {
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
        setSelectedRows([]); // Unselect all selected rows
      }
      else if (res.status === 500) {
        const statusCode = res.status;
        alert(`An Error occurs in server. Status code: ${statusCode}`);
      } else {
        alert("Failed to update Tarot Reader!");
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

  const handleShowCreateModal = () => {
    setShowCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
    setNewReader({
      lastName: "",
      firstName: "",
      dateOfBirth: "",
      gender: "",
      phoneNumber: "",
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
  };

  const createTarotReader = async () => {
    try {
      let imageByteArray = "";
      const imageFile = newReader.image;
  
      if (imageFile instanceof File) {
        imageByteArray = await convertImageToByteArray(imageFile);
      } else {
        imageByteArray = imageFile;
      }
  
      const newReaderData = {
        ...newReader,
        image: imageByteArray,
      };

      console.log("Data to be sent:", newReaderData);
  
      const res = await fetch(newReaderAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReaderData),
      });
  
      if (res.ok) {
        setShowCreateModal(false);
        alert("Tarot Reader created successfully!");
        fetchReaders(); // Refresh the readers list after creation
        setNewReader({
          lastName: "",
          firstName: "",
          dateOfBirth: "",
          gender: true,
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
        }); // Reset newReader state
      } else {
        const errorMessage = await res.text();
        const cleanErrorMessage = errorMessage.split('\n')[0].split(':')[1].trim();
        alert(`${cleanErrorMessage}`);
      }
    } catch (error) {
      console.error("Error creating Tarot Reader:", error);
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
          <Button variant="primary" className="me-2" onClick={handleShowCreateModal}>
            Thêm Tài Khoản
          </Button>
          <Button variant="success" className="me-2" onClick={handleEdit}>
            Chỉnh Sửa Tài Khoản
          </Button>
          <Button variant="danger" className="me-2" onClick={handleDelete}>
            Xóa Tài Khoản
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

      {/* Create Modal */}
      <Modal show={showCreateModal} onHide={handleCloseCreateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Tarot Reader</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Avatar</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setNewReader({ ...newReader, image: e.target.files[0] })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Họ</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={newReader.lastName}
                onChange={(e) => setNewReader({ ...newReader, lastName: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tên</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={newReader.firstName}
                onChange={(e) => setNewReader({ ...newReader, firstName: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ngày sinh</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={newReader.dateOfBirth}
                onChange={(e) => setNewReader({ ...newReader, dateOfBirth: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Giới tính</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={newReader.gender}
                onChange={(e) => setNewReader({ ...newReader, gender: e.target.value })}
              >
                <option value={true}>Nữ</option>
                <option value={false}>Nam</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Số Điện Thoại</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={newReader.phoneNumber}
                onChange={(e) => setNewReader({ ...newReader, phoneNumber: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={newReader.email}
                onChange={(e) => setNewReader({ ...newReader, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={newReader.password}
                onChange={(e) => setNewReader({ ...newReader, password: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={newReader.address}
                onChange={(e) => setNewReader({ ...newReader, address: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Giới thiệu</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="introduction"
                value={newReader.introduction}
                onChange={(e) => setNewReader({ ...newReader, introduction: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mô tả</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={newReader.description}
                onChange={(e) => setNewReader({ ...newReader, description: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Kinh nghiệm</Form.Label>
              <Form.Control
                type="text"
                name="experience"
                value={newReader.experience}
                onChange={(e) => setNewReader({ ...newReader, experience: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Lĩnh vực</Form.Label>
              <Form.Control
                type="text"
                name="kind"
                value={newReader.kind}
                onChange={(e) => setNewReader({ ...newReader, kind: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Trạng thái</Form.Label>
              <Form.Control
                as="select"
                name="isActive"
                value={newReader.isActive}
                onChange={(e) => setNewReader({ ...newReader, isActive: e.target.value })}
              >
                <option value={true}>Active</option>
                <option value={false}>Inactive</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={newReader.status}
                onChange={(e) => setNewReader({ ...newReader, status: e.target.value })}
              >
                <option value={true}>Available</option>
                <option value={false}>Pending</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCreateModal}>
            Thoát
          </Button>
          <Button variant="primary" onClick={createTarotReader}>
            Tạo Mới Tarot Reader
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Update Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Tarot Reader</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Avatar</Form.Label>
              <Form.Control
                type="file"
                onChange={handleFileChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Giới Thiệu</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="introduction"
                value={editData.introduction}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mô Tả</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={editData.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Kinh Nghiệm</Form.Label>
              <Form.Control
                type="text"
                name="experience"
                value={editData.experience}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Lĩnh Vực</Form.Label>
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
                <option value={true}>Available</option>
                <option value={false}>Pending</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Thoát
          </Button>
          <Button variant="primary" onClick={handleUpdateReader}>
            Lưu Thông Tin
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
