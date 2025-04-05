import React from "react";
import styles from "./Baking.module.css";
import { useState } from "react";
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
            <StatusBar />
            <div className={styles.titleContainer}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/aed7d15250214735c3199caa01b418e11bcb8707?placeholderIfAbsent=true&apiKey=1391c7d4f5754fa3b2f95c32393f195e" alt="Baking icon" className={styles.img} />
                <h2 className={styles.myHobbies}>Baking</h2>
                <img src={listIcon} alt="list icon" style={{ width: '24px', position: 'absolute', left: '360px' }}></img>
            </div>
        </header>
    );
};

const RoadmapIcon = ({ title, color, style, moduleURL = "/baking/introduction", isCompleted = false }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleClick = () => {
        console.log(`Opening ${title} module popup`);
        openPopup();
    };

    const getIconColor = () => {
        if (isCompleted) return "cyan";
        return color;
    };

    const iconColors = {
        "grey": roadmapIconGrey,
        "blue": roadmapIconBlue,
        "cyan": roadmapIconCyan
    };

    return (
        <div>
            <button onClick={handleClick} className={styles.roadmapIconSet} style={style}>
                <img src={iconColors[getIconColor()]} alt="Roadmap icon"></img>
                <p className={styles.roadmapIconText}>
                    {title}
                </p>
            </button>
            <Popup
                isOpen={isPopupOpen}
                onClose={closePopup}
                moduleName={title}
                moduleURL={moduleURL}
            />
        </div>
    );
};

const ShopSection = () => {
    return (
        <div className={styles.storesection}>
            <div className={styles.coinamount}>
                <img src={coinIcon} alt="coin icon" style={{ width: '16px' }}></img>
                <p style={{ margin: '0px' }}>250</p>
            </div>
            <button className={styles.shopping}>
                <p style={{ margin: '0px' }}>Shop</p>
            </button>
        </div>
    );
};

const Roadmap = () => {
    // Track completed modules
    const completedModules = ["Intro"];

    const isModuleCompleted = (moduleName) => {
        return completedModules.includes(moduleName);
    };

    return (
        <div className={styles.bakingBackground}>
            <RoadmapIcon
                title="Intro"
                color="grey"
                style={{ top: '700px', left: '200px' }}
                moduleURL="/baking/introduction"
                isCompleted={isModuleCompleted("Intro")}
            />
            <RoadmapIcon
                title="Ingredients & Tools"
                color="grey"
                style={{ top: '610px', left: '300px' }}
                moduleURL="/baking/ingredients-tools"
                isCompleted={isModuleCompleted("Ingredients & Tools")}
            />
            <RoadmapIcon
                title="Chocolate Chip Cookies"
                color="grey"
                style={{ top: '550px', left: '200px' }}
                moduleURL="/baking/cookies"
                isCompleted={isModuleCompleted("Chocolate Chip Cookies")}
            />
            <RoadmapIcon
                title="Cheesecake"
                color="grey"
                style={{ top: '350px', left: '200px' }}
                moduleURL="/baking/cheesecake"
                isCompleted={isModuleCompleted("Cheesecake")}
            />
            <RoadmapIcon
                title="Basque Cheesecake"
                color="grey"
                style={{ top: '250px', left: '325px' }}
                moduleURL="/baking/basque-cheesecake"
                isCompleted={isModuleCompleted("Basque Cheesecake")}
            />
            <RoadmapIcon
                title="Souffle Cheesecake"
                color="grey"
                style={{ top: '250px', left: '75px' }}
                moduleURL="/baking/souffle-cheesecake"
                isCompleted={isModuleCompleted("Souffle Cheesecake")}
            />
            <RoadmapIcon
                title="Meringue"
                color="grey"
                style={{ top: '475px', left: '50px' }}
                moduleURL="/baking/meringue"
                isCompleted={isModuleCompleted("Meringue")}
            />
            <RoadmapIcon
                title="Cake"
                color="grey"
                style={{ top: '375px', left: '50px' }}
                moduleURL="/baking/cake"
                isCompleted={isModuleCompleted("Cake")}
            />
            <RoadmapIcon
                title="Pie"
                color="grey"
                style={{ top: '375px', left: '350px' }}
                moduleURL="/baking/pie"
                isCompleted={isModuleCompleted("Pie")}
            />
            <RoadmapIcon
                title="Brownies"
                color="grey"
                style={{ top: '475px', left: '350px' }}
                moduleURL="/baking/brownies"
                isCompleted={isModuleCompleted("Brownies")}
            />
            <img className={styles.potato} src={potato} alt="Potato avatar" style={{ top: '650px', left: '200px' }}></img>
            <ShopSection />
        </div>
    );
};

function BakingRoadmap() {
    return (
        <div>
            <BakingTitle />
            <Roadmap />
            <NavigationBar />
        </div>
    );
}

export default BakingRoadmap;