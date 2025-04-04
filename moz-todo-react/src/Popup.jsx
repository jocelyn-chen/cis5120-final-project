import React, { useState } from 'react';
import './PopupStyles.css'; // Import the styles

const Popup = ({isOpen, onClose, moduleName, moduleURL}) => {
  
  const handleNavigate = () => {
    // Change this URL to your desired destination
    window.location.href = {moduleURL};
  };
  
  const handleOverlayClick = (e) => {
    if (e.target.className === 'overlay') {
      closePopup();
    }
  };
  
  return (isOpen &&  (
    <div className="overlay" onClick={handleOverlayClick}>
        <div className="popup">
        <div className="popup-header">
            <h2 className="popup-title">{moduleName}</h2>
            <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="popup-content">
            {/* <p className="popup-text">
            Ready to explore delicious recipes and baking tips? 
            Click below to continue to our curated collection!
            </p> */}
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