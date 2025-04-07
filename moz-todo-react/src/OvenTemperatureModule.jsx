import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ModuleStyles.module.css";
import { StatusBar } from "./HobbiesScreen";
import potato from './assets/potato plain.png';

function OvenTemperatureModule() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/baking/end-introduction');
  };

  const handlePrevious = () => {
    navigate('/baking/mixing'); // Assuming mixing is the previous page
  };

  return (
    <div className={styles.moduleContainer}>
      {/* Header */}
      <header className={styles.moduleHeader}>
        <StatusBar />
        <div className={styles.titleContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aed7d15250214735c3199caa01b418e11bcb8707?placeholderIfAbsent=true&apiKey=1391c7d4f5754fa3b2f95c32393f195e"
            alt="Cupcake icon"
            className={styles.titleIcon}
          />
          <h2 className={styles.moduleTitle}>Oven & Temperature</h2>
        </div>
      </header>

      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div className={styles.progressIndicator} style={{ width: '80%' }}></div>
      </div>

      {/* Back Button */}
      <div className={styles.backButtonContainer}>
        <button className={styles.backButton} onClick={handlePrevious}>
          <span className={styles.backIcon}>←</span>
        </button>
      </div>

      {/* Main Content */}
      <main className={styles.moduleContent}>
        <h1 className={styles.sectionHeading}>Oven & Temperature</h1>

        <div className={styles.speechBubble}>
          <p>
            Your oven is the heart of baking. Knowing how to use it properly
            is the key to making all sorts of delicious baked goods!
          </p>
        </div>

        <img src={potato} alt="Potato avatar" className={styles.avatarImage} />

        <div className={styles.learningSection}>
          <ul className={styles.checkList}>
            <li className={`${styles.checkItem} ${styles.checkYellow}`}>
              Always preheat your oven before starting to ensure even cooking
            </li>
            <li className={`${styles.checkItem} ${styles.checkYellow}`}>
              Different recipes may require different types of pans, such as nonstick, glass,
              or metal, which changes baking times
            </li>
            <li className={`${styles.checkItem} ${styles.checkYellow}`}>
              If you are using a convection oven, lower the temperature by 25°F/15°C
            </li>
          </ul>
        </div>
      </main>

      {/* Navigation Buttons */}
      <div className={styles.navigationButtons}>
        <button className={styles.previousButton} onClick={handlePrevious}>
          Previous
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default OvenTemperatureModule;