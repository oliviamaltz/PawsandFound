import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Quiz from './Quiz';
import Quiz2 from './Quiz2';
import Quiz3 from './Quiz3';
import Quiz4 from './Quiz4';
import Results from './Results';
import Results2 from './Results2';
import './Loading.css'; 
// import '../public/styles.css'


function App() {
  return (
    <Router>
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
              <Link to="/Quiz">
                <button className="btn btn-primary get-started-button">Start New Quiz</button>
              </Link>
            </div>
          }
        />
        
        <Route path="/Quiz/*" element={<Quiz />} />
        <Route path="/Quiz2/*" element={<Quiz2 />} />
        <Route path="/Quiz3/*" element={<Quiz3 />} />
        <Route path="/Quiz4/*" element={<Quiz4 />} />
        <Route path="/Results/*" element={<Results />} />
        <Route path="/Results2/*" element={<Results2 />} />
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
