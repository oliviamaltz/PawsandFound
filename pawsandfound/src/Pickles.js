import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import picklesImage from './pickles.png';

function Pickles() {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Pickles</h1>
      </div>
      <div className="profile-image-container">
        <img src={picklesImage} className="profile-image" alt="Pickles" />
        <button className="favorite-button" onClick={handleFavoriteToggle}>
          {isFavorited ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="profile-details">
        <p><strong>Age:</strong> 7 years</p>
        <p><strong>Sex:</strong> Female</p>
        <p><strong>Weight:</strong> 10 lbs</p>
        <Link to="/apply">
          <button className="apply-button">Apply to Foster</button>
        </Link>
      </div>
      <div className="profile-section">
        <h3>About Me:</h3>
        <div className="tags">
          <span className="tag">Energetic</span>
          <span className="tag">Anxious</span>
        </div>
        <p>I’m a bit of a scaredy cat! I require gentle care and patience to feel safe and comfortable. Once I trust you, I’ll be your best companion!</p>
      </div>
      <div className="profile-section">
        <h3>Home Compatibility:</h3>
        <div className="tags">
          <span className="tag">Quiet Home</span>
          <span className="tag">Patient Owner</span>
        </div>
        <p>I do best in a quiet environment without loud noises or sudden movements. A calm and patient owner will help me thrive!</p>
      </div>
      <div className="profile-section">
        <h3>Medical Needs:</h3>
        <div className="tags">
          <span className="tag">Regular Checkups</span>
          <span className="tag">Stress Management</span>
        </div>
        <p>I’m healthy but can get stressed easily. Regular vet checkups and a stable environment are important for my well-being.</p>
      </div>
    </div>
  );
}

export default Pickles;
