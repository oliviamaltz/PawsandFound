import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

function Quiz() {
  const [range, setRange] = useState({ min: 0, max: 20 }); // State for range slider values
  const [selectedOption, setSelectedOption] = useState(''); // State for radio buttons

  const handleRangeChange = (e, type) => {
    const value = parseInt(e.target.value, 10);
    setRange((prev) => ({
      ...prev,
      [type]: type === 'min' ? Math.min(value, prev.max) : Math.max(value, prev.min),
    }));
  };

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="quiz-container">
      {/* Header Section with Paw Icons */}
      <div className="quiz-header">
        <FontAwesomeIcon icon={faPaw} size="2x" color="#5F6F52" />
        <FontAwesomeIcon icon={faPaw} size="2x" color="#A9B388" />
        <FontAwesomeIcon icon={faPaw} size="2x" color="#A9B388" />
        <FontAwesomeIcon icon={faPaw} size="2x" color="#A9B388" />
      </div>

      {/* Content Section */}
      <div className="quiz-content">
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
              <input
                className="form-check-input"
                type="radio"
                name="fosterType"
                id="flexRadioAdopt"
                value="Adopt"
                checked={selectedOption === 'Adopt'}
                onChange={handleRadioChange}
              />
              <label className="form-check-label" htmlFor="flexRadioAdopt">Foster to Adopt</label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                name="fosterType"
                id="flexRadioTemp"
                value="Temporary"
                checked={selectedOption === 'Temporary'}
                onChange={handleRadioChange}
              />
              <label className="form-check-label" htmlFor="flexRadioTemp">Temporary Foster</label>
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="quiz-item">
          <h3>Do you prefer a certain age range of animal?</h3>
          <div className="range-slider-container">
            <div className="range-slider">
              <input
                type="range"
                min="0"
                max="20"
                value={range.min}
                onChange={(e) => handleRangeChange(e, 'min')}
              />
              <input
                type="range"
                min="0"
                max="20"
                value={range.max}
                onChange={(e) => handleRangeChange(e, 'max')}
              />
            </div>
            <div className="range-values">
              <span>{range.min}</span>
              <span>{range.max}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Button Section */}
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
