import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import garfieldImage from './garfield1.png';

function Profile() {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Garfield</h1>
      </div>
      <div className="profile-image-container">
        {/* Directly reference image in the public folder */}
        <img src={garfieldImage} className="profile-image" alt="Garfield" />
        <button className="favorite-button" onClick={handleFavoriteToggle}>
          {isFavorited ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="profile-details">
        <p><strong>Age:</strong> 5 years</p>
        <p><strong>Sex:</strong> Male</p>
        <p><strong>Weight:</strong> 30 lbs</p>
        <Link to="/apply">
          <button className="apply-button">Apply to Foster</button>
        </Link>
      </div>
      <div className="profile-section">
        <h3>About Me:</h3>
        <div className="tags">
          <span className="tag">Calm</span>
          <span className="tag">Friendly</span>
          <span className="tag">Glutton</span>
        </div>
        <p>I love quality time with my owner. I am an indoor cat who loves to take long naps in the sun. I enjoy lots of sweet treats and chasing mice around the house.</p>
      </div>
      <div className="profile-section">
        <h3>Home Compatibility:</h3>
        <div className="tags">
          <span className="tag">Cat-Friendly</span>
          <span className="tag">Dog-Friendly</span>
        </div>
        <p>I can live in a house with other cats and dogs. I cannot live in a house with young children. I would prefer access to a fenced outdoor space to play.</p>
      </div>
      <div className="profile-section">
        <h3>Medical Needs:</h3>
        <div className="tags">
          <span className="tag">Diabetic</span>
          <span className="tag">Medication</span>
          <span className="tag">Outdoor Area</span>
        </div>
        <p>I am diabetic and require 2 insulin shots a day, in the morning and evening. I eat a normal diet, but I need to watch the treats!</p>
      </div>
    </div>
  );
}

export default Profile;
