import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { useAuth } from "./Authen";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://tarot.somee.com/api/User/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, remember }),
    });

    if (response.ok) {
      const data = await response.json();
      setUser(data);
      console.log(data, data.token);

      if (remember) {
        localStorage.setItem("user", JSON.stringify(data));
      } else {
        localStorage.removeItem("user"); // Xoá thông tin nếu người dùng không chọn Remember me
      }

      console.log("check tarot: ", data.roleId);

      switch (data.roleId) {
        case 1:
          toast.success("Đăng nhập thành công!");
          setTimeout(() => navigate("/tarotAdmin"), 1000);
          break;
        case 2:
          toast.success("Đăng nhập thành công!");
          setTimeout(() => navigate("/"), 1000);
          break;
        case 3:
          toast.success("Đăng nhập thành công!");
          setTimeout(() => navigate("/TarotReaderDashboard"), 1000);
          break;
        default:
          navigate("/login");
      }
    } else {
      toast.error("Đăng nhập không thành công!");
    }
  };

  return (
    <div>
      <div className="back-to-home rounded d-none d-sm-block">
        <Link to="/" className="btn btn-icon btn-primary">
          <i data-feather="home" className="icons"></i>
        </Link>
      </div>
      <ToastContainer />
      <div className="full-height center-content">
        <div className="cardLogin">
          <h2 className="fw-bold mb-2 text-center">Đăng nhập</h2>
          <p className="text-white-50 mb-3 text-center">
            Hãy nhập email và mật khẩu của bạn!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input-group-sign mb-4">
              <label htmlFor="email">Địa chỉ Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group-sign mb-4">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="checkbox-group">
              <div>
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <label htmlFor="rememberMe">Ghi nhớ</label>
              </div>
              {/* <Link to="/forgot-password">Forgot password?</Link> */}
            </div>
            <button type="submit" className="mb-4 w-100">
              Đăng nhập
            </button>
          </form>
          <div className="sign-up-link">
            <p>
              Bạn chưa có tài khoản? <Link to="/signup">Đăng ký</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
