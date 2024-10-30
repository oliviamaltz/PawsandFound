import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Quiz from './Quiz';

function Location() {
  return (
    <div>
      <h2>Location Page</h2>
      <h3>(put location functionality here)</h3>
      <Link to="/Quiz">
        <button className="btn btn-primary">Continue to Quiz</button>
      </Link>

      <Routes>
        <Route path="/Quiz/*" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default Location;