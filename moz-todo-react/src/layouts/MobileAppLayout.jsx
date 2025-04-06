// src/layouts/MobileAppLayout.jsx
import React from 'react';

export default function MobileAppLayout({ children }) {
    return (
        <div className="flex justify-center w-screen h-screen bg-gray-50 overflow-hidden">
            <div className="relative w-full max-w-[402px] h-full max-h-[874px] bg-white shadow-lg flex flex-col">
                {children}
            </div>
        </div>
    );
}
