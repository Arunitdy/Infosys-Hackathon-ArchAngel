import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import "./Login.css";

export function LoginPage({ setUserData }) {
  const [phone, setphone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const response = await axios.post(
      "https://migrantconnect.onrender.com/api/login",
      {
        phone,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    console.log("Full response:", response);
    const data = response.data;
    console.log("Login response data:", data);

    if (data.message === "Login successful") {
      // Create a user object from the response data
      const user = {
        user_type: data[" user_type"].trim(), // Note the space before user_type
        user_id: data.user_id
      };
      
      console.log("Created user object:", user);
      setUserData(user);
      
      // Store token if available (add this if your API starts returning tokens)
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      }
      
      // Navigate based on user type
      switch(user.user_type) {
        case 'school':
          navigate("/school");
          break;
        case 'hospital':
          navigate("/hospital");
          break;
        case 'government':
          navigate("/govt");
          break;
        case 'migrant':
          navigate("/home");
          break;
        default:
          navigate("/");
      }
    } else {
      const errorMsg = data.message || "Invalid credentials";
      alert(errorMsg);
    }
  } catch (error) {
    console.error("Login error:", error);
    
    if (error.response) {
      const serverMsg = error.response.data?.message || "Server error occurred";
      alert(`Login failed: ${serverMsg}`);
    } else if (error.request) {
      alert("No response from server. Please check your connection.");
    } else {
      alert("Login failed: " );
      console.error("Error message:", error.message);
    }
  } finally {
    setIsLoading(false);
  }
};

  const handleGoogleSignIn = () => {
    alert("Google Sign-In not implemented");
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Left section with headline or image */}
        <div className="login-left">
          <h1>Welcome to ArchAngel</h1>
          <p>Register to access services for migrants and service providers.</p>
          {/* Optionally insert an image or animation here */}
          <img src="login.gif" alt="Animated Support" />
        </div>
        <div className="login-content">
          <h1 className="login-title">Infosys-Hackathon-ArchAngel</h1>
          <h2 className="login-subtitle">Sign in to your account</h2>

          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone Number</label>
                <input
                  className="form-input"
                  id="phone"
                  name="phone"
                  type="tel"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required
                  value={phone}
                  onChange={(e) => setphone(e.target.value.replace(/\D/, ""))}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">Password</label>
                <input
                  className="form-input"
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

              <div className="form-footer">
                <a href="#" onClick={() => alert("Forgot password")} className="forgot-password">
                  Forgot your password?
                </a>
              </div>

              <button className="submit-button" type="submit" disabled={isLoading}>
                {isLoading ? "Processing..." : "Sign in"}
              </button>
            </form>

            {/* <div className="divider">
              <span className="divider-text">Or continue with</span>
            </div>

            <button onClick={handleGoogleSignIn} className="google-button">
              <FcGoogle className="google-icon" />
              Sign in with Google
            </button> */}
            <div className="signup-link">
              <span>Don't have an account? </span>
              <a href="/signup" className="signup-link-text">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;