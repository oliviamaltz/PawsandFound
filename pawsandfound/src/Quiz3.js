import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Quiz4 from './Quiz4';
import Quiz2 from './Quiz2';
import './Quiz.css';

function Quiz3() {
  return (
    <div className="profile-container">

      <div className="quiz-item">
      <h3>Do you have an outdoor area or yard accessible to your foster animal?</h3>
      <div id="flex" class="d-flex justify-content-left">
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="yard" id="flexRadioDefault3"/>
      <label class="form-check-label" for="flexRadioDefault3">Yes</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="yard" id="flexRadioDefault4"/>
      <label class="form-check-label" for="flexRadioDefault4">No</label>
      </div>
      </div>
      </div>

      <div className="quiz-item">
      <h3>How much room (in sq ft) will your animal have access to?</h3>
      <div id="flex" class="d-flex justify-content-left">
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="room" id="flexRadioDefault5"/>
      <label class="form-check-label" for="flexRadioDefault5">Less than 500</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="room" id="flexRadioDefault6"/>
      <label class="form-check-label" for="flexRadioDefault6">500-1000</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="room" id="flexRadioDefault7"/>
      <label class="form-check-label" for="flexRadioDefault7">1000-2000</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="room" id="flexRadioDefault8"/>
      <label class="form-check-label" for="flexRadioDefault8">Greater than 2000</label>
      </div>
      </div>
      </div>
    

      <Link to="/Quiz2">
        <button className="btn btn-primary">Back</button>
      </Link>

      <Link to="/Quiz4">
        <button className="btn btn-primary">Next Page</button>
      </Link>

      <Routes>
        <Route path="/Quiz4/*" element={<Quiz4 />} />
        <Route path="/Quiz2/*" element={<Quiz2 />} />
      </Routes>
    </div>

  );
}

export default Quiz3;