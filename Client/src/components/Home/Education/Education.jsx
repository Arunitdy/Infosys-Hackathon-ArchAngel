import React, { useState } from "react";
import Header from "../../Header/Header";
import "./Education.css";

const Education = () => {
  const [previousCredits, setPreviousCredits] = useState([
  {
    subject: "Mathematics I",
    institution: "Kerala State University",
    GPA: "4.0",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvaO_7tveISc-K4_h8Dxrk6geqzW_6ar7wyA&s",
    contact: "math@ksu.edu.in"
  },
  {
    subject: "English Communication",
    institution: "Goa Central College",
    GPA: "3.2",
    image: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1440399087l3.jpg",
    contact: "english@goacc.in"
  },
  {
    subject: "Computer Fundamentals",
    institution: "TN Tech Institute",
    GPA: "1.9",
    image: "https://images.shiksha.com/mediadata/images/1465885102phpPvpaYi.jpeg",
    contact: "cs@tntech.edu"
  }
]);

const [institutions] = useState([
  {
    name: "Anna University",
    location: "Chennai",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZd0VdljpugzgvUMm3u9avG8tZF-ysfiLoQ&s",
    contact: "admissions@annauniv.edu"
  },
  {
    name: "Delhi Tech University",
    location: "New Delhi",
    image: "https://images.shiksha.com/mediadata/images/1632465297phpyUzixv.jpeg",
    contact: "info@dtu.ac.in"
  },
  {
    name: "Mumbai Knowledge Campus",
    location: "Mumbai",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTbmjCgQYd5q8baJdwLDG11_DWgwxL0Svq3g&s",
    contact: "mumbai@mkcampus.in"
  },
]);


  const [showModal, setShowModal] = useState(false);
  const [newCredit, setNewCredit] = useState({ subject: "", institution: "", GPA: "" });
  const [searchCredit, setSearchCredit] = useState("");
  const [searchInstitution, setSearchInstitution] = useState("");

  const handleTransfer = (inst) => {
    alert(`Transfer request sent to ${inst.name}`);
  };

  const handleInputChange = (e) => {
    setNewCredit({ ...newCredit, [e.target.name]: e.target.value });
  };

  const handleAddCredit = () => {
    if (newCredit.subject && newCredit.institution && newCredit.GPA) {
      setPreviousCredits([...previousCredits, newCredit]);
      setNewCredit({ subject: "", institution: "", GPA: "" });
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
      credit.GPA.toLowerCase().includes(searchCredit.toLowerCase())
  );

  const filteredInstitutions = institutions.filter(
    (inst) =>
      inst.name.toLowerCase().includes(searchInstitution.toLowerCase()) ||
      inst.location.toLowerCase().includes(searchInstitution.toLowerCase())
  );

  return (
   <div>
  <Header title="Education Transfer" />
  <div className="credit-transfer-container">
    {/* Left Panel */}
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
            <div className="credit-header">
                <img src={credit.image} alt={credit.subject} className="credit-image" />
                <div>
                <h4>{credit.subject}</h4>
                <p><strong>Institution:</strong> {credit.institution}</p>
                <p><strong>Grade:</strong> {credit.grade}</p>
                <p><strong>Contact:</strong> {credit.contact}</p>
                </div>
            </div>
            </div>
        ))}
      </div>
    </div>

    {/* Right Panel */}
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
            <div className="institution-details">
                <img src={inst.image} alt={inst.name} className="institution-image" />
                <div>
                <h4>{inst.name}</h4>
                <p>{inst.location}</p>
                <p><strong>Contact:</strong> {inst.contact}</p>
                </div>
            </div>
            <button onClick={() => handleTransfer(inst)}>Request Transfer</button>
            </div>

        ))}
      </div>
    </div>
  </div>

  {/* Floating + Button */}
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
          name="GPA"
          placeholder="GPA"
          value={newCredit.GPA}
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
