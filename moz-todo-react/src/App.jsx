import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import MobileAppLayout from './layouts/MobileAppLayout';
import HobbiesScreen from './HobbiesScreen';
import HomeScreen from './pages/HomeScreen';
import BakingRoadmap from './Baking';
// Import other pages as needed

function App() {
  return (
    <Router>
      <MobileAppLayout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/baking" element={<BakingRoadmap />} />
          <Route path="/baking/Intro" element={<HobbiesScreen />} />
        </Routes>
        
      </MobileAppLayout>
      
    </Router>
  );
}



export default App;
