import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ModuleStyles.module.css";
import { StatusBar } from "./HobbiesScreen";

function IngredientsList() {
  const navigate = useNavigate();

  const ingredients = [
    "All-Purpose Flour: 5 lb (2.26 kg)",
    "Granulated Sugar: 4 lb (1.81 kg)",
    "Dark Brown Sugar: 2 lb (0.9 kg)",
    "Light Brown Sugar: 2 lb (0.9 kg)",
    "Powdered Sugar: 2 lb (0.9 kg)",
    "Unsalted Butter: 2 lb (4 sticks / 908 g)",
    "Vegetable Oil: 48 oz (1.42 L)",
    "Baking Powder: 8 oz (226 g)",
    "Baking Soda: 1 lb (454 g)",
    "Eggs: 1 dozen large eggs",
    "Salt: 26 oz (737 g)",
    "Milk: 1 gallon (3.78 L)",
    "Vanilla Extract: 2 oz (59 mL)",
  ];

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (item) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const handleNext = () => {
    navigate('/baking/tools-list');
  };

  const handlePrevious = () => {
    navigate('/baking/ingredients-tools');
  };

  const allChecked =
    Object.keys(checkedItems).length === ingredients.length &&
    Object.values(checkedItems).every(Boolean);

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
          <h2 className={styles.moduleTitle}>Ingredients List</h2>
        </div>
      </header>

      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div className={styles.progressIndicator} style={{ width: '37.5%' }}></div>
      </div>

      {/* Back Button */}
      <div className={styles.backButtonContainer}>
        <button className={styles.backButton} onClick={handlePrevious}>
          <span className={styles.backIcon}>←</span>
        </button>
      </div>

      {/* Main Content */}
      <main className={styles.moduleContent}>
        <h1 className={styles.sectionHeading} style={{ color: "#03c7e1" }}>Ingredients</h1>

        <ul className={styles.checkList}>
          {ingredients.map((item, index) => (
            <li key={index} className={styles.ingredientItem}>
              <label>
                <input
                  type="checkbox"
                  checked={checkedItems[item] || false}
                  onChange={() => handleCheckboxChange(item)}
                />
                {" "}{item}
              </label>
            </li>
          ))}
        </ul>

        <button
          className={styles.completedButton}
          disabled={!allChecked}
          onClick={handleNext}
        >
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
        <span className={`${styles.dot} ${styles.active}`}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    </div>
  );
}

export default IngredientsList;
