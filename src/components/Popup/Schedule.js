import React, { useState, useEffect } from "react";
import Btn from "../Button/Btn";

export default function Schedule({ onClose, sessionType}) {
  const [scheduleData, setScheduleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchScheduleData();
  }, [sessionType.tarotReaderId]);

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
      <div className="modal-dialog">
        <div
          className="modal-content"
          style={{
            borderRadius: "30px",
            boxShadow: "rgb(0, 0, 0) 0px 3px 0px 0px",
          }}
        >
          <div className="modal-header border-bottom-0">
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
              {loading && <p>Loading...</p>}
              {error && <p>Error: {error}</p>}
              {!loading && !error && (
                <ul>
                  {scheduleData.map((schedule) => (
                    <li key={schedule.scheduleId}>
                      <div>Date: {schedule.date}</div>
                      <div>Start Time: {schedule.startTime}</div>
                      <div>End Time: {schedule.endTime}</div>
                    </li>
                  ))}
                </ul>
              )}
              <Btn onClick={onClose}>Close</Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
