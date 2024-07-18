import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./TarotReaderSchedule.css";
import { toast } from "react-toastify";

const hours = Array.from({ length: 48 }, (_, i) => {
  const hour = Math.floor(i / 2)
    .toString()
    .padStart(2, "0");
  const minute = i % 2 === 0 ? "00" : "30";
  return `${hour}:${minute}`;
});

function TarotReaderSchedule({ user }) {
  const [tarotReader, setTarotReader] = useState(null);
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [eventDate, setEventDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const id = user.tarotReader.tarotReaderId;

  const fetchTarotReaders = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://tarott.azurewebsites.net/api/TarotReader`
      );
      const reader = response.data.find(
        (reader) => reader.tarotReaderId === parseInt(id)
      );
      setTarotReader(reader);
      if (reader && reader.schedules) {
        const formattedEvents = reader.schedules.map((scheduleItem) => ({
          id: scheduleItem.scheduleId,
          title: "Lịch làm",
          start:
            scheduleItem.date.slice(0, 10) +
            "T" +
            scheduleItem.startTime.slice(11),
          end:
            scheduleItem.date.slice(0, 10) +
            "T" +
            scheduleItem.endTime.slice(11),
        }));
        setEvents(formattedEvents);
      }
    } catch (error) {
      console.error("Error fetching tarot reader data", error);
    }
  }, [id]);

  useEffect(() => {
    fetchTarotReaders();
  }, [fetchTarotReaders, user]);

  const handleShow = () => {
    setIsUpdate(false);
    setSelectedEventId(null);
    setEventDate(new Date());
    setStartTime("");
    setEndTime("");
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const handleEventClick = (info) => {
    console.log("Event clicked:", info.event); // Debugging log
    const eventId = info.event.id; // Lấy id của sự kiện
    const startDate = info.event.start;
    const endDate = info.event.end;

    if (eventId && startDate && endDate) {
      setIsUpdate(true);
      setSelectedEventId(eventId);
      setEventDate(startDate);
      setStartTime(formatTime(startDate)); // Lấy giờ bắt đầu từ startDate
      setEndTime(formatTime(endDate)); // Lấy giờ kết thúc từ endDate
      setShowModal(true);
    } else {
      console.error("Event data is invalid:", info.event);
    }
  };

  const handleSave = async () => {
    const dateStr = eventDate.toLocaleDateString("en-CA", {
      timeZone: "Asia/Ho_Chi_Minh",
    });
    const startDateTime = `${dateStr}T${startTime}:00`;
    const endDateTime = `${dateStr}T${endTime}:00`;
    console.log(eventDate, dateStr, startDateTime, endDateTime);
    try {
      if (isUpdate) {
        console.log(selectedEventId, dateStr, startDateTime, startDateTime);
        await axios.put(`https://tarott.azurewebsites.net/api/Schedules/`, {
          scheduleId: selectedEventId,
          tarotReaderId: tarotReader.tarotReaderId,
          date: dateStr,
          startTime: startDateTime,
          endTime: endDateTime,
          status: true,
        });
      } else {
        await axios.post("https://tarott.azurewebsites.net/api/Schedules", {
          tarotReaderId: tarotReader.tarotReaderId,
          date: dateStr,
          startTime: startDateTime,
          endTime: endDateTime,
          status: true,
        });
      }
      toast.success("Đăng thành công!");
      await fetchTarotReaders();
      handleClose();
    } catch (error) {
      console.error("Error saving schedule", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://tarott.azurewebsites.net/api/Schedules/${selectedEventId}`
      );
      await fetchTarotReaders();
      handleClose();
    } catch (error) {
      console.error("Error deleting schedule", error);
    }
  };

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

  if (!tarotReader) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="row">
        <h1 className="title">Đăng kí lịch làm việc</h1>
      </div>
      <div className="row">
        <div className="col-12 mt-4">
          <div className="card rounded border-0 shadow p-4">
            <button className="btn-custom" onClick={handleShow}>
              Đăng ký lịch
            </button>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                start: "today",
                center: "title",
                end: "dayGridMonth,timeGridWeek prev,next",
              }}
              events={events}
              allDaySlot={false}
              eventClick={handleEventClick}
              {...viLocale}
            />
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isUpdate ? "Cập nhật lịch làm" : "Đăng ký lịch làm"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEventDate">
              <Form.Label>Ngày</Form.Label>
              <DatePicker
                selected={eventDate}
                onChange={(date) => setEventDate(date)}
                dateFormat="dd/MM/yyyy"
                className="form-control"
              />
            </Form.Group>
            <Form.Group controlId="formStartTime">
              <Form.Label>Thời gian bắt đầu</Form.Label>
              <Form.Control
                as="select"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              >
                <option value="">Chọn thời gian bắt đầu</option>
                {hours.map((hour, index) => (
                  <option key={index} value={hour}>
                    {hour}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formEndTime">
              <Form.Label>Thời gian kết thúc</Form.Label>
              <Form.Control
                as="select"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              >
                <option value="">Chọn thời gian kết thúc</option>
                {hours
                  .filter((hour) => hour > startTime)
                  .map((hour, index) => (
                    <option key={index} value={hour}>
                      {hour}
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {isUpdate && (
            <Button variant="danger" onClick={handleDelete}>
              Xóa
            </Button>
          )}
          {!isUpdate && (
            <Button variant="secondary" onClick={handleClose}>
              Đóng
            </Button>
          )}
          <Button variant="primary" onClick={handleSave}>
            {isUpdate ? "Cập nhật" : "Đăng ký"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TarotReaderSchedule;
