import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../tw.css';

export default function HobbyCard({ title, progress, color, icon }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title === 'Add') return;
    navigate(`/${title.toLowerCase()}`);
  };

  const colorWithOpacity = `${color}22`; // 13% opacity
  const borderColor = `${color}66`; // 40% opacity

  return (
    <div
      className="tw-w-[35vw] tw-max-w-[140px] tw-aspect-square tw-flex tw-items-center tw-justify-center tw-cursor-pointer"
      onClick={handleClick}
    >
      <div className="tw-relative tw-w-full tw-h-full tw-rounded-full tw-flex tw-items-center tw-justify-center">
        {/* SVG Ring */}
        <svg
          className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full"
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
        <div className="tw-relative tw-z-10 tw-w-20 tw-h-20">
          <img
            src={icon}
            alt={`${title} Icon`}
            className="tw-w-full tw-h-full tw-object-contain"
          />
        </div>

        {/* Title text */}
        <div className="tw-absolute tw-z-20 tw-left-1/2 tw-top-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-bg-white/60 tw-px-2 tw-py-[3px] tw-rounded-full tw-shadow-sm tw-flex tw-items-center tw-justify-center">
          <span className="tw-text-black tw-text-sm tw-font-extrabold tw-font-nunito tw-whitespace-nowrap">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}
