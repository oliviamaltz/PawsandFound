import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Quiz2 from './Quiz2';
import Location from './Location'
import './Quiz.css';

function Quiz() {
  return (
    <div className="profile-container">
      <h3>Would you like to foster a cat or a dog?</h3>
      <div className="quiz-item">
      <div id="flex" class="d-flex justify-content-left">
      <div class="form-check me-3">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckCat"/>
        <label class="form-check-label" for="flexCheckCat">Cat</label>
      </div>
      <div class="form-check ms-3">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDog"/>
        <label class="form-check-label" for="flexCheckDog">Dog</label>
      </div>
      </div>
      </div>
      
      <div className="quiz-item">
      <h3>Are you interested in fostering to adopt or temporary placement?</h3>
      <div id="flex" class="d-flex justify-content-left">
      <div class="form-check me-3">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckAdopt"/>
        <label class="form-check-label" for="flexCheckAdopt">Foster to Adopt</label>
      </div>
      <div class="form-check ms-3">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckTemp"/>
        <label class="form-check-label" for="flexCheckTemp">Temporary Foster</label>
      </div>
      </div>
      </div>
      
      <div className="quiz-item">
      <h3>Do you prefer a certain age range of animal?</h3>
      <div class="container">
      <div class="row justify-content-left">
        <div class="col-md-6 text-left">
        <div class="d-flex align-items-left">
        <span class="me-2">0</span>
        <input type="range" class="form-range w-100" id="rangeInput"></input>
        <span class="ms-2">20</span>
        </div>
        </div>
      </div>
      </div>
      </div>

      <Link to="/Location">
        <button className="btn btn-primary">Back</button>
      </Link>

      <Link to="/Quiz2">
        <button className="btn btn-primary">Next Page</button>
      </Link>

      <Routes>
        <Route path="/Location/*" element={<Results />} />
        <Route path="/Quiz2/*" element={<Results />} />
      </Routes>
    </div>

  );
}

export default Quiz;