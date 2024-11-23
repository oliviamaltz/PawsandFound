import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Location from './Location';
import Quiz from './Quiz';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="title">Foster and Forever Homes</h1>
      <p className="welcome-message">
        We use an AI algorithm to match you with the most compatible animals!
      </p>
      <p className="quiz-prompt">Please take our compatibility quiz!</p>

      <div className="button-container">
        <Link to="/Location">
          <button className="quiz-button">Start New Quiz</button>
        </Link>
        <Link to="/Results">
          <button className="quiz-button" >View All Available Pets</button>
        </Link>
        
      </div>

      <Routes>
        <Route path="/Location/*" element={<Location />} />
        <Route path="/Quiz/*" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default Home;
