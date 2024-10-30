import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Location from './Location';
import Quiz from './Quiz';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <h3>(welcome message)</h3>
      <Link to="/Location">
        <button className="btn btn-primary">Start New Quiz</button>
      </Link>

      <Routes>
        <Route path="/Location/*" element={<Location />} />
        <Route path="/Quiz/*" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default Home;