import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import tobyImage from './toby.png';

function Toby() {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Toby</h1>
      </div>
      <div className="profile-image-container">
        {/* Directly reference image in the public folder */}
        <img src={tobyImage} className="profile-image" alt="Toby" />
        <button className="favorite-button" onClick={handleFavoriteToggle}>
          {isFavorited ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="profile-details">
        <p><strong>Age:</strong> 3 years</p>
        <p><strong>Sex:</strong> Male</p>
        <p><strong>Weight:</strong> 12 lbs</p>
        <Link to="/apply">
          <button className="apply-button">Apply to Foster</button>
        </Link>
      </div>
      <div className="profile-section">
        <h3>About Me:</h3>
        <div className="tags">
          <span className="tag">Playful</span>
          <span className="tag">Affectionate</span>
          <span className="tag">Curious</span>
        </div>
        <p>I am an energetic and curious cat who loves to explore every corner of my home. I enjoy playing with toys, climbing scratching posts, and cuddling up with my favorite humans at the end of the day.</p>
      </div>
      <div className="profile-section">
        <h3>Home Compatibility:</h3>
        <div className="tags">
          <span className="tag">Cat-Friendly</span>
          <span className="tag">Kid-Friendly</span>
        </div>
        <p>I thrive in a home with other cats and older children who understand how to interact with me. I need plenty of playtime and mental stimulation to stay happy.</p>
      </div>
      <div className="profile-section">
        <h3>Medical Needs:</h3>
        <div className="tags">
          <span className="tag">Vaccinated</span>
          <span className="tag">Regular Checkups</span>
        </div>
        <p>I am in excellent health and up to date on all my vaccinations. Regular vet checkups will help me stay in great shape!</p>
      </div>
    </div>
  );
}

export default Toby;
