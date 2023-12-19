import "./App.css";
import Home from "./pages/Home";
import Portal from "./pages/Portal";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
