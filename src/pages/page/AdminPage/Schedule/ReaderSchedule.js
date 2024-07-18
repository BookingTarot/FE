import React, { useState, useEffect } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Button } from "react-bootstrap";
import './Schedule.css';

const ReaderSchedule = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`https://tarott.azurewebsites.net/api/Bookings`);
      const bookings = response.data;
      const formattedEvents = bookings.map((booking) => ({
        id: booking.bookingId,
        title: `${booking.sessionTypeName}`,
        start: `${booking.date.slice(0, 10)}T${booking.startTime.slice(11)}`,
        end: `${booking.date.slice(0, 10)}T${booking.endTime.slice(11)}`,
        tarotReaderName: booking.tarotReaderName,
        sessionTypeName: booking.sessionTypeName,
        startTime: booking.startTime,
        endTime: booking.endTime
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.error("Error fetching bookings data", error);
    }
  };

  const formatTime = (timeString) => {
    if (!timeString) return "";
    const time = new Date(timeString);
    const hours = time.getHours();
    const minutes = time.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  };

  const handleEventClick = (info) => {
    const event = info.event;
    setSelectedEvent({
      startTime: event.start,
      endTime: event.end,
      sessionTypeName: event.title, // Assuming title contains session type
      tarotReaderName: event.extendedProps?.tarotReaderName || '', // Or fetch from extendedProps if available
    });
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const viLocale = {
    locale: "vi",
    buttonText: {
      today: "Hôm nay",
      month: "Tháng",
      week: "Tuần",
      day: "Ngày",
      list: "Danh sách",
    },
    allDayText: "Cả ngày",
    slotDuration: "00:30:00",
    slotLabelFormat: {
      hour: "numeric",
      minute: "2-digit",
      omitZeroMinute: false,
      meridiem: "short",
    },
    dayPopoverFormat: { weekday: "long", month: "long", day: "numeric" },
  };

  return (
    <div>
      <div className="row">
        <h1 className="title">Lịch Làm Việc</h1>
      </div>
      <div className="row">
        <div className="col-12 mt-4">
          <div className="card rounded border-0 shadow p-4">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                start: "today",
                center: "title",
                end: "prev,next dayGridMonth,timeGridWeek,timeGridDay",
              }}
              events={events}
              allDaySlot={false}
              eventClick={handleEventClick}
              {...viLocale}
            />
          </div>
        </div>
      </div>

      {/* Modal for showing event details */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thông Tin Lịch Tarot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent && (
            <div>
              <p>
                <strong>Reader:</strong> {selectedEvent.tarotReaderName}
              </p>
              <p>
                <strong>{selectedEvent.sessionTypeName}</strong>
              </p>
              <p>
                <strong>Bắt Đầu:</strong> {(" ")}
                {formatTime(selectedEvent.startTime)}
              </p>
              <p>
                <strong>Kết Thúc:</strong> {(" ")}
                {formatTime(selectedEvent.endTime)}
              </p>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ReaderSchedule;
