import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import PopupMessage from "../components/PopupMessage";
import "../styles/Styles.css";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [popupMessage, setPopupMessage] = useState("");
  const [popupState, setPopupState] = useState("success");

  const handleRegister = (values) => {
    register(values.name, values.email, values.password);
    setPopupMessage("Registration successful! Please wait....");
    setTimeout(() => {
      setPopupMessage("");
      navigate("/login");
    }, 3000); // Wait for 3 seconds
  };

  return (
    <div className="register-page">
      <div className="register-form-container">
        <h2 className="register-title">Create Your Account</h2>
        <p className="register-subtitle">Browse, shop, and save</p>
        <AuthForm onSubmit={handleRegister} />
      </div>
      <div className="register-image-container">
        <img
          src="/images/register.png"
          alt="Signup illustration"
          className="register-image"
        />
      </div>
      {popupMessage && (
        <PopupMessage
          message={popupMessage}
          state={popupState}
        />
      )}
    </div>
  );
};

export default Register;