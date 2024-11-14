import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

function Quiz() {
  return (
    <div className="quiz-container">
      {/* Question 1 */}
      <div className="quiz-item">
        <h3>Would you like to foster a cat or a dog?</h3>
        <div id="flex" className="d-flex justify-content-left">
          <div className="form-check me-3">
            <input className="form-check-input" type="checkbox" id="flexCheckCat" />
            <label className="form-check-label" htmlFor="flexCheckCat">Cat</label>
          </div>
          <div className="form-check ms-3">
            <input className="form-check-input" type="checkbox" id="flexCheckDog" />
            <label className="form-check-label" htmlFor="flexCheckDog">Dog</label>
          </div>
        </div>
      </div>

      {/* Question 2 */}
      <div className="quiz-item">
        <h3>Are you interested in fostering to adopt or temporary placement?</h3>
        <div id="flex" className="d-flex justify-content-left">
          <div className="form-check me-3">
            <input className="form-check-input" type="checkbox" id="flexCheckAdopt" />
            <label className="form-check-label" htmlFor="flexCheckAdopt">Foster to Adopt</label>
          </div>
          <div className="form-check ms-3">
            <input className="form-check-input" type="checkbox" id="flexCheckTemp" />
            <label className="form-check-label" htmlFor="flexCheckTemp">Temporary Foster</label>
          </div>
        </div>
      </div>

      {/* Question 3 */}
      <div className="quiz-item">
        <h3>Do you prefer a certain age range of animal?</h3>
        <div>
          <span className="me-2">0</span>
          <input type="range" className="form-range w-100" id="rangeInput" />
          <span className="ms-2">20</span>
        </div>
      </div>

      {/* Back and Next Buttons */}
      <div className="quiz-button-container">
        <Link to="/Location">
          <button className="quiz-footer-button">Back</button>
        </Link>
        <Link to="/Quiz2">
          <button className="quiz-footer-button">Next</button>
        </Link>
      </div>
    </div>
  );
}

export default Quiz;
