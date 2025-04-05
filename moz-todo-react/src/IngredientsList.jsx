import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ModuleStyles.module.css";
import { StatusBar } from "./HobbiesScreen";

function IngredientsList() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/baking/tools-list');
  };

  const handlePrevious = () => {
    navigate('/baking/ingredients-tools');
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
          <h2 className={styles.moduleTitle}>Ingredients List</h2>
        </div>
      </header>

      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div className={styles.progressIndicator} style={{ width: '60%' }}></div>
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
          <li className={styles.ingredientItem}>
            All-Purpose Flour: 5 lb (2.26 kg)
          </li>
          <li className={styles.ingredientItem}>
            Granulated Sugar: 4 lb (1.81 kg)
          </li>
          <li className={styles.ingredientItem}>
            Dark Brown Sugar: 2 lb (0.9 kg)
          </li>
          <li className={styles.ingredientItem}>
            Light Brown Sugar: 2 lb (0.9 kg)
          </li>
          <li className={styles.ingredientItem}>
            Powdered Sugar: 2 lb (0.9 kg)
          </li>
          <li className={styles.ingredientItem}>
            Unsalted Butter: 2 lb (4 sticks / 908 g)
          </li>
          <li className={styles.ingredientItem}>
            Vegetable Oil: 48 oz (1.42 L)
          </li>
          <li className={styles.ingredientItem}>
            Baking Powder: 8 oz (226 g)
          </li>
          <li className={styles.ingredientItem}>
            Baking Soda: 1 lb (454 g)
          </li>
          <li className={styles.ingredientItem}>
            Eggs: 1 dozen large eggs
          </li>
          <li className={styles.ingredientItem}>
            Salt: 26 oz (737 g)
          </li>
          <li className={styles.ingredientItem}>
            Milk: 1 gallon (3.78 L)
          </li>
          <li className={styles.ingredientItem}>
            Vanilla Extract: 2 oz (59 mL)
          </li>
        </ul>

        <button className={styles.completedButton}>
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

export default IngredientsList;