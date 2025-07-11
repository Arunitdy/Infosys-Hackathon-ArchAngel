import React, { useState } from "react";
import "./Education.css";

const Education = () => {
  const [previousCredits, setPreviousCredits] = useState([
    { subject: "Mathematics I", institution: "Kerala State University", grade: "A" },
    { subject: "English Communication", institution: "Goa Central College", grade: "B+" },
    { subject: "Computer Fundamentals", institution: "TN Tech Institute", grade: "A+" },
  ]);

  const [institutions] = useState([
    { name: "Anna University", location: "Chennai" },
    { name: "Delhi Tech University", location: "New Delhi" },
    { name: "Mumbai Knowledge Campus", location: "Mumbai" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newCredit, setNewCredit] = useState({ subject: "", institution: "", grade: "" });
  const [searchCredit, setSearchCredit] = useState("");
  const [searchInstitution, setSearchInstitution] = useState("");

  const handleTransfer = (inst) => {
    alert(`Transfer request sent to ${inst.name}`);
  };

  const handleInputChange = (e) => {
    setNewCredit({ ...newCredit, [e.target.name]: e.target.value });
  };

  const handleAddCredit = () => {
    if (newCredit.subject && newCredit.institution && newCredit.grade) {
      setPreviousCredits([...previousCredits, newCredit]);
      setNewCredit({ subject: "", institution: "", grade: "" });
      setShowModal(false);
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Filter functions
  const filteredCredits = previousCredits.filter(
    (credit) =>
      credit.subject.toLowerCase().includes(searchCredit.toLowerCase()) ||
      credit.institution.toLowerCase().includes(searchCredit.toLowerCase()) ||
      credit.grade.toLowerCase().includes(searchCredit.toLowerCase())
  );

  const filteredInstitutions = institutions.filter(
    (inst) =>
      inst.name.toLowerCase().includes(searchInstitution.toLowerCase()) ||
      inst.location.toLowerCase().includes(searchInstitution.toLowerCase())
  );

  return (
    <div className="credit-transfer-container">
      <div className="credit-left">
        <h2>Previous Academic Credits</h2>
        <input
          type="text"
          className="search-bar"
          placeholder="Search credits..."
          value={searchCredit}
          onChange={(e) => setSearchCredit(e.target.value)}
        />
        <div className="credit-history">
          {filteredCredits.map((credit, index) => (
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
        <input
          type="text"
          className="search-bar"
          placeholder="Search institutions..."
          value={searchInstitution}
          onChange={(e) => setSearchInstitution(e.target.value)}
        />
        <div className="institution-list">
          {filteredInstitutions.map((inst, index) => (
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

      {/* Floating "+" Button */}
      <button className="add-credit-button" onClick={() => setShowModal(true)}>+</button>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add New Credit</h3>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={newCredit.subject}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="institution"
              placeholder="Institution"
              value={newCredit.institution}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="grade"
              placeholder="Grade"
              value={newCredit.grade}
              onChange={handleInputChange}
            />
            <div className="modal-buttons">
              <button onClick={handleAddCredit}>Add</button>
              <button className="cancel" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
