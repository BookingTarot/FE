import logo from "./logo.svg";
import "./App.css";
import AstrologyHome from "./pages/page/HomePage/AstrologyHome";
import About from "./pages/page/About/About";
import TarotReader from "./pages/page/TarotReader/TarotReader";
import TarotReaderDetail from "./pages/page/TarotReader/TarotReaderDetail";
import Blog from "./pages/page/Blog/Blog";
import BlogDetail from "./pages/page/Blog/BlogDetail";
import Numerology from "./pages/page/Numerology/Numerology";
import NumerologyDetail from "./pages/page/Numerology/NumerologyDetail";
import TarotCard from "./pages/page/TarotCard/TarotCard";
import TarotCardDetail from "./pages/page/TarotCard/TarotCardDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" id="wrapper">
      <Router>
        <Routes>
          <Route exact path="/" element={<AstrologyHome />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/tarotReader" element={<TarotReader />} />
          <Route
            exact
            path="/tarotReaderDetail"
            element={<TarotReaderDetail />}
          />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blogDetail" element={<BlogDetail />} />
          <Route exact path="/numerology" element={<Numerology />} />
          <Route
            exact
            path="/numerologyDetail"
            element={<NumerologyDetail />}
          />
          <Route exact path="/tarotCard" element={<TarotCard />} />
          <Route exact path="/tarotCardDetail" element={<TarotCardDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
