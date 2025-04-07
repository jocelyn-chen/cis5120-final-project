import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ModuleStyles.module.css";
import { StatusBar } from "./HobbiesScreen";
import potato from './assets/potato plain.png';

function IngredientsTools() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/baking/ingredients-list'); // Navigate to the ingredients list
  };

  const handlePrevious = () => {
    navigate('/baking/introduction');
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
          <h2 className={styles.moduleTitle}>Ingredients & Tools</h2>
        </div>
      </header>

      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div className={styles.progressIndicator} style={{ width: '40%' }}></div>
      </div>

      {/* Back Button */}
      <div className={styles.backButtonContainer}>
        <button className={styles.backButton} onClick={handlePrevious}>
          <span className={styles.backIcon}>←</span>
        </button>
      </div>

      {/* Main Content */}
      <main className={styles.moduleContent}>
        <h1 className={styles.sectionHeading}>Ingredients & Tools</h1>

        <div className={styles.speechBubble}>
          <p>
            Before you start, having the right ingredients and tools will make the
            process easier and more fun. Next up, we have a list of essentials!
          </p>
        </div>

        <img src={potato} alt="Potato avatar" className={styles.avatarImage} />

        <section className={styles.essentialsSection}>
          <h2>Key Things Needed:</h2>

          <div className={styles.essentialItem}>
            <h3 className={styles.ingredientsHeading}>
              Ingredients - These form the base of our recipes
            </h3>
          </div>

          <div className={styles.essentialItem}>
            <h3 className={styles.toolsHeading}>
              Tools - Allows us to use our ingredients to make baked goods
            </h3>
          </div>
        </section>
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

      {/* Progress Dots */}
      <div className={styles.progressDots}>
        <span className={styles.dot}></span>
        <span className={`${styles.dot} ${styles.active}`}></span>
        <span className={styles.dot}></span>
      </div>
    </div>
  );
}

export default IngredientsTools;