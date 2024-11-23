import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

function Quiz3() {
  const [yard, setYard] = useState(''); // State for yard accessibility
  const [roomSize, setRoomSize] = useState(''); // State for room size

  const handleYardChange = (e) => {
    setYard(e.target.value);
  };

  const handleRoomSizeChange = (e) => {
    setRoomSize(e.target.value);
  };

  return (
    <div className="quiz-container">
      {/* Header Section with Paw Icons */}
      <div className="quiz-header">
        <FontAwesomeIcon icon={faPaw} size="2x" color="#A9B388" />
        <FontAwesomeIcon icon={faPaw} size="2x" color="#A9B388" />
        <FontAwesomeIcon icon={faPaw} size="2x" color="#5F6F52" />
        <FontAwesomeIcon icon={faPaw} size="2x" color="#A9B388" />
      </div>

      {/* Content Section */}
      <div className="quiz-content">
        {/* Question 1 */}
        <div className="quiz-item">
          <h3>Do you have an outdoor area or yard accessible to your foster animal?</h3>
          <div id="flex" className="d-flex justify-content-left">
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="yard"
                id="yardYes"
                value="Yes"
                checked={yard === 'Yes'}
                onChange={handleYardChange}
              />
              <label className="form-check-label" htmlFor="yardYes">Yes</label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="yard"
                id="yardNo"
                value="No"
                checked={yard === 'No'}
                onChange={handleYardChange}
              />
              <label className="form-check-label" htmlFor="yardNo">No</label>
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="quiz-item">
          <h3>How much room (in sq ft) will your animal have access to?</h3>
          <div id="flex" className="d-flex flex-column align-items-start">
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="room"
                id="roomLess500"
                value="Less than 500"
                checked={roomSize === 'Less than 500'}
                onChange={handleRoomSizeChange}
              />
              <label className="form-check-label" htmlFor="roomLess500">Less than 500</label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="room"
                id="room500to1000"
                value="500-1000"
                checked={roomSize === '500-1000'}
                onChange={handleRoomSizeChange}
              />
              <label className="form-check-label" htmlFor="room500to1000">500-1000</label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="room"
                id="room1000to2000"
                value="1000-2000"
                checked={roomSize === '1000-2000'}
                onChange={handleRoomSizeChange}
              />
              <label className="form-check-label" htmlFor="room1000to2000">1000-2000</label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="room"
                id="roomGreater2000"
                value="Greater than 2000"
                checked={roomSize === 'Greater than 2000'}
                onChange={handleRoomSizeChange}
              />
              <label className="form-check-label" htmlFor="roomGreater2000">Greater than 2000</label>
            </div>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="quiz-button-container">
        <Link to="/Quiz2">
          <button className="quiz-footer-button">Back</button>
        </Link>
        <Link to="/Quiz4">
          <button className="quiz-footer-button">Next</button>
        </Link>
      </div>
    </div>
  );
}

export default Quiz3;
