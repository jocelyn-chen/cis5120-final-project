import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ModuleStyles.module.css";
import { StatusBar } from "./HobbiesScreen";
import potato from './assets/potato plain.png';

function MeasuringModule() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/baking/mixing');
  };

  const handlePrevious = () => {
    navigate('/baking/tools-list'); // Assuming tools list is the previous page
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
          <h2 className={styles.moduleTitle}>Measuring</h2>
        </div>
      </header>

      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div className={styles.progressIndicator} style={{ width: '62.5%' }}></div>
      </div>

      {/* Back Button */}
      <div className={styles.backButtonContainer}>
        <button className={styles.backButton} onClick={handlePrevious}>
          <span className={styles.backIcon}>←</span>
        </button>
      </div>

      {/* Main Content */}
      <main className={styles.moduleContent}>
        <h1 className={styles.sectionHeading}>Key to Measuring</h1>

        <div className={styles.speechBubble}>
          <p>
            Baking is a science, which means accuracy matters!
            Even a small miscalculation can affect the texture and
            flavor of your final product.
          </p>
        </div>

        <img src={potato} alt="Potato avatar" className={styles.avatarImage} />

        <div className={styles.learningSection}>
          <ul className={styles.checkList}>
            <li className={`${styles.checkItem} ${styles.checkYellow}`}>
              Dry measuring cups for dry ingredients such as flour and sugar
            </li>
            <li className={`${styles.checkItem} ${styles.checkYellow}`}>
              Liquid measuring cups for wet ingredients such as milk or oil
            </li>
            <li className={`${styles.checkItem} ${styles.checkYellow}`}>
              Kitchen scale for absolutely precise measurements (grams/ml)
            </li>
          </ul>
        </div>

        <div className={styles.tipBox} style={{ margin: "20px 0", padding: "15px", backgroundColor: "#f8f9fa", borderRadius: "10px", borderLeft: "5px solid #03c7e1" }}>
          <h3 style={{ margin: "0 0 10px 0", color: "#03c7e1" }}>Pro Tips:</h3>
          <ul style={{ paddingLeft: "20px", margin: "0" }}>
            <li>Spoon and level flour instead of scooping directly with the measuring cup</li>
            <li>Use the appropriate measuring tools for each ingredient type</li>
            <li>Place liquid measuring cups on a flat surface and check at eye level</li>
          </ul>
        </div>
      </main>

      {/* Navigation Buttons */}
      <div className={styles.navigationWrapper}>
        <div className={styles.navigationButtons}>
          <button className={styles.previousButton} onClick={handlePrevious}>Previous</button>
          <button className={styles.nextButton} onClick={handleNext}>Next</button>
        </div>
      </div>

      {/* Progress Dots */}
      <div className={styles.progressDots}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={`${styles.dot} ${styles.active}`}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>

    </div>
  );
}

export default MeasuringModule;