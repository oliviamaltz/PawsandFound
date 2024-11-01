import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Results from './Results';

function Quiz() {
  return (
    <div>
      <h2>Quiz Page (this can probably be one single page with a form - check bootstrap docs for implementing that)</h2>;

      <Link to="/Results">
        <button className="btn btn-primary">Submit Quiz</button>
      </Link>

      <Routes>
        <Route path="/Results/*" element={<Results />} />
      </Routes>
    </div>
  );
}

export default Quiz;