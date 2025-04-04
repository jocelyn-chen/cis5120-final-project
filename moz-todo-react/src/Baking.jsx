import React from "react";
import styles from "./Baking.module.css";
import { StatusBar, NavigationBar } from "./HobbiesScreen";

const BakingTitle = () => {
    return (
        <header className={styles.bakingtitle}>
            <StatusBar/>
            <div className={styles.titleContainer}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/aed7d15250214735c3199caa01b418e11bcb8707?placeholderIfAbsent=true&apiKey=1391c7d4f5754fa3b2f95c32393f195e" alt="Baking icon" className={styles.img} />
                <h2 className={styles.myHobbies}>Baking</h2>
            </div>
        </header>
      );
  }

export const BakingBackground = () => {
    return (
        <div className={styles.bakingBackground}>

        </div>
    )
}
const RoadmapIcon = () => {

}

function BakingRoadmap() {
    return(
        <div>
            <BakingTitle/>
            <BakingBackground/>
            <NavigationBar/>
        </div>
        
    )   
}

export default BakingRoadmap;