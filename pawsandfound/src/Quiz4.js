import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Results from './Results';
import Quiz3 from './Quiz3';
import './Quiz.css';

function Quiz3() {
  return (
    <div className="profile-container">

      <div className="quiz-item">
      <h3>How many cats do you currently live with?</h3>
      <div id="flex" class="d-flex justify-content-left">
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="cats" id="flexRadioDefault9"/>
      <label class="form-check-label" for="flexRadioDefault9">0</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="cats" id="flexRadioDefault10"/>
      <label class="form-check-label" for="flexRadioDefault10">1</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="cats" id="flexRadioDefault11"/>
      <label class="form-check-label" for="flexRadioDefault11">2</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="cats" id="flexRadioDefault11"/>
      <label class="form-check-label" for="flexRadioDefault11">3+</label>
      </div>
      </div>
      </div>

      <div className="quiz-item">
      <h3>How many dogs do you currently live with?</h3>
      <div id="flex" class="d-flex justify-content-left">
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="dogs" id="flexRadioDefault12"/>
      <label class="form-check-label" for="flexRadioDefault12">0</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="dogs" id="flexRadioDefault12"/>
      <label class="form-check-label" for="flexRadioDefault12">1</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="dogs" id="flexRadioDefault12"/>
      <label class="form-check-label" for="flexRadioDefault12">2</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="dogs" id="flexRadioDefault12"/>
      <label class="form-check-label" for="flexRadioDefault12">3+</label>
      </div>
      </div>
      </div>

      <div className="quiz-item">
      <h3>Do you live with any children?</h3>
      <div id="flex" class="d-flex justify-content-left">
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="children" id="flexRadioDefault13"/>
      <label class="form-check-label" for="flexRadioDefault13">Yes</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="children" id="flexRadioDefault14"/>
      <label class="form-check-label" for="flexRadioDefault14">No</label>
      </div>
      </div>
      </div>

      <Link to="/Quiz2">
        <button className="btn btn-primary">Back</button>
      </Link>

      <Link to="/Results">
        <button className="btn btn-primary">Submit Quiz</button>
      </Link>

      <Routes>
        <Route path="/Results/*" element={<Results />} />
        <Route path="/Quiz3/*" element={<Results />} />
      </Routes>
    </div>

  );
}

export default Quiz3;