import React from "react";
import "./School.css";

const SchoolHome = () => {
  return (
    <div className="school-wrapper">
      <div className="school-left">
        <h2 className="school-heading">Education Services</h2>
        <p className="school-description">
          Get guidance for school admissions, documentation, and financial aid.
        </p>
        <iframe
          src="https://lottie.host/embed/117586f6-45f6-4fa0-97b1-80d13cb7cbd9/fjTV3lKp5j.lottie"
          title="School Animation"
          className="school-animation"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="school-right">
        <div className="school-content">
          <h1 className="school-title">Education Portal</h1>
          <h2 className="school-subtitle">Explore academic opportunities</h2>
          <p className="school-info">Register to receive help with school admissions and scholarships.</p>
          <a href="/signup">
            <button className="school-button">Register Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SchoolHome;
