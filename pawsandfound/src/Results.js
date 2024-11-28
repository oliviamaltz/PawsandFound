// Results.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHeart, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Profile from './Profile';
import Location from './Location';
import garfieldImage from './garfield1.png';
import tobyImage from './toby.png';
import Results2 from './Results2'
import './Results.css';
import HumanProfile from './HumanProfile';

function Results() {
  return (
    <div className="results-container">
      <header className="results-header">
        <h1>Quiz Results</h1>
      </header>

      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}

      <div className="results-list">
        {/* Garfield Result */}
        <div className="result-card">
          <div className="leftside">
          <img src={garfieldImage} alt="Garfield" className="result-image" />
          <div className="meter-container">
            <div className="meter-fill" style={{ width: `90%` }}></div>
            <span className="meter-label">90% Match</span>
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
            <div className="meter-container">
            <div className="meter-fill" style={{ width: `80%` }}></div>
            <span className="meter-label">80% Match</span>
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
      </div>

      <div className="pagination-container">
        <Link to="/Results">
        <button className="pagination-button">1</button>
        </Link>
        <Link to="/Results2">
        <button className="pagination-button">2</button>
        </Link>
      </div>

      <footer className="results-footer">
        <Link to="/Location" className="footer-link">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>Location</span>
        </Link>
        <Link to="/Favorites" className="footer-link">
          <FontAwesomeIcon icon={faHeart} />
          <span>Favorites</span>
        </Link>
        <Link to="/FAQ" className="footer-link">
          <FontAwesomeIcon icon={faQuestionCircle} />
          <span>FAQ</span>
        </Link>
      </footer>

      <Routes>
        <Route path="/Profile/*" element={<Profile />} />
        <Route path="/Location/*" element={<Location />} />
        <Route path="/Results2/*" element={<Results2 />} />
        <Route path="/Favorites/*" element={<HumanProfile />} /> {/* New route */}
      </Routes>
    </div>
  );
}

export default Results;
