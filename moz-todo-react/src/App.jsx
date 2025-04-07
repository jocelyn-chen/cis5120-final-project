import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import MobileAppLayout from './layouts/MobileAppLayout';
import HobbiesScreen from './HobbiesScreen';
import HomeScreen from './pages/HomeScreen';
import BakingRoadmap from './Baking';
import IntroductionToBaking from './IntroductionToBaking';
import IngredientsTools from './IngredientsTools';
import IngredientsList from './IngredientsList';
import ToolsList from './ToolsList';
import MeasuringModule from './MeasuringModule';
import MixingModule from './MixingModule';
import OvenTemperatureModule from './OvenTemperatureModule';
import EndIntroductionModule from './EndIntroductionModule';

function App() {
  return (
    // <Router>
    //   {/* Home screen is wrapped in MobileAppLayout */}
    //   <MobileAppLayout>
    //     <Routes>
    //       <Route path="/" element={<HomeScreen />} />
    //     </Routes>
    //   </MobileAppLayout>

    //   {/* Baking module routes */}
    //   <Routes>
    //     <Route path="/baking" element={<BakingRoadmap />} />
    //     <Route path="/baking/Intro" element={<IntroductionToBaking />} />
    //     <Route path="/baking/ingredients-tools" element={<IngredientsTools />} />
    //     <Route path="/baking/ingredients-list" element={<IngredientsList />} />
    //     <Route path="/baking/tools-list" element={<ToolsList />} />
    //     <Route path="/baking/measuring" element={<MeasuringModule />} />
    //     <Route path="/baking/mixing" element={<MixingModule />} />
    //     <Route path="/baking/oven-temperature" element={<OvenTemperatureModule />} />
    //     <Route path="/baking/end-introduction" element={<EndIntroductionModule />} />
    //     {/* More routes will be added for other modules */}
    //   </Routes>
    // </Router>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MobileAppLayout>
              <HomeScreen />
            </MobileAppLayout>
          }
        />

        {/* Other routes NOT wrapped in MobileAppLayout */}
        <Route path="/baking" element={<BakingRoadmap />} />
        <Route path="/baking/Intro" element={<IntroductionToBaking />} />
        <Route path="/baking/ingredients-tools" element={<IngredientsTools />} />
        <Route path="/baking/ingredients-list" element={<IngredientsList />} />
        <Route path="/baking/tools-list" element={<ToolsList />} />
        <Route path="/baking/measuring" element={<MeasuringModule />} />
        <Route path="/baking/mixing" element={<MixingModule />} />
        <Route path="/baking/oven-temperature" element={<OvenTemperatureModule />} />
        <Route path="/baking/end-introduction" element={<EndIntroductionModule />} />
      </Routes>
  </Router>
  );
}

export default App;
