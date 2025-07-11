import React from "react";
import { useNavigate } from "react-router-dom";

const TestPage = () => {
  const navigate = useNavigate();

  const testRoutes = [
    { label: "Home Page", path: "/home" },
    { label: "Profile Page", path: "/profile" },
    { label: "Login Page", path: "/" },
    { label: "Signup Page", path: "/signup" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Settings", path: "/settings" },
    { label: "Help", path: "/help" },
  ];

  return (
    <div className="test-page-container">
      <h2>Test Navigation Page</h2>
      <div className="test-button-grid">
        {testRoutes.map((route, index) => (
          <button
            key={index}
            className="test-nav-button"
            onClick={() => navigate(route.path)}
          >
            {route.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
