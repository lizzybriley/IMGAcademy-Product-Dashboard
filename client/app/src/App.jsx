import "./css/App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <p>This page exists to demonstrate routing capabilities.</p>
    </div>
  );
}

// Style function for active links
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? "#588157" : "#333",
  textDecoration: isActive ? "none" : "underline",
  fontWeight: isActive ? "bold" : "normal",
  padding: "5px 10px",
});

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <NavLink to="/" style={navLinkStyles}>
            Home
          </NavLink>
          <NavLink to="/dashboard" style={navLinkStyles}>
            Dashboard
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
