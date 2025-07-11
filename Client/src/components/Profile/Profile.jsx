import React from "react";
import "./Profile.css";
import { FiPhone, FiMail, FiEdit2, FiLogOut } from "react-icons/fi";
import { FaSchool, FaHospitalAlt } from "react-icons/fa";

const Profile = ({ userData }) => {
  userData = {
    name: "John Doe",
    phone: "1234567890",
    id_type: "Passport",
    id_number: "X1234567",
    language: "Hindi",
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
        <button className="tab active">Details</button>
        <button className="tab">School</button>
        <button className="tab">Hospital</button>
      </div>

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

      <div className="footer-buttons">
        <button className="school"><FaSchool /> School</button>
        <button className="hospital"><FaHospitalAlt /> Hospital</button>
        <button className="logout"><FiLogOut /> Logout</button>
      </div>
    </div>
  );
};

export default Profile;
