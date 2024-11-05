import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './Profile';
import Location from './Location';
import Quiz from './Quiz';
import garfieldImage from './garfield1.png';
import tobyImage from './toby.png'
import picklesImage from './pickles.png'
import './Results.css';

function Results() {
  return (
    <div>
      <h2>Results Page</h2>
      <div style={styles.container}>
      <Link to="/Location">
        <button className="btn btn-primary">LOC</button>
      </Link>
      <Link to="/Quiz">
        <button className="btn btn-primary">QUIZ</button>
      </Link>
      </div>
      
      <h3></h3>
      <div style={styles.container}>
        <img src={garfieldImage} className="img-thumbnail" alt="garfield-thumbnail" />
        <div style={styles.text}>
        <div className="meter-container">
        <div className="meter-fill1"
        style={{ width: `90%` }}></div>
        <span className="meter-label">90% Match</span>
        </div>

        <h3></h3>

        <h2>Garfield</h2>
        <h2>Age: 5</h2>
        <button id="results-btn" className="btn btn-primary">Calm</button>
        <button id="results-btn" className="btn btn-primary">Friendly</button>
        <button id="results-btn" className="btn btn-primary">Glutton</button>
        <Link to="/Profile">
        <button id="results-btn" className="btn btn-primary">More Information</button>
        </Link>
      </div>
      </div>

      <h1></h1>
      <h1></h1>
      <h1></h1>

      <div style={styles.container}>
        <img src={tobyImage} className="img-thumbnail" alt="toby-thumbnail" />
        <div style={styles.text}>
        <div className="meter-container">
        <div className="meter-fill2"
        style={{ width: `80%` }}></div>
        <span className="meter-label">80% Match</span>
      </div>
        <h2>Toby</h2>
        <h2>Age: 5</h2>
        <button id="results-btn" className="btn btn-primary">Calm</button>
        <button id="results-btn" className="btn btn-primary">Child-Friendly</button>
        <button id="results-btn" className="btn btn-primary">More Information</button>
      </div>
      </div>

      <h1></h1>
      <h1></h1>
      <h1></h1>

      <div style={styles.container}>
        <img src={picklesImage} className="img-thumbnail" alt="pickles-thumbnail" />
        <div style={styles.text}>
        <div className="meter-container">
        <div className="meter-fill3"
        style={{ width: `75%` }}></div>
        <span className="meter-label">75% Match</span>
      </div>

        <h3></h3>
        <h2>Pickles</h2>
        <h2>Age: 7</h2>
        <button id="results-btn" className="btn btn-primary">Energetic</button>
        <button id="results-btn" className="btn btn-primary">Friendly</button>
        <button id="results-btn" className="btn btn-primary">More Information</button>
      </div>
      </div>
      

      <Routes>
        <Route path="/Profile/*" element={<Profile />} />
        <Route path="/Location/*" element={<Location />} />
      </Routes>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center', // Center items vertically
    gap: '20px',          // Space between text and image
  },
  image: {
    width: '150px',
    height: '150px',
  },
  text: {
    maxWidth: '300px',
  },
};

export default Results;