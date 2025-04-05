import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ModuleStyles.module.css";
import { StatusBar } from "./HobbiesScreen";

function ToolsList() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/baking/measuring');
  };

  const handlePrevious = () => {
    navigate('/baking/ingredients-list');
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
          <h2 className={styles.moduleTitle}>Tools List</h2>
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
        <h1 className={styles.sectionHeading} style={{ color: "#ff879d" }}>Tools</h1>

        <ul className={styles.checkList}>
          <li className={styles.toolItem}>
            Measuring Cups & Spoons
          </li>
          <li className={styles.toolItem}>
            Kitchen Scale
          </li>
          <li className={styles.toolItem}>
            Mixing Bowls (Set of 3)
          </li>
          <li className={styles.toolItem}>
            Whisk
          </li>
          <li className={styles.toolItem}>
            Spatula
          </li>
          <li className={styles.toolItem}>
            Wooden Spoon
          </li>
          <li className={styles.toolItem}>
            Stand/Electric Hand Mixer
          </li>
          <li className={styles.toolItem}>
            Baking Sheets
          </li>
          <li className={styles.toolItem}>
            Baking Pans
          </li>
          <li className={styles.toolItem}>
            Oven/Toaster Oven
          </li>
          <li className={styles.toolItem}>
            Parchment Paper
          </li>
          <li className={styles.toolItem}>
            Sifter
          </li>
          <li className={styles.toolItem}>
            Rolling Pin
          </li>
        </ul>

        <button className={styles.completedButton} style={{ backgroundColor: "#ff879d" }}>
          I have everything I need!
        </button>
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

export default ToolsList;