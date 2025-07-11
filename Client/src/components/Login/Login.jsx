import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";

export function LoginPage({ setUserData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        setUserData(data.user);  
        console.log(data.user);            // Save user data in App
        navigate("/home");                   // Navigate to Home
      } else {
        alert("Invalid credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong.");
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
      <img src="https://arkca.com/assets/img/login.gif" alt="Animated Support" />
    </div>
      <div className="login-content">
        <h1 className="login-title">Infosys-Hackathon-ArchAngel</h1>
        <h2 className="login-subtitle">Sign in to your account</h2>

        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Phone Number</label>
              <input
                className="form-input"
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
