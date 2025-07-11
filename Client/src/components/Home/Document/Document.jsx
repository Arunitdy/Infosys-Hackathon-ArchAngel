import React, { useState } from "react";
import "./Document.css";
import { FiPlus } from "react-icons/fi";

const Documents = () => {
  const [documents, setDocuments] = useState([
    { name: "Aadhar Card", uploaded: true },
    { name: "PAN Card", uploaded: true },
    { name: "Driving License", uploaded: false },
    { name: "Voter ID", uploaded: false },
  ]);

  const handleUpload = () => {
    const newDoc = prompt("Enter Document Name");
    if (newDoc) {
      setDocuments([...documents, { name: newDoc, uploaded: true }]);
    }
  };

  return (
    <div className="documents-container">
      <h2>Government Documents</h2>
      <div className="documents-list">
        {documents.map((doc, index) => (
          <div key={index} className={`document-card ${doc.uploaded ? "uploaded" : "pending"}`}>
            <h4>{doc.name}</h4>
            <p>Status: {doc.uploaded ? "Uploaded" : "Not Uploaded"}</p>
          </div>
        ))}
      </div>

      <button className="add-document-button" onClick={handleUpload}>
        <FiPlus size={24} />
      </button>
    </div>
  );
};

export default Documents;
