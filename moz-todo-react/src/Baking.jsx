import React from "react";
import styles from "./Baking.module.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
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
    const iconColors = { "grey": roadmapIconGrey, "blue": roadmapIconBlue, "cyan": roadmapIconCyan }

    const location = useLocation();
    const currentPath = location.pathname;

    const moduleURL = currentPath + '/' + title;
    return (
        <div>
            <button onClick={handleClick} className={styles.roadmapIconSet} style={style}>
                <img src={iconColors[getIconColor()]} alt="Roadmap icon"></img>
                <p className={styles.roadmapIconText}>
                    {title}
                </p>
            </button>

            <Popup isOpen={isPopupOpen} onClose={closePopup} moduleName={title} moduleURL={moduleURL}></Popup>
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
            {/* chocolate chip cookies to cake */}
            <svg xmlns="http://www.w3.org/2000/svg" width="154" height="135" viewBox="0 0 154 135" fill="none"
                style={{ position: "absolute", left: "50px", top: "380px" }}>
                <path d="M152 133C152 -3.88764 2 73.633 2 2" stroke="#C2C2C2" strokeWidth="3" strokeMiterlimit="2.3662" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 6" />
            </svg>
            {/* chocolate chip cookies to pie */}
            <svg xmlns="http://www.w3.org/2000/svg" width="153" height="138" viewBox="0 0 153 138" fill="none"
                style={{ position: "absolute", left: "200px", top: "380px" }}>
                <path d="M2 136C2 -4.02247 151 75.2734 151 2" stroke="#C2C2C2" stroke-width="3" stroke-miterlimit="2.3662" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 6" />
            </svg>
            {/* intro to chocolate chip cookies */}
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="152" viewBox="0 0 4 152" fill="none"
                style={{ position: "absolute", left: "200px", top: "540px" }}>
                <path d="M2 150V2" stroke="#C2C2C2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 6" />
            </svg>
            {/* chocolate chip cookies to meringue */}
            <svg xmlns="http://www.w3.org/2000/svg" width="156" height="40" viewBox="0 0 156 40" fill="none"
                style={{ position: "absolute", left: "50px", top: "480px" }}>
                <path d="M154 38C154 2 2.00002 41.8769 2 2" stroke="#C2C2C2" stroke-width="3" stroke-miterlimit="2.3662" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 6" />
            </svg>
            {/* chocolate chip cookies to brownies */}
            <svg xmlns="http://www.w3.org/2000/svg" width="149" height="39" viewBox="0 0 149 39" fill="none"
                style={{ position: "absolute", left: "200px", top: "480px" }}>
                <path d="M2 37C2 2 147 40.7692 147 2" stroke="#C2C2C2" stroke-width="3" stroke-miterlimit="2.3662" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 6" />
            </svg>
            {/* chocolate chip cookies to cheesecake */}
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="172" viewBox="0 0 4 172" fill="none"
                style={{ position: "absolute", left: "200px", top: "350px" }}>
                <path d="M2 170V2" stroke="#C2C2C2" stroke-width="3" stroke-miterlimit="2.3662" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 6" />
            </svg>
            {/* cheesecake to souffle cheesecake */}
            <svg xmlns="http://www.w3.org/2000/svg" width="99" height="89" viewBox="0 0 99 89" fill="none"
                style={{ position: "absolute", left: "102px", top: "227px" }}>
                <path d="M97 87C97 2 2.00001 96.1538 2 2" stroke="#C2C2C2" stroke-width="3" stroke-miterlimit="2.3662" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 6" />
            </svg>
            {/* cheesecake to basque cheesecake */}
            <svg xmlns="http://www.w3.org/2000/svg" width="99" height="90" viewBox="0 0 99 90" fill="none"
                style={{ position: "absolute", left: "200", top: "227px" }}>
                <path d="M2 88C2 2 97 97.2615 97 2" stroke="#C2C2C2" stroke-width="3" stroke-miterlimit="2.3662" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 6" />
            </svg>
            <RoadmapIcon title="Intro" color="cyan" style={{ top: '700px', left: '200px' }} />
            <RoadmapIcon title="Chocolate Chip Cookies" color="grey" style={{ top: '550px', left: '200px' }} />
            <RoadmapIcon title="Cheesecake" color="grey" style={{ top: '350px', left: '200px' }} />
            <RoadmapIcon title="Basque Cheesecake" color="grey" style={{ top: '225px', left: '300px' }} />
            <RoadmapIcon title="Souffle Cheesecake" color="grey" style={{ top: '225px', left: '100px' }} />
            <RoadmapIcon title="Meringue" color="grey" style={{ top: '475px', left: '50px' }} />
            <RoadmapIcon title="Cake" color="grey" style={{ top: '375px', left: '50px' }} />
            <RoadmapIcon title="Pie" color="grey" style={{ top: '375px', left: '350px' }} />
            <RoadmapIcon title="Brownies" color="grey" style={{ top: '475px', left: '350px' }} />
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