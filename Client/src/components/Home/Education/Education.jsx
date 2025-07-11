import React from "react";
import "./Education.css";

const Education = () => {
  // Placeholder data
  const previousCredits = [
    { subject: "Mathematics I", institution: "Kerala State University", grade: "A" },
    { subject: "English Communication", institution: "Goa Central College", grade: "B+" },
    { subject: "Computer Fundamentals", institution: "TN Tech Institute", grade: "A+" },
  ];

  const institutions = [
    { name: "Anna University", location: "Chennai" },
    { name: "Delhi Tech University", location: "New Delhi" },
    { name: "Mumbai Knowledge Campus", location: "Mumbai" },
  ];

  const handleTransfer = (inst) => {
    alert(`Transfer request sent to ${inst.name}`);
  };

  return (
    <div className="credit-transfer-container">
      <div className="credit-left">
        <h2>Previous Academic Credits</h2>
        <div className="credit-history">
          {previousCredits.map((credit, index) => (
            <div className="credit-item" key={index}>
              <h4>{credit.subject}</h4>
              <p><strong>Institution:</strong> {credit.institution}</p>
              <p><strong>Grade:</strong> {credit.grade}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="credit-right">
        <h2>Available Institutions</h2>
        <div className="institution-list">
          {institutions.map((inst, index) => (
            <div className="institution-card" key={index}>
              <div>
                <h4>{inst.name}</h4>
                <p>{inst.location}</p>
              </div>
              <button onClick={() => handleTransfer(inst)}>Request Transfer</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
