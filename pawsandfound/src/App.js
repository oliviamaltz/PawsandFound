import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import Location from './Location';
import Results from './Results';
import Profile from './Profile';
import Adopt from './Adopt';

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === '/' && (
        <div>
          <h1>Base Page with logo and css styling (loading page)</h1>

          <Link to="/Home">
            <button className="btn btn-primary">Get Started!</button>
          </Link>
        </div>
      )}
      

      <Routes>
        <Route path="/Home/*" element={<Home />} />
        <Route path="/Location/*" element={<Location />} />
        <Route path="/Quiz/*" element={<Quiz />} />
        <Route path="/Results/*" element={<Results />} />
        <Route path="/Profile/*" element={<Profile />} />
        <Route path="/Adopt/*" element={<Adopt />} />
      </Routes>
    </div>
    
  );
}

export default App;