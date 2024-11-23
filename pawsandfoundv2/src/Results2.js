// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faHeart, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
// import Results from './Results';
// import picklesImage from './pickles.png';
// import './Results.css';

// function Results2() {
//   return (
//     <div className="results-container">
//       <header className="results-header">
//         <h1>Quiz Results</h1>
//       </header>

//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>

//       <div className="results-list2">

//         {/* Pickles Result */}
//         <div className="result-card">
//         <div className="leftside">
//           <img src={picklesImage} alt="Pickles" className="result-image" />
//           <div className="meter-container">
//             <div className="meter-fill" style={{ width: `70%` }}></div>
//             <span className="meter-label">70% Match</span>
//             </div>
//           </div>
//           <div className="result-details">
//             <h2>Pickles</h2>
//             <p>Age: 7</p>

//             <p>I'm a bit of a scaredy cat! I require gentle care and patience.</p>

//             <div className="tags">
//               <span className="tag">Energetic</span>
//               <span className="tag">Anxious</span>
//             </div>
//             <Link to="/Profile">
//               <button className="more-info-button">More Information</button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="pagination-container">
//         <Link to="/Results">
//         <button className="pagination-button">1</button>
//         </Link>
//         <Link to="/Results2">
//         <button className="pagination-button">2</button>
//         </Link>
//       </div>

//       <footer className="results-footer">
//         <Link to="/Location" className="footer-link">
//           <FontAwesomeIcon icon={faMapMarkerAlt} />
//           <span>Location</span>
//         </Link>
//         <Link to="/Favorites" className="footer-link">
//           <FontAwesomeIcon icon={faHeart} />
//           <span>Favorites</span>
//         </Link>
//         <Link to="/FAQ" className="footer-link">
//           <FontAwesomeIcon icon={faQuestionCircle} />
//           <span>FAQ</span>
//         </Link>
//       </footer>

//       <Routes>
//         <Route path="/Results/*" element ={<Results />} />
//       </Routes>
//     </div>
//   );
// }

// export default Results2;


import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHeart, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import picklesImage from './pickles.png';
// import Results from './Results';
import './Results.css';

function Results2() {
  return (
    <div className="results-container">
      <header className="results-header">
        <h1>Quiz Results</h1>
      </header>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <div className="results-list2">
        {/* Pickles Result */}
        <div className="result-card">
          <div className="leftside">
            <img src={picklesImage} alt="Pickles" className="result-image" />
            <div className="meter-container">
              <div className="meter-fill" style={{ width: `70%` }}></div>
              <span className="meter-label">70% Match</span>
            </div>
          </div>
          <div className="result-details">
            <h2>Pickles</h2>
            <p>Age: 7</p>
            <p>I'm a bit of a scaredy cat! I require gentle care and patience.</p>
            <div className="tags">
              <span className="tag">Energetic</span>
              <span className="tag">Anxious</span>
            </div>
            <Link to="/Profile">
              <button className="more-info-button">More Information</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="pagination-container">
        <Link to="/Results">
          <button className="pagination-button">1</button>
        </Link>
        <Link to="/Results2">
          <button className="pagination-button">2</button>
        </Link>
      </div>

      <footer className="results-footer">
        <Link to="/Location" className="footer-link">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>Location</span>
        </Link>
        <Link to="/Favorites" className="footer-link">
          <FontAwesomeIcon icon={faHeart} />
          <span>Favorites</span>
        </Link>
        <Link to="/FAQ" className="footer-link">
          <FontAwesomeIcon icon={faQuestionCircle} />
          <span>FAQ</span>
        </Link>
      </footer>
{/* 
      <Routes>
        <Route path="/Results" element={<Results />} />
      </Routes> */}
    </div>
  );
}

export default Results2;
