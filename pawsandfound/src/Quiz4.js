// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Quiz.css';

// // Font Awesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPaw } from '@fortawesome/free-solid-svg-icons';

// function Quiz4() {
//   const [cats, setCats] = useState(''); // State for number of cats
//   const [dogs, setDogs] = useState(''); // State for number of dogs
//   const [children, setChildren] = useState(''); // State for children

//   const handleCatsChange = (e) => {
//     setCats(e.target.value);
//   };

//   const handleDogsChange = (e) => {
//     setDogs(e.target.value);
//   };

//   const handleChildrenChange = (e) => {
//     setChildren(e.target.value);
//   };

//   return (
//     <div className="quiz-container">
//       {/* Header Section with Paw Icons */}
//       <div className="quiz-header">
//         <FontAwesomeIcon icon={faPaw} size="2x" color="#A9B388" />
//         <FontAwesomeIcon icon={faPaw} size="2x" color="#A9B388" />
//         <FontAwesomeIcon icon={faPaw} size="2x" color="#A9B388" />
//         <FontAwesomeIcon icon={faPaw} size="2x" color="#5F6F52" />
//       </div>

//       <div className="quiz-note">
//         <p>Tell us about your family so we can find the best match!</p>
//       </div>

//       {/* Content Section */}
//       <div className="quiz-content">
//         {/* Question 1 */}
//         <div className="quiz-item">
//           <h3>How many cats do you have at home?</h3>
//           <div id="flex" className="d-flex justify-content-left">
//             <div className="form-check me-3">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="cats"
//                 id="cats0"
//                 value="0"
//                 checked={cats === '0'}
//                 onChange={handleCatsChange}
//               />
//               <label className="form-check-label" htmlFor="cats0">0</label>
//             </div>
//             <div className="form-check me-3">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="cats"
//                 id="cats1"
//                 value="1"
//                 checked={cats === '1'}
//                 onChange={handleCatsChange}
//               />
//               <label className="form-check-label" htmlFor="cats1">1</label>
//             </div>
//             <div className="form-check me-3">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="cats"
//                 id="cats2"
//                 value="2"
//                 checked={cats === '2'}
//                 onChange={handleCatsChange}
//               />
//               <label className="form-check-label" htmlFor="cats2">2</label>
//             </div>
//             <div className="form-check me-3">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="cats"
//                 id="cats3plus"
//                 value="3+"
//                 checked={cats === '3+'}
//                 onChange={handleCatsChange}
//               />
//               <label className="form-check-label" htmlFor="cats3plus">3+</label>
//             </div>
//           </div>
//         </div>

//         {/* Question 2 */}
//         <div className="quiz-item">
//           <h3>How many dogs do you have at home?</h3>
//           <div id="flex" className="d-flex justify-content-left">
//             <div className="form-check me-3">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="dogs"
//                 id="dogs0"
//                 value="0"
//                 checked={dogs === '0'}
//                 onChange={handleDogsChange}
//               />
//               <label className="form-check-label" htmlFor="dogs0">0</label>
//             </div>
//             <div className="form-check me-3">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="dogs"
//                 id="dogs1"
//                 value="1"
//                 checked={dogs === '1'}
//                 onChange={handleDogsChange}
//               />
//               <label className="form-check-label" htmlFor="dogs1">1</label>
//             </div>
//             <div className="form-check me-3">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="dogs"
//                 id="dogs2"
//                 value="2"
//                 checked={dogs === '2'}
//                 onChange={handleDogsChange}
//               />
//               <label className="form-check-label" htmlFor="dogs2">2</label>
//             </div>
//             <div className="form-check me-3">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="dogs"
//                 id="dogs3plus"
//                 value="3+"
//                 checked={dogs === '3+'}
//                 onChange={handleDogsChange}
//               />
//               <label className="form-check-label" htmlFor="dogs3plus">3+</label>
//             </div>
//           </div>
//         </div>

//         {/* Question 3 */}
//         <div className="quiz-item">
//           <h3>Do you live with any children?</h3>
//           <div id="flex" className="d-flex justify-content-left">
//             <div className="form-check me-3">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="children"
//                 id="childrenYes"
//                 value="Yes"
//                 checked={children === 'Yes'}
//                 onChange={handleChildrenChange}
//               />
//               <label className="form-check-label" htmlFor="childrenYes">Yes</label>
//             </div>
//             <div className="form-check me-3">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="children"
//                 id="childrenNo"
//                 value="No"
//                 checked={children === 'No'}
//                 onChange={handleChildrenChange}
//               />
//               <label className="form-check-label" htmlFor="childrenNo">No</label>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Button Section */}
//       <div className="quiz-button-container">
//         <Link to="/Quiz3">
//           <button className="quiz-footer-button">Back</button>
//         </Link>
//         <Link to="/Results">
//           <button className="quiz-footer-button">Submit</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Quiz4;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

function Quiz4() {
  const [cats, setCats] = useState(''); // State for number of cats
  const [dogs, setDogs] = useState(''); // State for number of dogs
  const [children, setChildren] = useState(''); // State for children
  const [childrenAgeRanges, setChildrenAgeRanges] = useState([]); // State for children's age ranges

  const handleCatsChange = (e) => {
    setCats(e.target.value);
  };

  const handleDogsChange = (e) => {
    setDogs(e.target.value);
  };

  const handleChildrenChange = (e) => {
    setChildren(e.target.value);
    if (e.target.value === 'No') {
      setChildrenAgeRanges([]); // Reset age ranges if they select "No"
    }
  };

  const handleAgeRangeChange = (e) => {
    const value = e.target.value;
    setChildrenAgeRanges((prev) =>
      prev.includes(value)
        ? prev.filter((age) => age !== value) // Remove if already selected
        : [...prev, value] // Add if not selected
    );
  };

  return (
    <div className="quiz-container">
      {/* Header Section with Paw Icons */}
      <div className="quiz-header">
        <FontAwesomeIcon icon={faPaw} size="2x" color="#A9B388" />
        <FontAwesomeIcon icon={faPaw} size="2x" color="#A9B388" />
        <FontAwesomeIcon icon={faPaw} size="2x" color="#A9B388" />
        <FontAwesomeIcon icon={faPaw} size="2x" color="#5F6F52" />
      </div>

      <div className="quiz-note">
        <p>Tell us about your family so we can find the best match!</p>
      </div>

      {/* Content Section */}
      <div className="quiz-content">
        {/* Question 1 */}
        <div className="quiz-item">
          <h3>How many cats do you have at home?</h3>
          <div id="flex" className="d-flex justify-content-left">
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="cats"
                id="cats0"
                value="0"
                checked={cats === '0'}
                onChange={handleCatsChange}
              />
              <label className="form-check-label" htmlFor="cats0">0</label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="cats"
                id="cats1"
                value="1"
                checked={cats === '1'}
                onChange={handleCatsChange}
              />
              <label className="form-check-label" htmlFor="cats1">1</label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="cats"
                id="cats2"
                value="2"
                checked={cats === '2'}
                onChange={handleCatsChange}
              />
              <label className="form-check-label" htmlFor="cats2">2</label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="cats"
                id="cats3plus"
                value="3+"
                checked={cats === '3+'}
                onChange={handleCatsChange}
              />
              <label className="form-check-label" htmlFor="cats3plus">3+</label>
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="quiz-item">
          <h3>How many dogs do you have at home?</h3>
          <div id="flex" className="d-flex justify-content-left">
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="dogs"
                id="dogs0"
                value="0"
                checked={dogs === '0'}
                onChange={handleDogsChange}
              />
              <label className="form-check-label" htmlFor="dogs0">0</label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="dogs"
                id="dogs1"
                value="1"
                checked={dogs === '1'}
                onChange={handleDogsChange}
              />
              <label className="form-check-label" htmlFor="dogs1">1</label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="dogs"
                id="dogs2"
                value="2"
                checked={dogs === '2'}
                onChange={handleDogsChange}
              />
              <label className="form-check-label" htmlFor="dogs2">2</label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="dogs"
                id="dogs3plus"
                value="3+"
                checked={dogs === '3+'}
                onChange={handleDogsChange}
              />
              <label className="form-check-label" htmlFor="dogs3plus">3+</label>
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="quiz-item">
          <h3>Do you live with any children?</h3>
          <div id="flex" className="d-flex justify-content-left">
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="children"
                id="childrenYes"
                value="Yes"
                checked={children === 'Yes'}
                onChange={handleChildrenChange}
              />
              <label className="form-check-label" htmlFor="childrenYes">Yes</label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="children"
                id="childrenNo"
                value="No"
                checked={children === 'No'}
                onChange={handleChildrenChange}
              />
              <label className="form-check-label" htmlFor="childrenNo">No</label>
            </div>
          </div>
        </div>

        {/* Conditional Question for Age Ranges */}
        {children === 'Yes' && (
          <div className="quiz-item">
            <h3>What are the age ranges of the children?</h3>
            <div id="flex" className="d-flex flex-wrap align-items-start gap-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="ageRangeInfant"
                  value="Infant (0-2)"
                  onChange={handleAgeRangeChange}
                  checked={childrenAgeRanges.includes('Infant (0-2)')}
                />
                <label className="form-check-label" htmlFor="ageRangeInfant">Infant (0-2)</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="ageRangeToddler"
                  value="Toddler (3-5)"
                  onChange={handleAgeRangeChange}
                  checked={childrenAgeRanges.includes('Toddler (3-5)')}
                />
                <label className="form-check-label" htmlFor="ageRangeToddler">Toddler (3-5)</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="ageRangeSchoolAge"
                  value="School Age (6-12)"
                  onChange={handleAgeRangeChange}
                  checked={childrenAgeRanges.includes('School Age (6-12)')}
                />
                <label className="form-check-label" htmlFor="ageRangeSchoolAge">School Age (6-12)</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="ageRangeTeen"
                  value="Teen (13-18)"
                  onChange={handleAgeRangeChange}
                  checked={childrenAgeRanges.includes('Teen (13-18)')}
                />
                <label className="form-check-label" htmlFor="ageRangeTeen">Teen (13-18)</label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Button Section */}
      <div className="quiz-button-container">
        <Link to="/Quiz3">
          <button className="quiz-footer-button">Back</button>
        </Link>
        <Link to="/Results">
          <button className="quiz-footer-button">Submit</button>
        </Link>
      </div>
    </div>
  );
}

export default Quiz4;
