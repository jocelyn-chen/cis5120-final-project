import React from "react";
import styles from "./HobbiesScreen.module.css";
import {useNavigate} from "react-router-dom";
import navBarImage from './assets/tempNavBar.png';
import coinIcon from './assets/coin.png';

// Status Bar Component
export const StatusBar = () => {
  return (
    <header className={styles.statusBar}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddba3409a083f323be572631e5c2b7ba621237ba?placeholderIfAbsent=true&apiKey=1391c7d4f5754fa3b2f95c32393f195e" alt="Status indicator" className={styles.img} />
      <nav className={styles.statusIcons}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/053fd1ce40ef922a18e6e13ed647c0c4ba13878b?placeholderIfAbsent=true&apiKey=1391c7d4f5754fa3b2f95c32393f195e" alt="Status icon 1" className={styles.img2} />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/da8cc747d6319f2128c757a357bd4265c9e894ef?placeholderIfAbsent=true&apiKey=1391c7d4f5754fa3b2f95c32393f195e" alt="Status icon 2" className={styles.img3} />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/554759d64cf84a2ea1ed4dbf414ed123075a6348?placeholderIfAbsent=true&apiKey=1391c7d4f5754fa3b2f95c32393f195e" alt="Status icon 3" className={styles.img4} />
      </nav>
    </header>
  );
};

// User Profile Component
const UserProfile = () => {
  return (
    <section className={styles.div2}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e52516a8dda19043fe618e1c6530caf60e532eac?placeholderIfAbsent=true&apiKey=1391c7d4f5754fa3b2f95c32393f195e" alt="User avatar" className={styles.img5} />
      <h1 className={styles.hobbit}>hobbit</h1>
    </section>
  );
};


// Coin and Shop Section Component
const CoinShopSection = () => {
  return (
    <section className={styles.potatoandshop}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e16c76550e3f8ccd6bcdf3edb141a2b2a5fd4690?placeholderIfAbsent=true&apiKey=1391c7d4f5754fa3b2f95c32393f195e" alt="Coin icon" className={styles.img6} />
      <div className={styles.storesection}>
        <div className={styles.coinamount}>
          <img src={coinIcon} alter="coin icon" style={{width: '24px'}}></img>
          <p style={{margin: '0px'}}>250</p>
        </div>
        <button className={styles.shopping}>
          <p style={{margin: '0px'}}>Shop</p>
        </button>
      </div>
    </section>
  );
};

// Hobby Item Component
const HobbyItem = ({ imageSrc, alt }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Navigating to Baking page");
    navigate('/baking'); // This will load your BakingPage component
  };


  return (
    <button onClick={handleClick}
    style={{
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      outline: 'none'
    }}>
      <img src={imageSrc} alt={alt} className={styles.img7} />
    </button>
  );
};

// Add Hobby Button Component
const AddHobbyButton = () => {
  const handleClick = () => {
    console.log("Add hobby!");
  };  

  return (
    <button className={styles.addHobbyButton}
      aria-label="Add"
      onClick={handleClick}
    >
      {/* Horizontal line */}
      <span className="absolute w-8 h-1 bg-current"></span>
      
      {/* Vertical line */}
      <span className="absolute w-1 h-8 bg-current"></span>
      
      {/* Text label */}
      <span className="mt-10 text-sm">Add</span>
    </button>
  );
};

// Hobbies Grid Component
const HobbiesGrid = () => {
  return (
    <section className={styles.hobbies}>
      <div className={styles.row1}>
        <HobbyItem imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bed3230bb80b500a0f2f5e5169ec5ea621e9b333?placeholderIfAbsent=true&apiKey=1391c7d4f5754fa3b2f95c32393f195e" alt="Hobby 1" />
        <HobbyItem imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/807372c33d5aa8c5a140e001159af21c75e529eb?placeholderIfAbsent=true&apiKey=1391c7d4f5754fa3b2f95c32393f195e" alt="Hobby 2" />
      </div>
      <div className={styles.row2}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3059add63d498a110e7b37f5fb5c48258e6c1d57?placeholderIfAbsent=true&apiKey=1391c7d4f5754fa3b2f95c32393f195e" alt="Hobby 3" className={styles.img9} />
        <AddHobbyButton />
      </div>
    </section>
  );
};

// Navigation Bar Component
export const NavigationBar = () => {
  return (
    <nav>
      <img className={styles.NavigationBar} src={navBarImage} alt="Navigation bar" />
    </nav>
  );
};

// Main HobbiesScreen Component
function HobbiesScreen() {
  return (
    <main className={styles.hobbiesScreen}>
      <div className={styles.div}>
        <StatusBar />
        <UserProfile />
        <CoinShopSection />
      </div>
      <h2 className={styles.myHobbies}>My Hobbies</h2>
      <HobbiesGrid />
      <NavigationBar />
    </main>
  );
}

export default HobbiesScreen;