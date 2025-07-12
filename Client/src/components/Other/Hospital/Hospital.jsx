import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiUser, FiX } from "react-icons/fi";
import {
  FaNotesMedical,
  FaHistory,
  FaUserInjured,
  FaFileMedical,
  FaPhoneAlt,
  FaCog,
} from "react-icons/fa";

import "./Hospital.css";

const features = [
  { name: "Patient Requests", icon: <FaNotesMedical />, route: "/hospital/requests" },
  { name: "Transfer History", icon: <FaHistory />, route: "/hospital/history" },
  { name: "Patient Details", icon: <FaUserInjured />, route: "/hospital/patients" },
  { name: "Medical Reports", icon: <FaFileMedical />, route: "/hospital/reports" },
  { name: "Emergency Contacts", icon: <FaPhoneAlt />, route: "/hospital/emergency" },
  { name: "Settings", icon: <FaCog />, route: "/hospital/settings" },
];

const menuItems = ["Dashboard", "Notifications", "Help", "Logout"];

const Hospital = ({ userData, setUserData }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="hospital-home-wrapper">
      {/* Navbar */}
      <div className="hospital-navbar">
        <button className="icon-button" onClick={() => setShowMenu(!showMenu)}>
          <FiMenu size={24} />
        </button>
        <h2>Hospital Authority Panel</h2>
        <button className="icon-button" onClick={() => navigate("/profile")}>
          <FiUser size={24} />
        </button>
      </div>

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
          {menuItems.map((item, index) => (
            <li key={index} onClick={() => setShowMenu(false)}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Hero Section */}
              <div className="school-hero">
                <img
                    src="https://thumbs.dreamstime.com/b/modern-style-hospital-building-straight-lines-concrete-facing-30588884.jpg"
                    alt="Hospital campus"
                    className="school-hero-image"
                />
                <div className="school-hero-overlay">
                    <h1>Welcome, Hospital Authority</h1>
                    <p>Monitor requests, approve transfers, and stay connected.</p>
                </div>
              </div>
      {/* Features Grid */}
      <div className="hospital-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className="hospital-card"
            onClick={() => navigate(feature.route)}
          >
            <div className="card-icon">{feature.icon}</div>
            <div className="card-label">{feature.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hospital;
