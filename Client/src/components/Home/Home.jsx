import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiUser, FiX } from "react-icons/fi";
import "./Home.css";

const options = [
  { name: "Migration Service", icon: "🌍" },
  { name: "Medical", icon: "🏥" },
  { name: "Money Transfer", icon: "💸" },
  { name: "File Reports", icon: "📝" },
  { name: "Legal Help", icon: "⚖️" },
  { name: "Language Support", icon: "🗣️" },
];

const testMenuItems = [
  "Dashboard",
  "Notifications",
  "Settings",
  "Help",
];

const Home = () => {
  //const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

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

      {/* Hero Image */}
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Country" />
      </div>

      {/* Services Grid */}
      <div className="grid-container">
        {options.map((option, index) => (
          <div key={index} className="grid-item">
            <div className="grid-icon">{option.icon}</div>
            <div className="grid-label">{option.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
