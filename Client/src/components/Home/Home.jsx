import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiUser, FiX } from "react-icons/fi";
import { FaGlobe, FaHospital, FaGraduationCap, FaFileAlt, FaBalanceScale } from "react-icons/fa";

import "./Home.css";

const options = [
  
  { name: "Medical", icon: <FaHospital />, route: "/medical" },
  { name: "Education", icon: <FaGraduationCap />, route: "/education" },
  { name: "Documents", icon: <FaFileAlt />, route: "/documents" },
  { name: "Legal Help", icon: <FaBalanceScale />, route: "/services" },
];


const testMenuItems = [
  "Dashboard",
  "Notifications",
  "Settings",
  "Help",
];

const Home = ({ userData }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Navbar */}
      <div className="navbar">
        <button className="icon-button" onClick={() => setShowMenu(!showMenu)}>
          <FiMenu size={24} />
        </button>
        <button className="icon-button" onClick={() => navigate("/profile")}> 
          <FiUser size={24} />
        </button>
      </div>

      {/* Overlay */}
      {showMenu && <div className="overlay" onClick={() => setShowMenu(false)}></div>}

      {/* Sliding Sidebar Menu */}
      <div className={`sidebar-menu ${showMenu ? "open" : ""}`}>
        <div className="menu-header">
          <span>Menu</span>
          <button className="close-button" onClick={() => setShowMenu(false)}>
            <FiX size={20} />
          </button>
        </div>
        <ul>
          {testMenuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
        <div className="hero-image">
            <div className="hero-text">
                <h1>Welcome to ArchAngel</h1>
                <p>Connecting migrants to essential services with care and efficiency.</p>
            </div>
            <div className="hero-animation">
                <iframe src="https://lottie.host/embed/a1bdbb34-56b3-4ba0-bd9f-1f56382e7306/fci9LzDCGH.lottie"></iframe>
            </div>
        </div>


      {/* Services Grid */}
      <div className="grid-container">
        {options.map((option, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => navigate(option.route)}
          >
            <div className="grid-icon">{option.icon}</div>
            <div className="grid-label">{option.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
