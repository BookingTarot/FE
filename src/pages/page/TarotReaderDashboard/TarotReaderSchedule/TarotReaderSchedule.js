import React, { useState, useEffect } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./TarotReaderSchedule.css";

const hours = Array.from({ length: 48 }, (_, i) => {
  const hour = Math.floor(i / 2).toString().padStart(2, '0');
  const minute = (i % 2 === 0) ? '00' : '30';
  return `${hour}:${minute}`;
});

function TarotReaderSchedule() {
    const [tarotReader, setTarotReader] = useState(null);
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);    
    const [eventDate, setEventDate] = useState(new Date());
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const id = 2;

    useEffect(() => {
        const fetchTarotReaders = async () => {
            try {
                const response = await axios.get(
                    `https://localhost:7218/api/TarotReader`
                );
                const reader = response.data.find(
                    (reader) => reader.tarotReaderId === parseInt(id)
                );
                setTarotReader(reader);
                if (reader && reader.schedules) {
                    const formattedEvents = reader.schedules.map(scheduleItem => ({
                        title: "Lịch làm",
                        start: scheduleItem.date.slice(0, 10) + "T" + scheduleItem.startTime.slice(11),
                        end: scheduleItem.date.slice(0, 10) + "T" + scheduleItem.endTime.slice(11)
                    }));
                    setEvents(formattedEvents);
                }
            } catch (error) {
                console.error("Error fetching tarot reader data", error);
            }
        };
        fetchTarotReaders();
    }, [id]);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleSave = async () => {
        console.log(tarotReader.tarotReaderId, eventDate.toISOString().slice(0, 10), startTime, endTime)
        try {
            await axios.post("https://localhost:7218/api/Schedule", {
                tarotReaderId: tarotReader.tarotReaderId,
                date: eventDate.toISOString().slice(0, 10),
                startTime,
                endTime,
                status: true
            });
            const newEvent = {            
                start: new Date(eventDate.setHours(parseInt(startTime.split(":")[0]), parseInt(startTime.split(":")[1]))),
                end: new Date(eventDate.setHours(parseInt(endTime.split(":")[0]), parseInt(endTime.split(":")[1])))
            };
            setEvents([...events, newEvent]);
            handleClose();
        } catch (error) {
            console.error("Error saving schedule", error);
        }
    };

    const viLocale = {
        locale: 'vi',
        buttonText: {
            today: 'Hôm nay',
            month: 'Tháng',
            week: 'Tuần',
            day: 'Ngày',
            list: 'Danh sách'
        },
        allDayText: 'Cả ngày',
        slotDuration: '00:30:00',
        slotLabelFormat: {
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: false,
            meridiem: 'short'
        },
        dayPopoverFormat: { weekday: 'long', month: 'long', day: 'numeric' }
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
                        <Button className="btn-custom" onClick={handleShow}>
                            Đăng ký lịch
                        </Button>
                        <FullCalendar 
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            initialView="dayGridMonth"
                            headerToolbar={{
                                start: 'today',
                                center: 'title',
                                end: 'dayGridMonth,timeGridWeek prev,next'
                            }}
                            events={events}
                            allDaySlot={false}
                            {...viLocale} 
                        />
                    </div>
                </div>
            </div>

            {/* Popup Modal */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Đăng ký lịch làm</Modal.Title>
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
                            <Form.Label>
                                Thời gian bắt đầu
                            </Form.Label>
                            <Form.Control 
                                as="select"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                            >
                                <option value="">Chọn thời gian bắt đầu</option>
                                {hours.map((hour, index) => (
                                    <option key={index} value={hour}>{hour}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formEndTime">
                            <Form.Label>
                                Thời gian kết thúc
                            </Form.Label>
                            <Form.Control 
                                as="select"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                            >
                                <option value="">Chọn thời gian kết thúc</option>
                                {hours
                                .filter((hour) => hour > startTime)
                                .map((hour, index) => (
                                    <option key={index} value={hour}>{hour}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Đăng ký
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default TarotReaderSchedule;
