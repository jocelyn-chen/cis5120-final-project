import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PopupStyles.css'; // Import the styles

const Popup = ({ isOpen, onClose, moduleName = "Introduction to Baking", moduleURL = "/baking/introduction" }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(moduleURL);
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'overlay') {
      onClose();
    }
  };

  return isOpen ? (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="popup">
        <div className="popup-header">
          <h2 className="popup-title">{moduleName}</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="popup-content">
          <p className="popup-text">
            Ready to explore {moduleName.toLowerCase()}?
            Click below to start this module!
          </p>
          <button className="popup-button" onClick={handleNavigate}>
            Start
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup;