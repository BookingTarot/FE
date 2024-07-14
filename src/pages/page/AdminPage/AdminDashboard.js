import React, { useState } from "react";
import AdminHeader from "../../../components/Header/AdminHeader";
import Sidebar from "./scenes/Sidebar";
import Customer from "./Customer/Customer";
import TarotReader from "./TarotReader/TarotReader";
import Activity from "./Activity/Activity";
import CustomerSchedule from "./Schedule/CustomerSchedule";
import ReaderSchedule from "./Schedule/ReaderSchedule";
import User from "./User/User";
import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Statistic from "./Statistic/Statistic";

function AdminDashboard() {
  const [selectedSection, setSelectedSection] = useState("customer");

  const renderContent = () => {
    switch (selectedSection) {
      case "user":
        return <User />;
      case "customer":
        return <Customer />;
      case "customerSchedule":
        return <CustomerSchedule />;
      case "tarotReader":
        return <TarotReader />;
      case "tarotReaderSchedule":
        return <ReaderSchedule />;
      case "activity":
        return <Activity />;
      case "statistic":
        return <Statistic />;
      default:
        return <User />;
    }
  };

  return (
    <div className="admin-container">
      {/* Header */}
      <AdminHeader />

      <section className="bg-dashboard">
        <div className="container-fluid">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-2 col-md-4">
              <Sidebar onSelect={setSelectedSection} />
            </div>

            {/* Content */}
            <div className="col-lg-10 col-md-8">{renderContent()}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
