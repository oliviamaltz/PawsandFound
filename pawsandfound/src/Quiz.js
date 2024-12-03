import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

function Quiz() {
  const [range, setRange] = useState({ min: 0, max: 20 }); // State for range slider values
  const [selectedOption, setSelectedOption] = useState(''); // State for radio buttons
  const [selectedAges, setSelectedAges] = useState([]); // State for age checkboxes
  const [hasAgePreference, setHasAgePreference] = useState(null); // State for age preference question

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

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedAges((prev) =>
      prev.includes(value)
        ? prev.filter((age) => age !== value) // Remove if already selected
        : [...prev, value] // Add if not selected
    );
  };

  const handleAgePreferenceChange = (e) => {
    setHasAgePreference(e.target.value === 'Yes'); // Set state based on Yes/No
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

      {/* Note Section */}
      <div className="quiz-note">
        <p>Tell us what you're looking for in a furry friend!</p>
      </div>

      {/* Content Section */}
      <div className="quiz-content">
        {/* Question 1 */}
        <div className="quiz-item">
          <h3>What type of foster pet are you looking for?</h3>
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
          <h3>Do you have an age preference for your furry friend?</h3>
          <div className="d-flex flex-column align-items-start">
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="agePreference"
                id="agePreferenceYes"
                value="Yes"
                onChange={handleAgePreferenceChange}
              />
              <label className="form-check-label" htmlFor="agePreferenceYes">Yes</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="agePreference"
                id="agePreferenceNo"
                value="No"
                onChange={handleAgePreferenceChange}
              />
              <label className="form-check-label" htmlFor="agePreferenceNo">No</label>
            </div>
          </div>
        </div>

        {/* Question 3 - Conditional Rendering */}
        {hasAgePreference && (
          <div className="quiz-item">
            <h3>What age ranges are you comfortable caring for?</h3>
            <div id="flex" className="d-flex flex-wrap align-items-start gap-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckPuppyKitten"
                  value="Puppy/Kitten"
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="flexCheckPuppyKitten">Puppy/Kitten</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckAdolescent"
                  value="Adolescent"
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="flexCheckAdolescent">Adolescent</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckAdult"
                  value="Adult"
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="flexCheckAdult">Adult</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckElderly"
                  value="Elderly"
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="flexCheckElderly">Elderly</label>
              </div>
            </div>
          </div>
        )}
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
