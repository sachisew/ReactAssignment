import React, { useEffect } from "react";
import "../styles/Styles.css";

const PopupMessage = ({ message, state = "success", onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className={`popup-message ${state === "error" ? "popup-error" : "popup-success"}`}>
      <p className="popup-title">
        {state === "error" ? "Error" : "Success"}
      </p>
      <p className="popup-message-text">{message}</p>
    </div>
  );
};

export default PopupMessage;
