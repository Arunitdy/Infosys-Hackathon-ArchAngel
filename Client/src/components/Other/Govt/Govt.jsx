import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiUser, FiX } from "react-icons/fi";
import {
  FaUsers,
  FaFileSignature,
  FaMapMarkedAlt,
  FaRegNewspaper,
  FaPhone,
  FaCog,
} from "react-icons/fa";

import "./Govt.css";

const features = [
  { name: "Citizen Services", icon: <FaUsers />, route: "/govt/services" },
  { name: "Policy Documents", icon: <FaFileSignature />, route: "/govt/policies" },
  { name: "Interstate Support", icon: <FaMapMarkedAlt />, route: "/govt/interstate" },
  { name: "News & Announcements", icon: <FaRegNewspaper />, route: "/govt/news" },
  { name: "Helpline Contacts", icon: <FaPhone />, route: "/govt/helpline" },
  { name: "Settings", icon: <FaCog />, route: "/govt/settings" },
];

const menuItems = ["Dashboard", "Feedback", "Help", "Logout"];

const Govt = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="govt-home-wrapper">
      {/* Navbar */}
      <div className="govt-navbar">
        <button className="icon-button" onClick={() => setShowMenu(!showMenu)}>
          <FiMenu size={24} />
        </button>
        <h2>Government Services Panel</h2>
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
      <div className="govt-hero">
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
          alt="Govt Building"
          className="govt-hero-image"
        />
        <div className="govt-hero-overlay">
          <h1>Welcome, Govt Officer</h1>
          <p>Manage policies, connect with citizens, and support progress.</p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="govt-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className="govt-card"
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

export default Govt;
