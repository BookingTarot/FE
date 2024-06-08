import React from "react";
import './style.css';

export default function Sidebar({ onSelect }) {
    const sidebarHeight = 'calc(100vh - 120px)';

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="d-flex flex-column justify-content-between bg-dark" style={{minHeight: sidebarHeight}}>
                    <div style={{marginTop: '15px'}}>
                        <a className="text-decoration-none d-flex align-items-center text-white d-none d-sm-inline">
                            <i className="lni lni-user"></i>
                            <span className="fs-2">Admin Dashboard</span>
                        </a>

                        <hr className="text-white d-none d-sm-block"></hr>

                        <ul class="nav nav-pills flex-column mt-2 mt-sm-0">
                            <li class="nav-item text-white my-1 py-2 py-sm-0">
                                <a href="#" class="nav-link active text-center text-sm-start" aria-current="page" onClick={() => onSelect('customer')} style={{marginTop: '20px'}}>
                                    <i className="bi bi-people fs-3"></i>
                                    <span className="ms-2 fs-3 d-none d-sm-inline">Khách Hàng</span>
                                </a>
                            </li>

                            <li class="nav-item text-white my-1 py-2 py-sm-0">
                                <a href="#" class="nav-link active text-center text-sm-start" aria-current="page" onClick={() => onSelect('tarotReader')} style={{marginTop: '15px'}}>
                                    <i className="bi bi-people fs-3"></i>
                                    <span className="ms-2 fs-3 d-none d-sm-inline">Tarot Reader</span>
                                </a>
                            </li>

                            <li class="nav-item text-white my-1 py-2 py-sm-0">
                                <a href="#" class="nav-link active text-center text-sm-start" aria-current="page" onClick={() => onSelect('activity')} style={{marginTop: '15px'}}>
                                    <i className="bi bi-list-ul fs-3"></i>
                                    <span className="ms-2 fs-3 d-none d-sm-inline " style={{ width: '24px', height: '24px' }}>Hoạt Động</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="dropdown open" style={{marginBottom: '20px'}}>
                        <a
                            class="btn btn-secondary dropdown-toggle text-white"
                            type="button"
                            id="triggerId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <i className="bi bi-person fs-4"></i>
                            <span className="fs-2 ms-3">Admin</span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="triggerId">
                            <a class="dropdown-item" href="#">Profile</a>
                            <a class="dropdown-item" href="#">Settings</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
