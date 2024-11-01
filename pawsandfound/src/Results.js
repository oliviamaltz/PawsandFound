import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './Profile';

function Results() {
  return (
    <div>
      <h2>Results Page</h2>
      <h3>(put pet quiz results here)</h3>
      <Link to="/Profile">
        <button className="btn btn-primary">More Information</button>
      </Link>

      <Routes>
        <Route path="/Profile/*" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default Results;