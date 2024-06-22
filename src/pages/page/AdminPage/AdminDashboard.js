import React, { useState } from 'react';
import AdminHeader from '../../../components/Header/AdminHeader';
import Sidebar from './scenes/Sidebar';
import Customer from './Customer/Customer';
import TarotReader from './TarotReader/TarotReader';
import Activity from './Activity/Activity';
import ReaderSchedule from './Schedule/ReaderSchedule';
import CustomerSchedule from './Schedule/CustomerSchedule';
import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminDashboard() {
    const [selectedSection, setSelectedSection] = useState('customer');

    const renderContent = () => {
        switch (selectedSection) {
            case 'customer':
                return <Customer />;
            case 'tarotReader':
                return <TarotReader />;
            case 'activity':
                return <Activity />;
            case 'customerCalendar':
                return <CustomerSchedule />;
            case 'readerCalendar':
                return <ReaderSchedule />;
            default:
                return <Customer />;
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
                        <div className="col-lg-10 col-md-8">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AdminDashboard;
