import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ModuleStyles.module.css";
import { StatusBar } from "./HobbiesScreen";

function ToolsList() {
  const navigate = useNavigate();

  const tools = [
    "Measuring Cups & Spoons",
    "Kitchen Scale",
    "Mixing Bowls (Set of 3)",
    "Whisk",
    "Spatula",
    "Wooden Spoon",
    "Stand/Electric Hand Mixer",
    "Baking Sheets",
    "Baking Pans",
    "Oven/Toaster Oven",
    "Parchment Paper",
    "Sifter",
    "Rolling Pin",
  ];

  const [checkedTools, setCheckedTools] = useState({});

  const handleCheckboxChange = (tool) => {
    setCheckedTools((prev) => ({
      ...prev,
      [tool]: !prev[tool],
    }));
  };

  const handleNext = () => {
    navigate('/baking/measuring');
  };

  const handlePrevious = () => {
    navigate('/baking/ingredients-list');
  };

  const allChecked =
    Object.keys(checkedTools).length === tools.length &&
    Object.values(checkedTools).every(Boolean);

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
        <div className={styles.progressIndicator} style={{ width: '50%' }}></div>
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
          {tools.map((tool, index) => (
            <li key={index} className={styles.toolItem}>
              <label>
                <input
                  type="checkbox"
                  checked={checkedTools[tool] || false}
                  onChange={() => handleCheckboxChange(tool)}
                />
                {" "}{tool}
              </label>
            </li>
          ))}
        </ul>

        <button className={styles.completedButton} style={{ backgroundColor: "#ff879d" }}>
          I have everything I need!
        </button>
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
        <span className={`${styles.dot} ${styles.active}`}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    </div>
  );
}

export default ToolsList;
