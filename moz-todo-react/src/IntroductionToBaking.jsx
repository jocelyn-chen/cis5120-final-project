import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ModuleStyles.module.css";
import { StatusBar } from "./HobbiesScreen";
import potato from './assets/potato plain.png';

function IntroductionToBaking() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/baking/ingredients-tools');
  };

  const handleBack = () => {
    navigate('/baking');
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
          <h2 className={styles.moduleTitle}>Introduction to Baking</h2>
        </div>
      </header>

      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div className={styles.progressIndicator} style={{ width: '12.5%' }}></div>
      </div>

      {/* Back Button */}
      <div className={styles.backButtonContainer}>
        <button className={styles.backButton} onClick={handleBack}>
          <span className={styles.backIcon}>←</span>
        </button>
      </div>

      {/* Main Content */}
      <main className={styles.moduleContent}>
        <h1 className={styles.welcomeHeading}>Welcome to Baking!</h1>

        <div className={styles.speechBubble}>
          <p>
            Baking is more than just mixing ingredients. It's a creative skill
            that lets you turn simple pantry staples into yummy treats!
          </p>
        </div>

        <img src={potato} alt="Potato avatar" className={styles.avatarImage} />

        <section className={styles.learningSection}>
          <h2>What You'll Learn in This Module:</h2>
          <ul className={styles.checkList}>
            <li className={`${styles.checkItem} ${styles.checkYellow}`}>
              Basic Ingredients & Baking Tools
            </li>
            <li className={`${styles.checkItem} ${styles.checkBlue}`}>
              Measuring & Mixing Techniques
            </li>
            <li className={`${styles.checkItem} ${styles.checkPink}`}>
              Oven and Temperature Essentials
            </li>
          </ul>
        </section>
      </main>

      {/* Next Button */}
      <div className={styles.nextButtonContainer}>
        <button className={styles.nextButton} onClick={handleNext}>
          Next
        </button>
      </div>

      {/* Progress Dots */}
      <div className={styles.progressDots}>
        <span className={`${styles.dot} ${styles.active}`}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    </div>
  );
}

export default IntroductionToBaking;