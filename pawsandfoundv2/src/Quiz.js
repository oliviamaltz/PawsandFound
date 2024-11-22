import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

function Quiz() {
  const [selectedAges, setSelectedAges] = useState([]); // State for age checkboxes
  const [selectedOption, setSelectedOption] = useState(''); // State for radio buttons

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedAges((prev) =>
      prev.includes(value)
        ? prev.filter((age) => age !== value) // Remove if already selected
        : [...prev, value] // Add if not selected
    );
  };

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="quiz-container">
      {/* Header Section with Paw Icons */}
      <div className="quiz-header">
        <FontAwesomeIcon icon={faPaw} size="2x" color="#183d34" />
        <FontAwesomeIcon icon={faPaw} size="2x" color="white" />
        <FontAwesomeIcon icon={faPaw} size="2x" color="white" />
        <FontAwesomeIcon icon={faPaw} size="2x" color="white" />
      </div>

      {/* Note Section */}
      <div className="quiz-note">
        <p>Tell us what you're looking for in a furry friend!</p>
      </div>

      {/* Content Section */}
      <div className="quiz-content">
        {/* Question 1 */}
        <div className="quiz-item">
          <h3>Are you interested in fostering a cat or a dog?</h3>
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
          <h3>What fostering timeline are you open to sharing with your furry friend?</h3>
          <div id="flex" className="d-flex flex-column align-items-start">
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="fosterType"
                id="flexRadioShortTerm"
                value="Short Term Foster"
                checked={selectedOption === 'Short Term Foster'}
                onChange={handleRadioChange}
              />
              <label className="form-check-label" htmlFor="flexRadioShortTerm">Short Term Foster</label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="fosterType"
                id="flexRadioLongTerm"
                value="Long Term Foster"
                checked={selectedOption === 'Long Term Foster'}
                onChange={handleRadioChange}
              />
              <label className="form-check-label" htmlFor="flexRadioLongTerm">Long Term Foster</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="fosterType"
                id="flexRadioAdopt"
                value="Foster to Adopt"
                checked={selectedOption === 'Foster to Adopt'}
                onChange={handleRadioChange}
              />
              <label className="form-check-label" htmlFor="flexRadioAdopt">Foster to Adopt</label>
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="quiz-item">
          <h3>What age ranges are you comfortable caring for with a furry friend?</h3>
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
      </div>

      {/* Button Section */}
      <div className="quiz-button-container">
        <Link to="/">
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
