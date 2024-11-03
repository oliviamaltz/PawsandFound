import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './Profile';
import Location from './Location';
import garfieldImage from './garfield1.png';
import './Results.css';

function Results() {
  return (
    <div>
      <h2>Results Page</h2>
      <h3>(put pet quiz results here)</h3>
      <Link to="/Location">
        <button className="btn btn-primary">LOC</button>
      </Link>
      <h3></h3>
      <div>
        <img src={garfieldImage} className="img-thumbnail" alt="garfield-thumbnail" />
      </div>
      <h3></h3>
      <Link to="/Profile">
        <button className="btn btn-primary">More Information</button>
      </Link>

      <Routes>
        <Route path="/Profile/*" element={<Profile />} />
        <Route path="/Location/*" element={<Location />} />
      </Routes>
    </div>
  );
}

export default Results;