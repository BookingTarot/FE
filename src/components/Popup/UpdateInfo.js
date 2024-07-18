import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { toast } from "react-toastify";
import axios from "axios";

function UpdateInfo({ isOpen, toggle, updateInfo, userId, TarotReaderId }) {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    dateOfBirth: "",
    phoneNumber: "",
    gender: "", // Gender will be "0" or "1"
    email: "",
    password: "",
    address: "",
    introduction: "",
    description: "",
    kind: "",
    experience: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRes = await axios.get(
          `https://tarot.somee.com/api/user/${userId}`
        );
        const tarotReaderRes = await axios.get(
          `https://tarot.somee.com/api/TarotReader/${TarotReaderId}`
        );

        const genderValue = userRes.data.gender ? "1" : "0";

        setFormData({
          lastName: userRes.data.lastName,
          firstName: userRes.data.firstName,
          dateOfBirth: userRes.data.dateOfBirth.split("T")[0],
          phoneNumber: userRes.data.phoneNumber,
          gender: genderValue,
          email: userRes.data.email,
          password: userRes.data.password,
          address: userRes.data.address,
          introduction: tarotReaderRes.data.introduction,
          description: tarotReaderRes.data.description,
          kind: tarotReaderRes.data.kind,
          experience: tarotReaderRes.data.experience,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (isOpen) {
      fetchUserData();
    }
  }, [isOpen, userId, TarotReaderId]);

  const handleOnChangeInput = (event, id) => {
    setFormData({
      ...formData,
      [id]: event.target.value,
    });
  };

  const handleUpdateInfo = async () => {
    try {
      const userData = {
        userId: userId,
        lastName: formData.lastName,
        firstName: formData.firstName,
        dateOfBirth: formData.dateOfBirth,
        phoneNumber: formData.phoneNumber,
        gender: formData.gender === "1", // Convert "1" to true, "0" to false
        email: formData.email,
        password: formData.password,
        address: formData.address,
      };

      await axios.put(`https://tarot.somee.com/api/user/`, userData);

      const tarotReaderRes = await axios.get(
        `https://tarot.somee.com/api/TarotReader/${TarotReaderId}`
      );
      const currentTarotReaderData = tarotReaderRes.data;
      console.log(currentTarotReaderData);
      const updatedTarotReaderData = {
        tarotReaderId: TarotReaderId,
        userId: currentTarotReaderData.userId,
        introduction: formData.introduction,
        description: formData.description,
        experience:
          currentTarotReaderData.experience !== null
            ? currentTarotReaderData.experience.toString()
            : "",
        kind:
          currentTarotReaderData.kind !== null
            ? currentTarotReaderData.kind.toString()
            : "",
        image:
          currentTarotReaderData.image !== null
            ? currentTarotReaderData.image.toString()
            : "",
        status: true,
      };
      try {
        const response = await axios.put(
          `https://tarot.somee.com/api/TarotReader/`,
          updatedTarotReaderData
        );
        console.log("Update successful:", response.data);
        toast.success("Cập nhập thành công!");
      } catch (error) {
        if (error.response) {
          // Server returned an error response
          console.error("Server error:", error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
        } else {
          // Something happened in setting up the request that triggered an error
          console.error("Error setting up the request:", error.message);
        }
      }

      updateInfo(formData);
      toggle();
    } catch (error) {
      console.error("Error updating info:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Cập Nhập Thông Tin</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="lastName">Tên</Label>
          <Input
            type="text"
            id="lastName"
            onChange={(event) => handleOnChangeInput(event, "lastName")}
            value={formData.lastName}
          />
        </FormGroup>
        <FormGroup>
          <Label for="firstName">Họ</Label>
          <Input
            type="text"
            id="firstName"
            onChange={(event) => handleOnChangeInput(event, "firstName")}
            value={formData.firstName}
          />
        </FormGroup>
        <FormGroup>
          <Label for="dateOfBirth">Ngày sinh</Label>
          <Input
            type="date"
            id="dateOfBirth"
            onChange={(event) => handleOnChangeInput(event, "dateOfBirth")}
            value={formData.dateOfBirth}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phoneNumber">Số điện thoại</Label>
          <Input
            type="text"
            id="phoneNumber"
            onChange={(event) => handleOnChangeInput(event, "phoneNumber")}
            value={formData.phoneNumber}
          />
        </FormGroup>
        <FormGroup>
          <Label for="gender">Giới tính</Label>
          <Input
            type="select"
            id="gender"
            onChange={(event) => handleOnChangeInput(event, "gender")}
            value={formData.gender}
          >
            <option value="0">Nam</option>
            <option value="1">Nữ</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            id="email"
            onChange={(event) => handleOnChangeInput(event, "email")}
            value={formData.email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Mật khẩu</Label>
          <Input
            type={passwordVisible ? "text" : "password"}
            id="password"
            onChange={(event) => handleOnChangeInput(event, "password")}
            value={formData.password}
          />
          <Button onClick={togglePasswordVisibility}>
            {passwordVisible ? "Ẩn" : "Hiển thị"} mật khẩu
          </Button>
        </FormGroup>
        <FormGroup>
          <Label for="address">Địa chỉ</Label>
          <Input
            type="text"
            id="address"
            onChange={(event) => handleOnChangeInput(event, "address")}
            value={formData.address}
          />
        </FormGroup>
        <FormGroup>
          <Label for="kind"> Thể Loại</Label>
          <Input
            type="text"
            id="kind"
            onChange={(event) => handleOnChangeInput(event, "kind")}
            value={formData.kind}
          />
        </FormGroup>
        <FormGroup>
          <Label for="experience">Kinh nghiệm</Label>
          <Input
            type="text"
            id="experience"
            onChange={(event) => handleOnChangeInput(event, "experience")}
            value={formData.experience}
          />
        </FormGroup>
        <FormGroup>
          <Label for="introduction">Giới thiệu</Label>
          <Input
            type="textarea"
            id="introduction"
            onChange={(event) => handleOnChangeInput(event, "introduction")}
            value={formData.introduction}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Mô tả</Label>
          <Input
            type="textarea"
            id="description"
            onChange={(event) => handleOnChangeInput(event, "description")}
            value={formData.description}
          />
        </FormGroup>      
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdateInfo}>
          Cập nhật
        </Button>
        <Button color="secondary" onClick={toggle}>
          Hủy
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default UpdateInfo;
