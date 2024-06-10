import React, { useEffect, useState } from "react";
import Btn from "../Button/Btn";
import Confirm from "../Popup/Confirm";

export default function Schedule({ onClose, sessionType, tarotReaderName }) {
  const [scheduleData, setScheduleData] = useState([]);
  const [filteredSchedule, setFilteredSchedule] = useState([]);
  const [error, setError] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        const response = await fetch(
          `https://localhost:7218/api/Schedules/tarot/${sessionType.tarotReaderId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setScheduleData(data);
        filterScheduleData(data, sessionType.duration);
      } catch (error) {
        setError(error.message);
      }
    };

    const filterScheduleData = (data, duration) => {
      const filtered = data.filter(schedule => {
        const startTime = new Date(schedule.startTime);
        const endTime = new Date(schedule.endTime);
        const scheduleDuration = (endTime - startTime) / (1000 * 60); // Convert duration to minutes
        return scheduleDuration === duration;
      });
      setFilteredSchedule(filtered);
    };

    fetchScheduleData();
  }, [sessionType]);

  const handleTimeSelect = (schedule) => {
    setBookingDetails({
      tarotReaderName: tarotReaderName, // Ensure to pass tarotReaderName when opening the Schedule component
      sessionTypeName: sessionType.name,
      sessionDuration: sessionType.duration,
      date: schedule.date,
      startTime: schedule.startTime,
      endTime: schedule.endTime,
      price: sessionType.price
    });
    setShowConfirm(true);
  };

  console.log("tarot" , tarotReaderName);

  let lastDisplayedDate = null;

  return (
    <div
      className="modal show"
      id="timeSelection"
      tabIndex="-1"
      aria-labelledby="timeSelectionLabel"
      aria-hidden="true"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="modal-dialog" style={{ maxWidth: "600px", width: "90%", maxHeight: "80%" }}>
        <div
          className="modal-content"
          style={{
            borderRadius: "30px",
            boxShadow: "rgb(0, 0, 0) 0px 3px 0px 0px",
          }}
        >
          <div className="modal-header border-bottom-0" style={{backgroundColor: "transparent"}}>
            <button
              style={{ marginRight: "5px" }}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="modal-contact">
              <h2>Lựa chọn thời gian {sessionType.name}</h2>
              {error && <p>Error: {error}</p>}
              {!error && (
                <div>
                  {filteredSchedule.map((schedule) => {
                    const currentDate = new Date(schedule.date).toLocaleDateString();
                    const shouldDisplayDate = currentDate !== lastDisplayedDate;
                    lastDisplayedDate = currentDate;

                    return (
                      <div key={schedule.scheduleId} style={{ marginBottom: "10px" }}>
                        {shouldDisplayDate && (
                          <p>Date: {currentDate}</p>
                        )}
                        <Btn onClick={() => handleTimeSelect(schedule)}>
                          {new Date(schedule.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {" "}
                          {new Date(schedule.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </Btn>
                      </div>
                    );
                  })}
                </div>
              )}
              <Btn onClick={onClose}>Close</Btn>
            </div>
          </div>
        </div>
      </div>
      {showConfirm && (
        <Confirm
          onClose={() => setShowConfirm(false)}
          sessionType={sessionType}
          bookingDetails={bookingDetails}
        />
      )}
    </div>
  );
}
