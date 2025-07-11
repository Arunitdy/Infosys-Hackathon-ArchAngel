import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiUser, FiX } from "react-icons/fi";
import {
  FaClipboardList,
  FaHistory,
  FaUserGraduate,
  FaCog,
  FaEnvelopeOpenText,
  FaCheckDouble,
} from "react-icons/fa";
import "./School.css";

const features = [
  { name: "View Requests", icon: <FaClipboardList />, route: "/school/requests" },
  { name: "Transfer History", icon: <FaHistory />, route: "/school/history" },
  { name: "Student Details", icon: <FaUserGraduate />, route: "/school/students" },
  { name: "Approve Transfer", icon: <FaCheckDouble />, route: "/school/approve" },
  { name: "Notices", icon: <FaEnvelopeOpenText />, route: "/school/notices" },
  { name: "Settings", icon: <FaCog />, route: "/school/settings" },
];

const sideMenuItems = ["Dashboard", "Notifications", "Help", "Logout"];

const School = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="school-home-wrapper">
      {/* Top Navbar */}
      <div className="school-navbar">
        <button className="icon-button" onClick={() => setShowMenu(!showMenu)}>
          <FiMenu size={24} />
        </button>
        <h2>School Authority Panel</h2>
        <button className="icon-button" onClick={() => navigate("/profile")}>
          <FiUser size={24} />
        </button>
      </div>
      <div className="school-navbar-spacer">
      {/* Sidebar Overlay */}
      {showMenu && <div className="overlay" onClick={() => setShowMenu(false)}></div>}

      {/* Sidebar Menu */}
      <div className={`sidebar-menu ${showMenu ? "open" : ""}`}>
        <div className="menu-header">
          <span>Menu</span>
          <button className="close-button" onClick={() => setShowMenu(false)}>
            <FiX size={20} />
          </button>
        </div>
        <ul>
          {sideMenuItems.map((item, index) => (
            <li key={index} onClick={() => setShowMenu(false)}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Hero Section */}
     {/* Hero Section */}
    <div className="school-hero">
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg"
        alt="School campus"
        className="school-hero-image"
    />
    <div className="school-hero-overlay">
        <h1>Welcome, School Authority</h1>
        <p>Monitor requests, approve transfers, and stay connected.</p>
    </div>
    </div>

      {/* Features Grid */}
      <div className="school-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className="school-card"
            onClick={() => navigate(feature.route)}
          >
            <div className="card-icon">{feature.icon}</div>
            <div className="card-label">{feature.name}</div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default School;
