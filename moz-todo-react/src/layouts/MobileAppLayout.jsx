// src/layouts/MobileAppLayout.jsx
import React from 'react';
import '../tw.css';
export default function MobileAppLayout({ children }) {
  return (
    <div className="tw-flex tw-justify-center tw-w-screen tw-h-screen tw-bg-gray-50 tw-overflow-hidden">
      <div className="tw-relative tw-w-full tw-max-w-[402px] tw-h-full tw-max-h-[874px] tw-bg-white tw-shadow-lg tw-flex tw-flex-col">
        {children}
      </div>
    </div>
  );
}
