import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = ({ setUserData }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [idType, setIdType] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("");


  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newUser = {
        name,
        phone,
        id_type: idType,
        id_number: idNumber,
        password,
        language,
    };


    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();

      if (data.success) {
        setUserData(data.user);
        navigate("/home");
      } else {
        alert(data.message || "Registration failed.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Infosys-Hackathon-ArchAngel</h1>
        <h2 className="login-subtitle">Create your account</h2>

        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                className="form-input"
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone</label>
              <input
                className="form-input"
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="idType">ID Type</label>
              <select
                className="form-input"
                id="idType"
                value={idType}
                onChange={(e) => setIdType(e.target.value)}
                required
              >
                <option value="">Select ID Type</option>
                <option value="Passport">Passport</option>
                <option value="Aadhar">Aadhar</option>
                <option value="PAN">PAN</option>
              </select>
            </div>
          <div className="form-group">
            <label className="form-label" htmlFor="language">Language</label>
            <select
                className="form-input"
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                required
            >
                <option value="">Select Language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Malayalam">Malayalam</option>
            </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="idNumber">ID Number</label>
              <input
                className="form-input"
                id="idNumber"
                type="text"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>

              <input
                className="form-input"
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="password-checkbox">
                <input
                  type="checkbox"
                  id="show-password"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                <label htmlFor="show-password">Show Password</label>
              </div>
            </div>

            <button className="submit-button" type="submit" disabled={isLoading}>
              {isLoading ? "Registering..." : "Sign Up"}
            </button>
          </form>
          <div className="signup-link">
                <span>Already have an account?</span>
                <a href="/" className="signup-link-text">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
