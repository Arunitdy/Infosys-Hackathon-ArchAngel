import React, { useEffect, useState } from "react";
import "./Medical.css";

const Medical = () => {
  const [history, setHistory] = useState([]);
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    // Simulated fetch calls (replace with actual API calls)
    setHistory([
      { id: 1, state: "Bihar", hospital: "Patna Medical College", treatment: "General Checkup" },
      { id: 2, state: "UP", hospital: "Lucknow Central Hospital", treatment: "Dental" },
    ]);

    setHospitals([
      { id: 1, name: "Delhi Govt Hospital" },
      { id: 2, name: "AIIMS Delhi" },
      { id: 3, name: "Safdarjung Hospital" },
    ]);
  }, []);

  const handleTransferRequest = (hospitalName) => {
    alert(`Request sent to ${hospitalName} with your previous medical history.`);
  };

  return (
    <div className="medical-page">
      <div className="left-section">
        <h2>Medical History</h2>
        {history.length ? (
          <ul>
            {history.map((item) => (
              <li key={item.id}>
                <strong>{item.hospital}</strong> ({item.state})<br />
                Treatment: {item.treatment}
              </li>
            ))}
          </ul>
        ) : (
          <p>No history found.</p>
        )}
      </div>

      <div className="right-section">
        <h2>Available Hospitals</h2>
        <ul>
          {hospitals.map((hospital) => (
            <li key={hospital.id}>
              <span>{hospital.name}</span>
              <button onClick={() => handleTransferRequest(hospital.name)}>Request Transfer</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Medical;
