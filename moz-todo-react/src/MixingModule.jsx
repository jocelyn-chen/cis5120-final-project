import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ModuleStyles.module.css";
import { StatusBar } from "./HobbiesScreen";
import potato from './assets/potato plain.png';

function MixingModule() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/baking/oven-temperature'); // Assuming this is the next module
  };

  const handlePrevious = () => {
    navigate('/baking/measuring');
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
          <h2 className={styles.moduleTitle}>Mixing</h2>
        </div>
      </header>

      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div className={styles.progressIndicator} style={{ width: '75%' }}></div>
      </div>

      {/* Back Button */}
      <div className={styles.backButtonContainer}>
        <button className={styles.backButton} onClick={handlePrevious}>
          <span className={styles.backIcon}>←</span>
        </button>
      </div>

      {/* Main Content */}
      <main className={styles.moduleContent}>
        <h1 className={styles.sectionHeading}>Key to Mixing</h1>

        <div className={styles.speechBubble}>
          <p>
            Mixing techniques can also play a big role when it comes to
            baking success. It's important to be aware of the following
            when mixing.
          </p>
        </div>

        <img src={potato} alt="Potato avatar" className={styles.avatarImage} />

        <div className={styles.learningSection}>
          <ul className={styles.checkList}>
            <li className={`${styles.checkItem} ${styles.checkBlue}`}>
              Overmixing can lead to tough texture
            </li>
            <li className={`${styles.checkItem} ${styles.checkBlue}`}>
              Undermixing can lead to clumps
            </li>
            <li className={`${styles.checkItem} ${styles.checkBlue}`}>
              Whisking is used to add air
            </li>
            <li className={`${styles.checkItem} ${styles.checkBlue}`}>
              Folding is used to mix delicate batters
            </li>
            <li className={`${styles.checkItem} ${styles.checkBlue}`}>
              Beating is intense and results in smooth end products
            </li>
          </ul>
        </div>

        <div className={styles.demonstrationBox} style={{ margin: "20px 0", padding: "15px", backgroundColor: "#f8f9fa", borderRadius: "10px", borderLeft: "5px solid #ff879d" }}>
          <h3 style={{ margin: "0 0 10px 0", color: "#ff879d" }}>When to use each technique:</h3>
          <ul style={{ paddingLeft: "20px", margin: "0" }}>
            <li><strong>Whisking:</strong> Eggs, cream, incorporating dry ingredients</li>
            <li><strong>Folding:</strong> Meringues, soufflés, delicate batters</li>
            <li><strong>Beating:</strong> Creaming butter and sugar, thick batters</li>
            <li><strong>Stirring:</strong> General combining of ingredients</li>
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
        <span className={styles.dot}></span>
        <span className={`${styles.dot} ${styles.active}`}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>

    </div>
  );
}

export default MixingModule;