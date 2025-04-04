import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HobbiesScreen from './HobbiesScreen';
import BakingRoadmap from './Baking';
// Import other pages as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HobbiesScreen />} />
        <Route path="/baking" element={<BakingRoadmap />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;