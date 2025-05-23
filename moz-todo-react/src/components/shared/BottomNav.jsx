import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import HobbiesSelected from '../../assets/hobbies_selected.png';
import HobbiesUnselected from '../../assets/hobbies_unselected.png';

import ProgressSelected from '../../assets/progress_selected.svg';
import ProgressUnselected from '../../assets/progress_unselected.svg';

import ProfileSelected from '../../assets/person_selected.svg';
import ProfileUnselected from '../../assets/person_unselected.svg';

import '../../tw.css';


export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    {
      label: 'Hobbies',
      path: '/',
      iconSelected: HobbiesSelected,
      iconUnselected: HobbiesUnselected,
    },
    {
      label: 'Progress',
      path: '/progress',
      iconSelected: ProgressSelected,
      iconUnselected: ProgressUnselected,
    },
    {
      label: 'Profile',
      path: '/profile',
      iconSelected: ProfileSelected,
      iconUnselected: ProfileUnselected,
    },
  ];

  return (
    <div className="tw-w-full tw-bg-white tw-border-t tw-flex tw-justify-around tw-items-center tw-h-20 tw-z-50">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;

        return (
          <button
            key={tab.label}
            onClick={() => navigate(tab.path)}
            className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-xs tw-font-semibold tw-px-2 tw-py-1 tw-bg-transparent tw-group"
          >
            {/* Default icon */}
            <img
              src={tab.iconUnselected}
              alt={`${tab.label} default`}
              className={`tw-h-6 tw-w-6 tw-mb-1 tw-transition-opacity tw-duration-200 ${
                isActive ? 'tw-hidden' : 'tw-block group-hover:tw-hidden'
              }`}
            />

            {/* Hover/Active icon */}
            <img
              src={tab.iconSelected}
              alt={`${tab.label} selected`}
              className={`tw-h-6 tw-w-6 tw-mb-1 tw-transition-opacity tw-duration-200 ${
                isActive ? 'tw-block' : 'tw-hidden group-hover:tw-block'
              }`}
            />

            {/* Label */}
            <span
              className={`tw-transition-colors tw-duration-200 ${
                isActive
                  ? 'tw-text-black'
                  : 'tw-text-[#969696] group-hover:tw-text-black'
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
