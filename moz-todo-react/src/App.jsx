import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HobbiesScreen from './HobbiesScreen';
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
    <Router>
      <Routes>
        <Route path="/" element={<HobbiesScreen />} />
        <Route path="/baking" element={<BakingRoadmap />} />
        <Route path="/baking/introduction" element={<IntroductionToBaking />} />
        <Route path="/baking/ingredients-tools" element={<IngredientsTools />} />
        <Route path="/baking/ingredients-list" element={<IngredientsList />} />
        <Route path="/baking/tools-list" element={<ToolsList />} />
        <Route path="/baking/measuring" element={<MeasuringModule />} />
        <Route path="/baking/mixing" element={<MixingModule />} />
        <Route path="/baking/oven-temperature" element={<OvenTemperatureModule />} />
        <Route path="/baking/end-introduction" element={<EndIntroductionModule />} />
        {/* More routes will be added for other modules */}
      </Routes>
    </Router>
  );
}

export default App;