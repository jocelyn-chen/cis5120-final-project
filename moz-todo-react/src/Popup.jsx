import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PopupStyles.css'; // Import the styles

const Popup = ({ isOpen, onClose, moduleName, moduleURL }) => {
  if (isOpen) {
    console.log(moduleName);
    console.log(moduleURL);
  }

  const navigate = useNavigate();
  const handleNavigate = () => {
    // Change this URL to your desired destination
    navigate(moduleURL);
    console.log("navigating to module page!");
  };


  const handleOverlayClick = (e) => {
    if (e.target.className === 'overlay') {
      onClose();
    }
  };

  return (isOpen && (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="popup">
        <div className="popup-header">
          <h2 className="popup-title">{moduleName}</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="popup-content">
          <button className="popup-button" onClick={handleNavigate}>
            Start
          </button>
        </div>
      </div>
    </div>
  )
  );
};

export default Popup;