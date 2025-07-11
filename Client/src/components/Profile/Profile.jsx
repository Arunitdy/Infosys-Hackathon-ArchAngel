import React from "react";
import "./Profile.css";

const Profile = ({ userData }) => {
    
userData = {
  name: "John Doe",
  phone: "1234567890",
  id_type: "Passport",
  id_number: "X1234567",
  password: "securepass"
};

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            className="profile-image"
          />
          <h2 className="profile-name">{userData.name}</h2>
        </div>

        <div className="profile-details">
          <div className="profile-row">
            <span className="label">Phone:</span>
            <span className="value">{userData.phone}</span>
          </div>
          <div className="profile-row">
            <span className="label">ID Type:</span>
            <span className="value">{userData.id_type}</span>
          </div>
          <div className="profile-row">
            <span className="label">ID Number:</span>
            <span className="value">{userData.id_number}</span>
          </div>
          <div className="profile-row">
            <span className="label">Language:</span>
            <span className="value">{userData.language || "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
