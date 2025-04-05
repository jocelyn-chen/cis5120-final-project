import React from "react";
import styles from "./Baking.module.css";
import {useState} from "react";
import {useLocation} from "react-router-dom";
import { StatusBar, NavigationBar } from "./HobbiesScreen";
import Popup from "./Popup";

import roadmapIconGrey from './assets/roadmap icon grey.png';
import roadmapIconBlue from './assets/roadmap icon dark blue.png';
import roadmapIconCyan from './assets/roadmap icon cyan.png';

import listIcon from './assets/listicon.png';
import coinIcon from './assets/coin.png';

import potato from './assets/potato plain.png';

const BakingTitle = () => {
    return (
        <header className={styles.bakingtitle}>
            <StatusBar/>
            <div className={styles.titleContainer}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/aed7d15250214735c3199caa01b418e11bcb8707?placeholderIfAbsent=true&apiKey=1391c7d4f5754fa3b2f95c32393f195e" alt="Baking icon" className={styles.img} />
                <h2 className={styles.myHobbies}>Baking</h2>
                <img src={listIcon} alt="list icon" style={{width: '24px', position: 'absolute', left: '360px'}}></img>
            </div>
        </header>
      );
  }

const RoadmapIcon = ({ title, color, style }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleClick = () => {
        console.log("Showing module popup");
        openPopup();
    };
    const iconColors = {"grey": roadmapIconGrey, "blue": roadmapIconBlue, "cyan": roadmapIconCyan}

    const location = useLocation();
    const currentPath = location.pathname;

    const moduleURL = currentPath+'/'+title;
    return (
        <div>
            <button onClick={handleClick} className={styles.roadmapIconSet} style={style}>
                <img src={iconColors[color]} alt="Roadmap icon"></img>
                <p className={styles.roadmapIconText}>
                    {title}
                </p>
            </button>

            <Popup isOpen={isPopupOpen} onClose={closePopup} moduleName={title} moduleURL={moduleURL}></Popup>
        </div>
    )

}

const ShopSection = () => {
    return (
        <div className={styles.storesection}>
            <div className={styles.coinamount}>
            <img src={coinIcon} alter="coin icon" style={{width: '16px'}}></img>
            <p style={{margin: '0px'}}>250</p>
            </div>
            <button className={styles.shopping}>
            <p style={{margin: '0px'}}>Shop</p>
            </button>
        </div>
    )
}

const Roadmap = () => {
    return (
        <div className={styles.bakingBackground}>
            <RoadmapIcon title="Intro" color="cyan" style={{ top: '700px', left: '200px' }}/>
            <RoadmapIcon title="Chocolate Chip Cookies" color="grey" style={{ top: '550px', left: '200px' }}/>
            <RoadmapIcon title="Cheesecake" color="grey" style={{ top: '350px', left: '200px' }}/>
            <RoadmapIcon title="Basque Cheesecake" color="grey" style={{ top: '250px', left: '325px' }}/>
            <RoadmapIcon title="Souffle Cheesecake" color="grey" style={{ top: '250px', left: '75px' }}/>
            <RoadmapIcon title="Meringue" color="grey" style={{ top: '475px', left: '50px' }}/>
            <RoadmapIcon title="Cake" color="grey" style={{ top: '375px', left: '50px' }}/>
            <RoadmapIcon title="Pie" color="grey" style={{ top: '375px', left: '350px' }}/>
            <RoadmapIcon title="Brownies" color="grey" style={{ top: '475px', left: '350px' }}/>
            <img className={styles.potato} src={potato} alt="Potato avatar" style={{top: '650px', left: '200px'}}></img>

            <ShopSection/>
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