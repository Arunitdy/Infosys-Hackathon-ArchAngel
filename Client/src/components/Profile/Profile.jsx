import React, { useState } from "react";
import "./Profile.css";
import { FiPhone, FiMail, FiEdit2, FiLogOut } from "react-icons/fi";
import { FaSchool, FaHospitalAlt } from "react-icons/fa";

const Profile = ({ userData }) => {
  const [activeTab, setActiveTab] = useState("details");

  userData = {
    name: "John Doe",
    phone: "1234567890",
    id_type: "Passport",
    id_number: "X1234567",
    language: "Hindi",
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "details":
        return (
          <div className="info-section">
            <div className="info-row">
              <span className="label">Phone</span>
              <span className="value">{userData.phone}</span>
            </div>
            <div className="info-row">
              <span className="label">ID Type</span>
              <span className="value">{userData.id_type}</span>
            </div>
            <div className="info-row">
              <span className="label">ID Number</span>
              <span className="value">{userData.id_number}</span>
            </div>
            <div className="info-row">
              <span className="label">Language</span>
              <span className="value">{userData.language}</span>
            </div>
          </div>
        );
      case "school":
        return (
          <div className="info-section">
            <div className="info-row">
              <span className="label">School Name</span>
              <span className="value">ABC Public School</span>
            </div>
            <div className="info-row">
              <span className="label">State</span>
              <span className="value">Kerala</span>
            </div>
            <div className="info-row">
              <span className="label">Board</span>
              <span className="value">CBSE</span>
            </div>
          </div>
        );
      case "hospital":
        return (
          <div className="info-section">
            <div className="info-row">
              <span className="label">Hospital Name</span>
              <span className="value">City General Hospital</span>
            </div>
            <div className="info-row">
              <span className="label">Location</span>
              <span className="value">Mumbai</span>
            </div>
            <div className="info-row">
              <span className="label">Type</span>
              <span className="value">Government</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-screen">
      <div className="header-section">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
          className="avatar"
        />
        <h2>{userData.name}</h2>
        <p>{userData.id_type} - {userData.id_number}</p>
      </div>

      <div className="action-bar">
        <div className="action-button">
          <FiPhone />
          <span>Call</span>
        </div>
        <div className="action-button">
          <FiMail />
          <span>Email</span>
        </div>
        <div className="action-button">
          <FiEdit2 />
          <span>Edit</span>
        </div>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "details" ? "active" : ""}`}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>
        <button
          className={`tab ${activeTab === "school" ? "active" : ""}`}
          onClick={() => setActiveTab("school")}
        >
          School
        </button>
        <button
          className={`tab ${activeTab === "hospital" ? "active" : ""}`}
          onClick={() => setActiveTab("hospital")}
        >
          Hospital
        </button>
      </div>

      {renderTabContent()}

      <div className="footer-buttons">
        <button className="school"><FaSchool /> School</button>
        <button className="hospital"><FaHospitalAlt /> Hospital</button>
        <button className="logout"><FiLogOut /> Logout</button>
      </div>
    </div>
  );
};

export default Profile;
