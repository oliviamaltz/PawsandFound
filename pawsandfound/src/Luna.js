import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import lunaImage from './luna.png';

function Luna() {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Luna</h1>
      </div>
      <div className="profile-image-container">
        <img src={lunaImage} className="profile-image" alt="Luna" />
        <button className="favorite-button" onClick={handleFavoriteToggle}>
          {isFavorited ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="profile-details">
        <p><strong>Age:</strong> 2 years</p>
        <p><strong>Sex:</strong> Female</p>
        <p><strong>Weight:</strong> 8 lbs</p>
        <Link to="/apply">
          <button className="apply-button">Apply to Foster</button>
        </Link>
      </div>
      <div className="profile-section">
        <h3>About Me:</h3>
        <div className="tags">
          <span className="tag">Playful</span>
          <span className="tag">Curious</span>
        </div>
        <p>I love to play! I have a lot of energy and I enjoy exploring every corner of my surroundings. My curiosity makes me a fun and lively companion!</p>
      </div>
      <div className="profile-section">
        <h3>Home Compatibility:</h3>
        <div className="tags">
          <span className="tag">Active Home</span>
          <span className="tag">Kid-Friendly</span>
        </div>
        <p>I thrive in an active home with plenty of playtime and interaction. I am great with children and enjoy being part of the action!</p>
      </div>
      <div className="profile-section">
        <h3>Medical Needs:</h3>
        <div className="tags">
          <span className="tag">Vaccinated</span>
          <span className="tag">Regular Checkups</span>
        </div>
        <p>I am healthy and up to date on all my vaccinations. Regular checkups with the vet will keep me in tip-top shape!</p>
      </div>
    </div>
  );
}

export default Luna;
