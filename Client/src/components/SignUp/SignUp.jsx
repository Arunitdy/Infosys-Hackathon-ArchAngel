import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiBriefcase } from "react-icons/fi";
import "./SignUp.css";

const SignUp = ({ setUserData }) => {
  const [role, setRole] = useState("migrant");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    id_type: "",
    id_number: "",
    language: "",
    email: "",
    nationality: "",
    current_location: "",
    dob: "",
    gender: "",
    emergency_contact: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newUser = { ...formData, role };

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
                        <div className="role-toggle">
            <button
                className={role === "migrant" ? "active" : ""}
                onClick={() => setRole("migrant")}
            >
                <FiUser /> Migrant
            </button>
            <button
                className={role === "firm" ? "active" : ""}
                onClick={() => setRole("firm")}
            >
                <FiBriefcase /> Firm / Service Provider
            </button>
            </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input className="form-input" id="name" type="text" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone</label>
              <input className="form-input" id="phone" type="tel" value={formData.phone} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input className="form-input" id="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="id_type">ID Type</label>
              <select className="form-input" id="id_type" value={formData.id_type} onChange={handleChange} required>
                <option value="">Select ID Type</option>
                <option value="Passport">Passport</option>
                <option value="Aadhar">Aadhar</option>
                <option value="PAN">PAN</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="id_number">ID Number</label>
              <input className="form-input" id="id_number" type="text" value={formData.id_number} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="language">Language</label>
              <select className="form-input" id="language" value={formData.language} onChange={handleChange} required>
                <option value="">Select Language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Malayalam">Malayalam</option>
              </select>
            </div>

            {role === "migrant" && (
              <>
                <div className="form-group">
                  <label className="form-label" htmlFor="nationality">Nationality</label>
                  <input className="form-input" id="nationality" type="text" value={formData.nationality} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="current_location">Current Location</label>
                  <input className="form-input" id="current_location" type="text" value={formData.current_location} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="dob">Date of Birth</label>
                  <input className="form-input" id="dob" type="date" value={formData.dob} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="gender">Gender</label>
                  <select className="form-input" id="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="emergency_contact">Emergency Contact</label>
                  <input className="form-input" id="emergency_contact" type="tel" value={formData.emergency_contact} onChange={handleChange} required />
                </div>
              </>
            )}

            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input className="form-input" id="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} required />
              <div className="password-checkbox">
                <input type="checkbox" id="show-password" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
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
