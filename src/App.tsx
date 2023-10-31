import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import About from './components/pages/About';
import Help from './components/pages/Help';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/Help" element={<Help />} />


        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
