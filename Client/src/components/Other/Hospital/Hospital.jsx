import React from "react";
import "./Hospital.css";

const HospitalHome = () => {
  return (
    <div className="hospital-wrapper">
      <div className="hospital-left">
        <h2 className="hospital-heading">Hospital Services</h2>
        <p className="hospital-description">
          Find trusted healthcare facilities and emergency support for migrants and locals.
        </p>
        <iframe
          src="https://lottie.host/embed/e6f5c64e-bd6c-4ad8-91c8-03887136e012/HsMjPAFTdi.lottie"
          title="Hospital Animation"
          className="hospital-animation"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="hospital-right">
        <div className="hospital-content">
          <h1 className="hospital-title">Hospital Support</h1>
          <h2 className="hospital-subtitle">Access medical care and services</h2>
          <p className="hospital-info">Register or log in to book appointments, get documents, and more.</p>
          <a href="/signup">
            <button className="hospital-button">Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HospitalHome;
