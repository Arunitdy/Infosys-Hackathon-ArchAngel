import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";


export function LoginPage({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleSubmit = () => {
    alert("Login functionality is not implemented yet.");
  }

  const handleGoogleSignIn = () => {
    alert("Google Sign-In functionality is not implemented yet.");
    }
    
  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Infosys-Hackathon-ArchAngel</h1>
        <h2 className="login-subtitle">Sign in to your account</h2>

        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email address</label>
              <input
                className="form-input emailtest"
                placeholder="123456@tkmce.ac.in"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input
                className="form-input passwordtest"
                placeholder="Password"
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
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
              {isLogin && (
                <>
                  <a href="#" onClick={handleForgotPassword} className="forgot-password">
                    Forgot your password?
                  </a>
                  {showForgotPassword && (
                    <ForgotPassword 
                      onClose={() => setShowForgotPassword(false)} 
                      initialEmail={email} 
                    />
                  )}
                </>
              )}
            </div>

            <button className="submit-button loginbuttontest" type="submit" disabled={isLoading}>
              {isLoading ? "Processing..." : isLogin ? "Sign in" : "Register"}
            </button>
          </form>

          <div className="divider">
            <span className="divider-text">Or continue with</span>
          </div>

          <button onClick={handleGoogleSignIn} className="google-button">
            <FcGoogle className="google-icon" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage; 
