import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Quiz from './Quiz';
import Quiz3 from './Quiz3';
import './Quiz.css';

function Quiz2() {
  return (
    <div className="profile-container">

      <div className="quiz-item">
      <h3>Do you prefer your animal to be male or female?</h3>
      <div id="flex" class="d-flex justify-content-left">
      <div class="form-check me-3">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckMale"/>
        <label class="form-check-label" for="flexCheckMale">Male</label>
      </div>
      <div class="form-check ms-3">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckFemale"/>
        <label class="form-check-label" for="flexCheckFemale">Female</label>
      </div>
      </div>
      </div>

      <div className="quiz-item">
      <h3>Do you prefer a certain size?</h3>
      <div class="container">
      <div class="row justify-content-left">
        <div class="col-md-6 text-left">
        <div class="d-flex align-items-left">
        <span class="me-2">1</span>
        <input type="range" class="form-range w-100" id="rangeInput"></input>
        <span class="ms-2">100</span>
        </div>
        </div>
      </div>
      </div>
      </div>

      <div className="quiz-item">
      <h3>Do you have the ability to train your animal?</h3>
      <div id="flex" class="d-flex justify-content-left">
      <div class="form-check me-3">
        <input class="form-check-input" type="radio" name="train" id="flexRadioDefault1"/>
        <label class="form-check-label" for="flexRadioDefault1">Already Trained</label>
      </div>
      <div class="form-check ms-3">
        <input class="form-check-input" type="radio" name="train" id="flexRadioDefault2"/>
        <label class="form-check-label" for="flexRadioDefault2">I can train them</label>
      </div>
      </div>
      </div>

      <Link to="/Quiz">
        <button className="btn btn-primary">Back</button>
      </Link>

      <Link to="/Quiz3">
        <button className="btn btn-primary">Next Page</button>
      </Link>

      <Routes>
        <Route path="/Quiz/*" element={<Quiz />} />
        <Route path="/Quiz3/*" element={<Quiz3 />} />
      </Routes>
    </div>

  );
}

export default Quiz2;