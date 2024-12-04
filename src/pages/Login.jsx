import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import PopupMessage from "../components/PopupMessage";
import "../styles/Styles.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [popupMessage, setPopupMessage] = useState("");

  const handleLogin = (values) => {
    const success = login(values.email, values.password);
    if (success) {
      navigate("/products");
    } else {
      setPopupMessage("Invalid credentials");
    }
  };

  const handleSignUp = () => {
    navigate("/register"); // Navigate to the signup page
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="welcome-text">Welcome!</div>
        <AuthForm onSubmit={handleLogin} isLogin />
        {popupMessage && (
          <PopupMessage
            message={popupMessage}
            state= "error"
            onClose={() => setPopupMessage("")}
          />
        )}
        <div className="signup-text">
          No account?{" "}
          <button className="signup-button" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
