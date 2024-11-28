import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import Quiz2 from './Quiz2';
import Quiz3 from './Quiz3';
import Quiz4 from './Quiz4';
import Location from './Location';
import Results from './Results';
import Results2 from './Results2';
import Profile from './Profile';
import Apply from './Apply';
import HumanProfile from './HumanProfile'; // Import HumanProfile
import './Loading.css'; 

function App() {
  return (
    <div className="big-container">
      <Routes>
        <Route
          path="/"
          element={
            <div className="loading-page-container">
              <h1 className="welcome-text">Welcome</h1>
              <h2 className="subtitle-text">to Paws and Found!</h2>
              <img src="/image.png" alt="Paws and Found Logo" className="logo" />
              <p className="thank-you-text">Thank you for starting your foster/adoption journey with us!</p>
              <Link to="/Home">
                <button className="btn btn-primary get-started-button">Start Now</button>
              </Link>
            </div>
          }
        />
        <Route path="/Home/*" element={<Home />} />
        <Route path="/Location/*" element={<Location />} />
        <Route path="/Quiz/*" element={<Quiz />} />
        <Route path="/Quiz2/*" element={<Quiz2 />} />
        <Route path="/Quiz3/*" element={<Quiz3 />} />
        <Route path="/Quiz4/*" element={<Quiz4 />} />
        <Route path="/Results/*" element={<Results />} />
        <Route path="/Results2/*" element={<Results2 />} />
        <Route path="/Profile/*" element={<Profile />} />
        <Route path="/Favorites" element={<HumanProfile />} /> {/* Add this route */}
        <Route path="/Apply/*" element={<Apply />} />
      </Routes>
    </div>
  );
}

export default App;
