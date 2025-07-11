import React from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiUser } from "react-icons/fi";
import "./Header.css";

const Header = ({ onMenuToggle }) => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <button className="icon-button" onClick={onMenuToggle}>
        <FiMenu size={24} />
      </button>
      <button className="icon-button" onClick={() => navigate("/profile")}>
        <FiUser size={24} />
      </button>
    </div>
  );
};

export default Header;
