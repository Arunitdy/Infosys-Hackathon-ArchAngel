import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiUser, FiX } from "react-icons/fi";
import { 
  FaGlobe, 
  FaHospital, 
  FaGraduationCap, 
  FaFileAlt, 
  FaBalanceScale,
  FaUserFriends,  // For Buddy Connect
  FaLandmark,     // For Government Services
  FaMapMarkerAlt  // For Nearby Amenities
} from "react-icons/fa";
import axios from "axios";
import "./Home.css";
const options = [
  { name: "Medical", icon: <FaHospital />, route: "/medical" },
  { name: "Education", icon: <FaGraduationCap />, route: "/education" },
  { name: "Documents", icon: <FaFileAlt />, route: "/documents" },
  { name: "Legal Help", icon: <FaBalanceScale />, route: "/services" },
  { name: "Buddy Connect", icon: <FaUserFriends />, route: "/buddy-connect" },
  { name: "Government Services", icon: <FaLandmark />, route: "/government" },
  { name: "Nearby Amenities", icon: <FaMapMarkerAlt />, route: "/amenities" },
];
const testMenuItems = [
  "Dashboard",
  "Notifications",
  "Settings",
  "Help",
];

const Home = ({ userData, setUserData }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [animatedText, setAnimatedText] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fullText =
    "MigrantLink is a portable digital platform empowering India's 450 million migrant workers with seamless access to essential services across state borders. It consolidates documents like Aadhaar, health records, and ration cards into a secure digital wallet, ensuring benefits follow workers wherever they go.";

  useEffect(() => {
    // Typing animation effect
    let index = 0;
    const typingInterval = setInterval(() => {
      setAnimatedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(typingInterval);
    }, 30);

    // Fetch user data if not already available
const fetchUserData = async () => {
  try {
    // Check if we already have userData
    if (!userData || !userData.id) {  // Changed from user_id to id based on your API response
      // Get user ID from localStorage or wherever it's stored
      const userId = localStorage.getItem('userId') || 3; // Default to 3 if not found
      
      const response = await axios.get(`https://migrantconnect.onrender.com/api/user/${userId}`);
      const fetchedUserData = response.data; // Renamed to avoid shadowing
      console.log("Fetched user data:", fetchedUserData);
      
      // Save to state and localStorage
      setUserData(fetchedUserData);
      localStorage.setItem('userData', JSON.stringify(fetchedUserData));
      
      // This will log the data we just fetched
      console.log("Data being set:", fetchedUserData);
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  } finally {
    setLoading(false);
  }
};

    fetchUserData();

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  if (loading) {
    return <div className="loading-container">Loading user data...</div>;
  }

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

      {/* Hero Section */}
      <div className="hero-image">
        <div className="hero-text">
          <h1>Welcome {userData?.name || 'User'}</h1>
          <p className="tagline">Your rights, wherever you work.</p>
          <p className="animated-description">{animatedText}</p>
        </div>

        <div className="hero-animation">
          <iframe
            src="https://lottie.host/embed/a1bdbb34-56b3-4ba0-bd9f-1f56382e7306/fci9LzDCGH.lottie"
            title="Migrant Animation"
          ></iframe>
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