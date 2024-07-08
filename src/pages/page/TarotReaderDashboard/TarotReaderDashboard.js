import React, { useState } from "react";
import DashboardHeader from "../../../components/Header/DashboardHeader";
import TarotReaderSchedule from "./TarotReaderSchedule/TarotReaderSchedule";
import TarotReaderAppointment from "./TarotReaderAppointment/TarotReaderAppointment";
import TarotReaderSessionType from "./TarotReaderSessionType/TarotReaderSessionType";
import "./TarotReaderDashboard.css";
import { useAuth } from "../../../components/Login/Authen";

function TarotReaderDashboard() {

    const { user } = useAuth();

    const [activeTab, setActiveTab] = useState("schedule");

    const handleTabClick = (tab) => {
        setActiveTab(tab);        
      };

    return (  
        <div className="dashboard-container">
            <DashboardHeader />            
            <section className="bg-dashboard">                            
                <div className="container-fluid">
                    <div className="row">

                        {/* SideBar */}
                        <div className="col-xl-3 col-lg-4 col-md-5 col-12">
                            <div className="col-xl-3 col-lg-4 col-md-5 col-12 sidebar-container ">                
                                <ul className="list-unstyled sidebar-nav mb-0">
                                    <li className="navbar-item">
                                        <button 
                                            className={`tab-btn ${activeTab === "schedule" ? "active" : ""}`}
                                            onClick={() => handleTabClick("schedule")}
                                        >
                                            <i className="ri-airplay-line align-middle navbar-icon"></i> Đặt lịch làm
                                        </button>
                                    </li>
                                    <li className="navbar-item">
                                        <button 
                                        className={`tab-btn ${activeTab === "appointment" ? "active" : ""}`}
                                        onClick={() => handleTabClick("appointment")}
                                    >
                                            <i className="ri-calendar-check-line align-middle navbar-icon"></i> Lịch hẹn
                                        </button>
                                    </li>
                                    <li className="navbar-item">
                                        <button 
                                        className={`tab-btn ${activeTab === "sessionType" ? "active" : ""}`}
                                        onClick={() => handleTabClick("sessionType")}
                                    >
                                            <i className="ri-calendar-check-line align-middle navbar-icon"></i> Buổi đọc
                                        </button>
                                    </li>                                    
                                </ul>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            {activeTab === "schedule" && (
                                <TarotReaderSchedule 
                                    user={ user }                               
                                />
                            )}
                            {activeTab === "appointment" && (
                                <TarotReaderAppointment      
                                    user={ user }                             
                                />
                            )}
                            {activeTab === "sessionType" && (
                                <TarotReaderSessionType      
                                    user={ user }                             
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TarotReaderDashboard;