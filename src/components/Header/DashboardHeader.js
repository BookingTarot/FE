import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { useAuth } from "../Login/Authen";
import UpdateInfo from "../Popup/UpdateInfo";
import HomeLogout from "../Button/HomeLogout";

function DashboardHeader() {  
  const { user } = useAuth();
  const id = user.tarotReader.tarotReaderId;
  const profileImage = user.gender ? "assets/images/profile1.png" : "assets/images/profile2.png";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="float-start w-100">
      <div className="container-fluid">
        <Navbar expand="lg" className="navbar-light">
          <Link className="navbar-brand logo" to="/">
            <img alt="logo" src="assets/images/logo.png" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="d-none d-lg-block">
                <div className="right-menui">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <div className="cusotme-ph d-flex align-items-center">
                        <span className="me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-telephone"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                          </svg>
                        </span>
                        <span>
                          Dịch vụ hỗ trợ
                          <b className="d-block">032 8026 926</b>
                        </span>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Dropdown>
                        <Dropdown.Toggle
                          as="button"
                          className="btn btn-pills btn-soft-primary p-0"
                        >
                          <img
                            src={profileImage}
                            className="avatar"
                            alt="profile"
                          />
                        </Dropdown.Toggle>
                        <Dropdown.Menu align="end" className="shadow border-0 mt-3 py-3" style={{ minWidth: '200px' }}>
                          <Dropdown.Item className="d-flex align-items-center text-dark">
                            <img
                              src={profileImage}
                              className="avatar avatar-md-sm rounded-circle border shadow"
                              alt="profile"
                            />
                            <div className="flex-1 ms-2">
                              <span className="d-block mb-1">{user.lastName}</span>
                              <small className="text-muted">Tarot Reader</small>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item onClick={toggleModal} className="text-dark">Thông tin tài khoản</Dropdown.Item>
                          <HomeLogout />
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  </ul>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <UpdateInfo
        isOpen={isModalOpen}
        toggle={toggleModal}
        updateInfo={(updatedData) => {
          console.log("Updated Info:", updatedData);
        }}
        userId={user.userId}
        TarotReaderId={id}
      />
    </header>
  );
}

export default DashboardHeader;
