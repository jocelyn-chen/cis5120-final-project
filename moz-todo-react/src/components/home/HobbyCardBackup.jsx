import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HobbyCardBackup({ title, progress, color, icon }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title === 'Add') return;
    navigate(`/${title.toLowerCase()}`);
  };

  const colorWithOpacity = `${color}22`; // 13% opacity
  const borderColor = `${color}66`; // 40% opacity

  return (
    <div
      className="w-[35vw] max-w-[140px] aspect-square flex items-center justify-center cursor-pointer"
      onClick={handleClick}
    >
<div className="relative w-full h-full rounded-full flex items-center justify-center">
    {/* SVG Ring */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18" cy="18" r="14.5" fill={colorWithOpacity} />
          
          <circle
            cx="18"
            cy="18"
            r="16"
            stroke={borderColor}
            strokeWidth="3"
            fill="none"
          />
          {progress > 0 && (
            <circle
              cx="18"
              cy="18"
              r="16"
              stroke={color}
              strokeWidth="3"
              fill="none"
              strokeDasharray={`${(progress / 100) * 100} ${100 - (progress / 100) * 100}`}
              strokeDashoffset="25"
              strokeLinecap="round"
              transform="rotate(0 18 18)"
            />
          )}
        </svg>

        {/* Icon */}
        <div className="relative z-10 w-20 h-20">
          <img
            src={icon}
            alt={`${title} Icon`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Title text */}
        <div className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/60 px-2 py-[3px] rounded-full shadow-sm flex items-center justify-center">
          <span className="text-black text-sm font-extrabold font-nunito whitespace-nowrap">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}
