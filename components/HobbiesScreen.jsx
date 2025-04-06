"use client";
import { useState } from "react";
import StatusBar from "./StatusBar";
import Header from "./Header";
import HobbiesList from "./HobbiesList";

const HobbiesScreen = () => {
  const [currentScreen, setCurrentScreen] = useState("list");
  const [selectedHobby, setSelectedHobby] = useState(null);
  const [hobbies] = useState([
    {
      id: 1,
      name: "Sewing",
      progress: 75,
      image:
        "https://cdn.builder.io/api/v1/image/assets/8f2d72e635e24c7fa73c1fb595bc0d8e/bed3230bb80b500a0f2f5e5169ec5ea621e9b333",
      progressColor: "#4B95FF",
    },
    {
      id: 2,
      name: "Baking",
      progress: 45,
      image:
        "https://cdn.builder.io/api/v1/image/assets/8f2d72e635e24c7fa73c1fb595bc0d8e/c03bc66712342e4fc36bf6c56e578cd3255beb28",
      progressColor: "#FF879D",
    },
    {
      id: 3,
      name: "Photography",
      progress: 60,
      image:
        "https://cdn.builder.io/api/v1/image/assets/8f2d72e635e24c7fa73c1fb595bc0d8e/3059add63d498a110e7b37f5fb5c48258e6c1d57",
      progressColor: "#1E2F97",
    },
  ]);

  const navigateToHobby = (hobby) => {
    setSelectedHobby(hobby);
    setCurrentScreen("detail");
  };

  const navigateToAdd = () => {
    window.location.href = "/add-hobby";
  };

  return (
    <main className="flex overflow-hidden flex-col mx-auto w-full bg-white max-w-[480px] rounded-[50px]">
      <div className="flex flex-col items-center px-10 pt-3.5 w-full">
        <StatusBar />
        <Header />
      </div>
      <HobbiesList
        hobbies={hobbies}
        onHobbyClick={navigateToHobby}
        onAddClick={navigateToAdd}
      />
      <footer>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8f2d72e635e24c7fa73c1fb595bc0d8e/0674546aca49b353ddfb31d56cf6860692295444?placeholderIfAbsent=true"
          alt="Footer decoration"
          className="object-contain overflow-hidden mt-12 w-full aspect-square min-h-[84px]"
        />
      </footer>
    </main>
  );
};

export default HobbiesScreen;
