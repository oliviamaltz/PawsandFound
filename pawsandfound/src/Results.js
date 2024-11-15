// Results.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './Profile';
import Location from './Location';
import garfieldImage from './garfield1.png';
import tobyImage from './toby.png';
import picklesImage from './pickles.png';
import './Results.css';

function Results() {
  return (
    <div className="results-container">
      <header className="results-header">
        <h1>Quiz Results</h1>
      </header>

      <div className="results-list">
        {/* Garfield Result */}
        <div className="result-card">
          <div className="leftside">
          <img src={garfieldImage} alt="Garfield" className="result-image" />
          <div className="meter">
          <div className="match-circle">90% Match
              <div className="fill"></div>
              </div>
            </div>
          </div>
          
          <div className="result-details">
            <h2>Garfield</h2>
            <p>Age: 5</p>
            
            <p>I love to eat! I will need a foster family that can monitor my diabetes.</p>
            
            <div className="tags">
              <span className="tag">Calm</span>
              <span className="tag">Glutton</span>
            </div>
            <Link to="/Profile">
              <button className="more-info-button">More Information</button>
            </Link>
          </div>
        </div>

        {/* Toby Result */}
        <div className="result-card">
        <div className="leftside">
          <img src={tobyImage} alt="Toby" className="result-image" />
          <div className="meter">
              <div className="match-circle">80% Match
              <div className="fill"></div>
              </div>
            </div>
          </div>
          <div className="result-details">
            <h2>Toby</h2>
            <p>Age: 9</p>
            <p>I'm a big cuddler and will quickly warm up to anyone!</p>
            <div className="tags">
              <span className="tag">Affectionate</span>
              <span className="tag">Friendly</span>
            </div>
            <Link to="/Profile">
              <button className="more-info-button">More Information</button>
            </Link>
          </div>
        </div>

        {/* Pickles Result */}
        <div className="result-card">
        <div className="leftside">
          <img src={picklesImage} alt="Pickles" className="result-image" />
          <div className="meter">
              <div className="match-circle">70% Match
              <div className="fill"></div>
              </div>
            </div>
          </div>
          <div className="result-details">
            <h2>Pickles</h2>
            <p>Age: 7</p>

            <p>I'm a bit of a scaredy cat! I require gentle care and patience.</p>

            <div className="tags">
              <span className="tag">Energetic</span>
              <span className="tag">Anxious</span>
            </div>
            <Link to="/Profile">
              <button className="more-info-button">More Information</button>
            </Link>
          </div>
        </div>
      </div>

      <footer className="results-footer">
        <Link to="/Location">
          <button className="footer-button">📍</button>
        </Link>
        <button className="footer-button">🤍</button>
      </footer>

      <Routes>
        <Route path="/Profile/*" element={<Profile />} />
        <Route path="/Location/*" element={<Location />} />
      </Routes>
    </div>
  );
}

export default Results;
