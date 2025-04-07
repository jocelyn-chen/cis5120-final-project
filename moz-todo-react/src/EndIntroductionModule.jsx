import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ModuleStyles.module.css";
import { StatusBar } from "./HobbiesScreen";
import potato from './assets/potato plain.png';

function EndIntroductionModule() {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate('/baking'); // Return to the baking roadmap
  };

  const handlePrevious = () => {
    navigate('/baking/oven-temperature');
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
          <h2 className={styles.moduleTitle}>End of Introduction</h2>
        </div>
      </header>

      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div className={styles.progressIndicator} style={{ width: '100%' }}></div>
      </div>

      {/* Back Button */}
      <div className={styles.backButtonContainer}>
        <button className={styles.backButton} onClick={handlePrevious}>
          <span className={styles.backIcon}>←</span>
        </button>
      </div>

      {/* Main Content */}
      <main className={styles.moduleContent}>
        <h1 className={styles.sectionHeading}>End of Module</h1>

        <div className={styles.speechBubble}>
          <p>
            Congratulations! You made it to the end of this first lesson.
            Now you should feel adequately prepared to start
            tackling some simple recipes!
          </p>
        </div>

        <img src={potato} alt="Potato avatar" className={styles.avatarImage} />

        <div className={styles.learningSection} style={{ textAlign: 'center' }}>
          <p>Please revisit this module to review or go over anything one more time if needed!</p>

          <h2 style={{ marginTop: '30px', fontSize: '24px', fontWeight: 'bold' }}>Coming Up Next:</h2>

          <div className={`${styles.checkItem} ${styles.checkYellow}`} style={{ marginTop: '20px', justifyContent: 'center' }}>
            Chocolate Chip Cookies
          </div>
        </div>
      </main>

      {/* Navigation Buttons */}
      <div className={styles.navigationWrapper}>
        <div className={styles.navigationButtons}>
          <button className={styles.previousButton} onClick={handlePrevious}>Previous</button>
          <button className={styles.nextButton} onClick={handleFinish}>Finish</button>
        </div>
      </div>

      {/* Progress Dots */}
      <div className={styles.progressDots}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={`${styles.dot} ${styles.active}`}></span>
      </div>

    </div>
  );
}

export default EndIntroductionModule;