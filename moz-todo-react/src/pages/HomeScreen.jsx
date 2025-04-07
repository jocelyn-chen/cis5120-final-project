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
import '../tw.css';

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
    <div className="tw-flex tw-flex-col tw-h-full tw-bg-white tw-overflow-x-hidden">
      <div className="tw-flex-1 tw-overflow-y-auto">
        {/* Header */}
        <div className="tw-pt-4">
          {/* Logo */}
          <div className="tw-flex tw-justify-center tw-mb-5">
            <img src={Logo} alt="Hobbit Logo" className="tw-h-40 sm:tw-h-14 tw-w-auto" />
          </div>

          {/* Avatar + Coin + Shop */}
          <div className="tw-flex tw-items-center tw-justify-between tw-px-6">
            {/* Avatar */}
            <div className="tw-w-64 tw-flex tw-items-center tw-justify-center">
              <img
                src={Avatar}
                alt="Avatar"
                className="tw-w-full tw-h-full tw-object-contain"
              />
            </div>

            {/* Coin + Shop */}
            <div className="tw-flex tw-flex-col tw-gap-3 tw-bg-white/40 tw-rounded-3xl tw-px-4 tw-py-3 tw-items-center">
              {/* Coin */}
              <div className="tw-flex tw-justify-center tw-items-center tw-gap-2 tw-px-4 tw-py-1 tw-rounded-full tw-bg-yellow-100 tw-w-[130px] tw-h-[30px] tw-font-bold tw-text-black tw-text-[16px] tw-font-nunito tw-shadow-sm">
                <img src={Coin} alt="coin icon" className="tw-w-5 tw-h-5" />
                <span>{userData.coins}</span>
              </div>

              {/* Shop Button */}
              <button className="tw-flex tw-justify-center tw-items-center tw-gap-2 tw-px-4 tw-py-1 tw-rounded-full tw-bg-pink-100 tw-w-[130px] tw-h-[30px] tw-font-bold tw-text-black tw-text-[16px] tw-font-nunito tw-border-none tw-shadow-[0px_0px_4px_#ff879d]">
                <img src={ShopIcon} alt="shop icon" className="tw-w-5 tw-h-5" />
                <span>Shop</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <h2 className="tw-text-center tw-text-2xl tw-font-bold tw-mt-10 tw-mb-6 tw-text-[#222222]">
          My Hobbies
        </h2>

        <div className="tw-grid tw-grid-cols-2 tw-gap-y-10 tw-gap-x-4 tw-justify-items-center tw-px-4">
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
