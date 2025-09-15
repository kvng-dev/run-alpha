// Create a test file: TestApp.js
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SimpleHome = () => (
  <div style={{ padding: "100px 20px" }}>
    <h1>🏠 HOME</h1>
  </div>
);
const SimpleAbout = () => (
  <div style={{ padding: "100px 20px" }}>
    <h1>👥 ABOUT US</h1>
  </div>
);
const SimpleServices = () => (
  <div style={{ padding: "100px 20px" }}>
    <h1>⚙️ SERVICES</h1>
  </div>
);

function TestApp() {
  return (
    <div>
      {/* Super simple nav */}
      <nav
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <NavLink to="/" style={{ margin: "0 20px", color: "blue" }}>
          Home
        </NavLink>
        <NavLink to="/aboutus" style={{ margin: "0 20px", color: "blue" }}>
          About
        </NavLink>
        <NavLink to="/services" style={{ margin: "0 20px", color: "blue" }}>
          Services
        </NavLink>
      </nav>

      <div style={{ marginTop: "80px" }}>
        <Routes>
          <Route index element={<SimpleHome />} />
          <Route path="aboutus" element={<SimpleAbout />} />
          <Route path="services" element={<SimpleServices />} />
        </Routes>
      </div>
    </div>
  );
}

export default TestApp;
