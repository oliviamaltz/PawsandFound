import React from "react";
import "./HumanProfile.css";
import blankProfileImage from "./blankprofile.png";
import garfieldImage from "./garfield1.png";
import tobyImage from "./toby.png";
import picklesImage from "./pickles.png";
import acctImage from "./ACCT.png";
import pawsImage from "./paws.png";
import { Link } from 'react-router-dom';
import Location from "./Location"
import Results from "./Results"
import Quiz from "./Quiz"

function HumanProfile() {
  return (
    <div className="human-profile-container">
      <div className="header-section">
        <img
          src={blankProfileImage}
          alt="User Profile"
          className="profile-picture"
        />
        <h1>John Doe</h1>
        <p>Edit Profile</p>
        <p>Location: Philadelphia, PA</p>
        <p>Member since: January 2023</p>
      </div>

      <div className="buttons-container">
      <Link to="/Location">
          <button className="action-button">Location</button>
        </Link>
        <Link to="/Results">
          <button className="action-button">Search</button>
        </Link>
        <Link to="/Quiz">
          <button className="action-button">Edit Quiz</button>
        </Link>
      </div>

      <div className="section-title">Your Favorites</div>
      <div className="tiles-container">
        {/* Favorites Tiles */}
        <div className="tile">
          <img src={garfieldImage} alt="Garfield" />
          <div className="tile-caption">Garfield</div>
        </div>
        <div className="tile">
          <img src={tobyImage} alt="Toby" />
          <div className="tile-caption">Toby</div>
        </div>
        <div className="tile">
          <img src={picklesImage} alt="Pickles" />
          <div className="tile-caption">Pickles</div>
        </div>
      </div>

      <div className="section-title">Foster Applications</div>
      <div className="tiles-container">
        {/* Foster Applications Tiles */}
        <div className="tile">
          <img src={acctImage} alt="ACCT" />
          <div className="tile-caption">ACCT</div>
        </div>
        <div className="tile">
          <img src={pawsImage} alt="Paws" />
          <div className="tile-caption">Paws</div>
        </div>
      </div>
    </div>
  );
}

export default HumanProfile;
