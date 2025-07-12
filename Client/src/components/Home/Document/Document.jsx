import React, { useState } from "react";
import { FiPlus, FiX, FiUpload, FiDownload } from "react-icons/fi";
import "./Document.css";

const Documents = () => {
  const [documents, setDocuments] = useState([
    { name: "Aadhar Card", uploaded: true, details: "Government ID proof", date: "2023-05-15" },
    { name: "PAN Card", uploaded: true, details: "Tax identification number", date: "2023-04-20" },
    { name: "Driving License", uploaded: false, details: "License to drive vehicles", date: "" },
    { name: "Voter ID", uploaded: false, details: "Election identification card", date: "" },
  ]);

  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [showDocPopup, setShowDocPopup] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [newDocName, setNewDocName] = useState("");
  const [file, setFile] = useState(null);

  const handleDocClick = (doc) => {
    setSelectedDoc(doc);
    setShowDocPopup(true);
  };

  const handleUploadClick = () => {
    setShowUploadPopup(true);
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (newDocName) {
      setDocuments([...documents, { 
        name: newDocName, 
        uploaded: true, 
        details: "Newly uploaded document",
        date: new Date().toISOString().split('T')[0]
      }]);
      setNewDocName("");
      setFile(null);
      setShowUploadPopup(false);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const closePopup = () => {
    setShowDocPopup(false);
    setShowUploadPopup(false);
  };

  return (
    <div className="documents-container">
      <h2>Government Documents</h2>
      <div className="documents-list">
        {documents.map((doc, index) => (
          <div 
            key={index} 
            className={`document-card ${doc.uploaded ? "uploaded" : "pending"}`}
            onClick={() => handleDocClick(doc)}
          >
            <h4>{doc.name}</h4>
            <p>Status: {doc.uploaded ? "Uploaded" : "Pending"}</p>
          </div>
        ))}
      </div>

      <button className="add-document-button" onClick={handleUploadClick}>
        <FiPlus size={24} />
      </button>

      {/* Document Details Popup */}
      {showDocPopup && selectedDoc && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={closePopup}>
              <FiX size={24} />
            </button>
            <h3>{selectedDoc.name}</h3>
            <div className="doc-details">
              <p><strong>Status:</strong> {selectedDoc.uploaded ? "Uploaded" : "Not Uploaded"}</p>
              <p><strong>Details:</strong> {selectedDoc.details}</p>
              {selectedDoc.uploaded && (
                <>
                  <p><strong>Upload Date:</strong> {selectedDoc.date}</p>
                  <div className="doc-actions">
                    <button className="action-button download">
                      <FiDownload /> Download
                    </button>
                    <button className="action-button replace">
                      <FiUpload /> Replace
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Upload Document Popup */}
      {showUploadPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={closePopup}>
              <FiX size={24} />
            </button>
            <h3>Upload New Document</h3>
            <form onSubmit={handleUploadSubmit}>
              <div className="form-group">
                <label htmlFor="docName">Document Name</label>
                <input
                  type="text"
                  id="docName"
                  value={newDocName}
                  onChange={(e) => setNewDocName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="docFile">Select File</label>
                <input
                  type="file"
                  id="docFile"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <button type="submit" className="upload-button">
                <FiUpload /> Upload Document
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Documents;