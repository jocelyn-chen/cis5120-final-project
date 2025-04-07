import React, { useEffect, useState } from 'react';
import HobbyCard from '../components/home/HobbyCard';
import BottomNav from '../components/shared/BottomNav';

import Logo from '../assets/logo.png';
import Avatar from '../assets/avatar2.png';
import Coin from '../assets/coin.png';
import ShopIcon from '../assets/shop_icon.svg';

import SewingIcon from '../assets/sewing_icon.svg';
import BakingIcon from '../assets/baking_icon.png';
import PhotoIcon from '../assets/photography_icon.svg';
import AddIcon from '../assets/add_icon.svg';

import { loadUserData } from '../utils/storage';

const ICON_MAP = {
  Sewing: SewingIcon,
  Baking: BakingIcon,
  Photography: PhotoIcon,
  Add: AddIcon,
};

export default function HomeScreen() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = loadUserData();
    setUserData(data);
  }, []);

  if (!userData) return null;

  return (
    <div className="flex flex-col h-full bg-white overflow-x-hidden">
      <div className="flex-1 overflow-y-auto">
        {/* Header */}

        <div className="pt-4">
          {/* Logo */}
          <div className="flex justify-center mb-5">
            <img src={Logo} alt="Hobbit Logo" className="h-40 sm:h-14 w-auto" />
          </div>

          {/* Avatar + Coin + Shop */}
            <div className="flex items-center justify-between px-6">
              {/* Avatar */}
              <div className="w-64 flex items-center justify-center">
                <img
                  src={Avatar}
                  alt="Avatar"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Coin + Shop */}
              <div className="flex flex-col gap-3 bg-white/40 rounded-3xl px-4 py-3 items-center">
                {/* Coin */}
                <div className="flex justify-center items-center gap-2 px-4 py-1 rounded-full bg-yellow-100 w-[130px] h-[30px] font-bold text-black text-[16px] font-nunito shadow-sm">
                  <img src={Coin} alt="coin icon" className="w-5 h-5" />
                  <span>{userData.coins}</span>
                </div>

                {/* Shop Button */}
                <button className="flex justify-center items-center gap-2 px-4 py-1 rounded-full bg-pink-100 w-[130px] h-[30px] font-bold text-black text-[16px] font-nunito border-none shadow-[0px_0px_4px_#ff879d]">
                  <img src={ShopIcon} alt="shop icon" className="w-5 h-5" />
                  <span>Shop</span>
                </button>
              </div>
            </div>
        </div>

        {/* Hobbies */}
        <h2 className="text-center text-2xl font-bold mt-10 mb-6 text-[#222222]">
          My Hobbies
        </h2>

        <div className="grid grid-cols-2 gap-y-10 gap-x-4 justify-items-center px-4">
          {userData.hobbies.map((hobby) => (
            <div key={hobby.title}>
              <HobbyCard
                title={hobby.title}
                progress={hobby.progress}
                color={hobby.color}
                icon={ICON_MAP[hobby.title] || AddIcon}
              />
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
