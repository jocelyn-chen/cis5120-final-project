import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import HobbiesSelected from '../../assets/hobbies_selected.png';
import HobbiesUnselected from '../../assets/hobbies_unselected.png';

import ProgressSelected from '../../assets/progress_selected.svg';
import ProgressUnselected from '../../assets/progress_unselected.svg';

import ProfileSelected from '../../assets/person_selected.svg';
import ProfileUnselected from '../../assets/person_unselected.svg';

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
    <div className="w-full bg-white border-t flex justify-around items-center h-20 z-50">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;

        return (
          <button
            key={tab.label}
            onClick={() => navigate(tab.path)}
            className="flex flex-col items-center justify-center text-xs font-semibold px-2 py-1 bg-transparent group"
          >
            {/* Default icon */}
            <img
              src={tab.iconUnselected}
              alt={`${tab.label} default`}
              className={`h-6 w-6 mb-1 transition-opacity duration-200 ${
                isActive ? 'hidden' : 'block group-hover:hidden'
              }`}
            />

            {/* Hover/Active icon */}
            <img
              src={tab.iconSelected}
              alt={`${tab.label} selected`}
              className={`h-6 w-6 mb-1 transition-opacity duration-200 ${
                isActive ? 'block' : 'hidden group-hover:block'
              }`}
            />

            {/* Label */}
            <span
              className={`transition-colors duration-200 ${
                isActive
                  ? 'text-black'
                  : 'text-[#969696] group-hover:text-black'
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
