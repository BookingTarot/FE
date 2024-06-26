import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AstrologyHome from "./pages/page/HomePage/AstrologyHome";
import About from "./pages/page/About/About";
import TarotReader from "./pages/page/TarotReader/TarotReader";
import TarotReaderDetail from "./pages/page/TarotReader/TarotReaderDetail";
import Blog from "./pages/page/Blog/Blog";
import BlogDetail from "./pages/page/Blog/BlogDetail";
import Zodiac from "./pages/page/Zodiac/zodiac";
import TarotCard from "./pages/page/TarotCard/TarotCard";
import TarotCardDetail from "./pages/page/TarotCard/TarotCardDetail";
import TarotReaderDashboard from "./pages/page/TarotReaderDashboard/TarotReaderDashboard";
import TarotAdminDashboard from "./pages/page/AdminPage/AdminDashboard";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import { AuthProvider } from "./components/Login/Authen";
import ProtectedRoute from "./components/Login/ProtectedRoute";
import CustEditInfor from "./pages/page/CustomerInfor/CustEditInfor";
import CustomerBooking from "./pages/page/CustomerInfor/CustomerBooking";

function App() {
  return (
    <div className="App" id="wrapper">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<AstrologyHome />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/tarotReader" element={<TarotReader />} />
            <Route
              exact
              path="/TarotReader/:id"
              element={<TarotReaderDetail />}
            />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/blogDetail" element={<BlogDetail />} />
            <Route exact path="/zodiac" element={<Zodiac />} />
            <Route exact path="/tarotCard" element={<TarotCard />} />
            <Route
              exact
              path="/tarotCardDetail"
              element={<TarotCardDetail />}
            />
            <Route
              path="/tarotReaderDashboard"
              element={
                <ProtectedRoute element={TarotReaderDashboard} role={3} />
              }
            />
            <Route
              path="/tarotAdmin"
              element={
                <ProtectedRoute element={TarotAdminDashboard} role={1} />
              }
            />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Register />} />
            <Route exact path="/customer-info" element={<CustEditInfor />} />
            <Route
              exact
              path="/customer-history"
              element={<CustomerBooking />}
            />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
