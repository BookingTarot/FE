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
import BlogDetail1 from "./pages/page/Blog/BLogDetail1";
import BlogDetail2 from "./pages/page/Blog/BlogDetail2";
import BlogDetail3 from "./pages/page/Blog/BlogDetail3";
import BlogDetail4 from "./pages/page/Blog/BlogDetail4";
import BlogDetail5 from "./pages/page/Blog/BlogDetail5";
import Transaction from "./pages/page/AdminPage/Transaction/Transaction";

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
              path="/tarotReaderDetail/:id"
              element={<TarotReaderDetail />}
            />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/blogDetail" element={<BlogDetail />} />
            <Route exact path="/blogDetail1" element={<BlogDetail1 />} />
            <Route exact path="/blogDetail2" element={<BlogDetail2 />} />
            <Route exact path="/blogDetail3" element={<BlogDetail3 />} />
            <Route exact path="/blogDetail4" element={<BlogDetail4 />} />
            <Route exact path="/blogDetail5" element={<BlogDetail5 />} />
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
            <Route exac path="/transaction" element={<Transaction />} />
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
