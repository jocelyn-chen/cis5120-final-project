import React from "react";
import styles from "./Baking.module.css";
import { StatusBar, NavigationBar } from "./HobbiesScreen";
import roadmapIconGrey from './assets/roadmap icon grey.png';
import roadmapIconBlue from './assets/roadmap icon dark blue.png';
import roadmapIconCyan from './assets/roadmap icon cyan.png';

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

const RoadmapIcon = ({ title, color, style }) => {
    const iconColors = {"grey": roadmapIconGrey, "blue": roadmapIconBlue, "cyan": roadmapIconCyan}
    return (
        <div className={styles.roadmapIconSet} style={style}>
            <img src={iconColors[color]} alt="Roadmap icon"></img>
            <p className={styles.roadmapIconText}>
                {title}
            </p>
        </div>
    )

}

const Roadmap = () => {
    return (
        <div className={styles.bakingBackground}>
            <RoadmapIcon title="Intro" color="cyan" style={{ top: '700px', left: '200px' }}/>
            <RoadmapIcon title="Chocolate Chip Cookies" color="grey" style={{ top: '500px', left: '200px' }}/>
        </div>
    )
}

function BakingRoadmap() {
    return(
        <div>
            <BakingTitle/>
            <Roadmap/>
            <NavigationBar/>
        </div>
        
    )   
}

export default BakingRoadmap;