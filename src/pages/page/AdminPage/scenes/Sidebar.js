import React from "react";
import "./style.css";
import LogoutButton from "../../../../components/Button/LogoutButton";

export default function Sidebar({ onSelect }) {
  const sidebarHeight = "calc(100vh - 120px)";

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="d-flex flex-column justify-content-between bg-dark"
          style={{ minHeight: sidebarHeight }}
        >
          <div style={{ marginTop: "15px" }}>
            <a className="text-decoration-none d-flex align-items-center text-white d-none d-sm-inline">
              {/* <i className="lni lni-user"></i> */}
              <span className="fs-2">Admin Dashboard</span>
            </a>

            <hr className="text-white d-none d-sm-block"></hr>

            <ul className="nav nav-pills flex-column mt-2 mt-sm-0">
              {/* <li className="nav-item text-white my-1 py-2 py-sm-0">
                <a
                  href="#"
                  className="nav-link active text-center text-sm-start"
                  aria-current="page"
                  onClick={() => onSelect("user")}
                  style={{ marginTop: "20px" }}
                >
                  {/* <i className="bi bi-people fs-3"></i> */}
              {/* <span className="ms-2 fs-3 d-none d-sm-inline">
                    Quản Lý Tài Khoản
                  </span>
                </a> */}

              <li className="nav-item text-white my-1 py-2 py-sm-0">
                <a
                  href="#"
                  className="nav-link active text-center text-sm-start"
                  aria-current="page"
                  onClick={() => onSelect("customer")}
                  style={{ marginTop: "15px" }}
                >
                  {/* <i className="bi bi-people fs-3"></i> */}
                  <span className="ms-2 fs-3 d-none d-sm-inline">
                    Khách Hàng
                  </span>
                </a>
              </li>

              <li className="nav-item text-white my-1 py-2 py-sm-0">
                <a
                  href="#"
                  className="nav-link active text-center text-sm-start"
                  aria-current="page"
                  onClick={() => onSelect("customerSchedule")}
                  style={{ marginTop: "15px" }}
                >
                  {/* <i className="bi bi-calendar2-range fs-3"></i> */}
                  <span className="ms-2 fs-3 d-none d-sm-inline">
                    Lịch Khách Hàng
                  </span>
                </a>
              </li>

              <li className="nav-item text-white my-1 py-2 py-sm-0">
                <a
                  href="#"
                  className="nav-link active text-center text-sm-start"
                  aria-current="page"
                  onClick={() => onSelect("tarotReader")}
                  style={{ marginTop: "15px" }}
                >
                  {/* <i className="bi bi-people fs-3"></i> */}
                  <span className="ms-2 fs-3 d-none d-sm-inline">
                    Tarot Reader
                  </span>
                </a>
              </li>

              <li className="nav-item text-white my-1 py-2 py-sm-0">
                <a
                  href="#"
                  className="nav-link active text-center text-sm-start"
                  aria-current="page"
                  onClick={() => onSelect("tarotReaderSchedule")}
                  style={{ marginTop: "15px" }}
                >
                  {/* <i className="bi bi-calendar2-range fs-3"></i> */}
                  <span className="ms-2 fs-3 d-none d-sm-inline">
                    Lịch Tarot Reader
                  </span>
                </a>
              </li>

              <li className="nav-item text-white my-1 py-2 py-sm-0">
                <a
                  href="#"
                  className="nav-link active text-center text-sm-start"
                  aria-current="page"
                  onClick={() => onSelect("activity")}
                  style={{ marginTop: "15px" }}
                >
                  {/* <i className="bi bi-list-ul fs-3"></i> */}
                  <span
                    className="ms-2 fs-3 d-none d-sm-inline "
                    style={{ width: "24px", height: "24px" }}
                  >
                    Hoạt Động
                  </span>
                </a>
              </li>

              <li className="nav-item text-white my-1 py-2 py-sm-0">
                <a
                  href="#"
                  className="nav-link active text-center text-sm-start"
                  aria-current="page"
                  onClick={() => onSelect("statistic")}
                  style={{ marginTop: "15px" }}
                >
                  <span
                    className="ms-2 fs-3 d-none d-sm-inline "
                    style={{ width: "24px", height: "24px" }}
                  >
                    Thống Kê
                  </span>
                </a>
              </li>

              <li className="nav-item text-white my-1 py-2 py-sm-0">
                <a
                  href="#"
                  className="nav-link active text-center text-sm-start"
                  aria-current="page"
                  onClick={() => onSelect("transaction")}
                  style={{ marginTop: "15px" }}
                >
                  <span
                    className="ms-2 fs-3 d-none d-sm-inline "
                    style={{ width: "24px", height: "24px" }}
                  >
                    Giao dịch
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-3" style={{ marginBottom: "20px" }}>
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}
