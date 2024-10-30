import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import Location from './Location';

function App() {
  return (
    <div>
      <h1>Base Page with logo and css styling</h1>

      <h2>(make this button disappear when move to new page)</h2>
      <Link to="/Home">
        <button className="btn btn-primary">Get Started!</button>
      </Link>

      <Routes>
        <Route path="/Home/*" element={<Home />} />
        <Route path="/Location/*" element={<Location />} />
        <Route path="/Quiz/*" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;