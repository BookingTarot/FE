import "./TarotReaderSessionType.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function TarotReaderSessionType({ user }) {
  const [sessions, setSessions] = useState([]);
  const [editingSession, setEditingSession] = useState(null);
  const [newPrice, setNewPrice] = useState("");
  const id = user.tarotReader.tarotReaderId;

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axios.get(`https://tarot.somee.com/api/TarotReader/${id}`);
        const filteredSessions = response.data.sessionTypes;
        setSessions(filteredSessions);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách buổi đọc", error);
      }
    };

    fetchSessions();
  }, [id]);

  const handleEditClick = (session) => {
    setEditingSession(session);
    setNewPrice(session.price);
  };

  const handleSaveClick = async () => {
    const updatedSession = {
      sessionTypeId: editingSession.sessionTypeId,
      name: editingSession.name,
      duration: editingSession.duration,
      description: editingSession.description,
      price: parseInt(newPrice, 10),
      status: true,
    };

    try {
      await axios.put(`https://tarot.somee.com/api/SessionTypes/`, updatedSession);
      setSessions((prevSessions) =>
        prevSessions.map((session) =>
          session.sessionTypeId === editingSession.sessionTypeId ? updatedSession : session
        )
      );
      setEditingSession(null);
    } catch (error) {
      if (error.response) {
        // Server trả về lỗi
        console.error("Server error:", error.response.data);
      } else if (error.request) {
        // Đã gửi yêu cầu nhưng không nhận được phản hồi
        console.error("No response received:", error.request);
      } else {
        // Có lỗi trong quá trình thiết lập yêu cầu
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  const handleCancelClick = () => {
    setEditingSession(null);
  };

  return (
    <div>
      <h1 className="title">Buổi đọc bài</h1>
      <div className="table-responsive bg-white shadow rounded">
        <table className="table mb-0 table-center">
          <thead>
            <tr>
              <th className="border-bottom p-3">Tên</th>
              <th className="border-bottom p-3">Thời lượng (phút)</th>
              <th className="border-bottom p-3">Mô tả</th>
              <th className="border-bottom p-3">Giá (VND)</th>
              <th className="border-bottom p-3">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session.sessionTypeId}>
                <td className="p-3">{session.name}</td>
                <td className="p-3">{session.duration}</td>
                <td className="p-3">{session.description}</td>
                <td className="p-3">
                  {editingSession && editingSession.sessionTypeId === session.sessionTypeId ? (
                    <input
                      type="number"
                      value={newPrice}
                      onChange={(e) => setNewPrice(e.target.value)}
                    />
                  ) : (
                    session.price
                  )}
                </td>
                <td className="p-3">
                  {editingSession && editingSession.sessionTypeId === session.sessionTypeId ? (
                    <>
                      <button className="btn btn-success" onClick={handleSaveClick}>Lưu</button>
                      <button className="btn btn-danger" onClick={handleCancelClick}>Hủy</button>
                    </>
                  ) : (
                    <button className="btn btn-primary" onClick={() => handleEditClick(session)}>Sửa</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TarotReaderSessionType;
