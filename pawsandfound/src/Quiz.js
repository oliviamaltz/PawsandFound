import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Results from './Results';

function Quiz() {
  return (
    <div>
      <h2>Quiz Page (this can probably be one single page with a form - check bootstrap docs for implementing that)</h2>

      <h3>Would you like to foster a cat or a dog?</h3>
      <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Cat
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Dog
      </label>
      </div>

      <h3>Are you interested in fostering to adopt or temporary placement?</h3>
      <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Foster to Adopt
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Temporary Foster
      </label>
      </div>

      <h3>Do you prefer a certain age range of animal?</h3>
      <label for="customRange1" class="form-label">0-20 (in years)</label>
      <input type="range" class="form-range" id="customRange1"></input>

      <h3>Do you prefer your animal to be male or female?</h3>
      <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Male
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Female
      </label>
      </div>

      <h3>Do you prefer a certain size?</h3>
      <label for="customRange1" class="form-label">0-100 (in lbs)</label>
      <input type="range" class="form-range" id="customRange1"></input>

      <h3>Do you have the ability to train your animal?</h3>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="train" id="flexRadioDefault1"/>
      <label class="form-check-label" for="flexRadioDefault1">
        Already Trained
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="train" id="flexRadioDefault2"/>
      <label class="form-check-label" for="flexRadioDefault2">
        I can train them
      </label>
      </div>

      <h3>Do you have an outdoor area or yard accessible to your foster animal?</h3>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="yard" id="flexRadioDefault3"/>
      <label class="form-check-label" for="flexRadioDefault3">
        Yes
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="yard" id="flexRadioDefault4"/>
      <label class="form-check-label" for="flexRadioDefault4">
        No
      </label>
      </div>

      <h3>How much room (in sq ft) will your animal have access to?</h3>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="room" id="flexRadioDefault5"/>
      <label class="form-check-label" for="flexRadioDefault5">
        Less than 500
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="room" id="flexRadioDefault6"/>
      <label class="form-check-label" for="flexRadioDefault6">
        500-1000
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="room" id="flexRadioDefault7"/>
      <label class="form-check-label" for="flexRadioDefault7">
        1000-2000
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="room" id="flexRadioDefault8"/>
      <label class="form-check-label" for="flexRadioDefault8">
        Greater than 2000
      </label>
      </div>

      <h3>How many cats do you currently live with?</h3>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="cats" id="flexRadioDefault9"/>
      <label class="form-check-label" for="flexRadioDefault9">
        0
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="cats" id="flexRadioDefault10"/>
      <label class="form-check-label" for="flexRadioDefault10">
        1
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="cats" id="flexRadioDefault11"/>
      <label class="form-check-label" for="flexRadioDefault11">
        2
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="cats" id="flexRadioDefault11"/>
      <label class="form-check-label" for="flexRadioDefault11">
        3+
      </label>
      </div>

      <h3>How many dogs do you currently live with?</h3>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="dogs" id="flexRadioDefault12"/>
      <label class="form-check-label" for="flexRadioDefault12">
        0
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="dogs" id="flexRadioDefault12"/>
      <label class="form-check-label" for="flexRadioDefault12">
        1
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="dogs" id="flexRadioDefault12"/>
      <label class="form-check-label" for="flexRadioDefault12">
        2
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="dogs" id="flexRadioDefault12"/>
      <label class="form-check-label" for="flexRadioDefault12">
        3+
      </label>
      </div>

      <h3>Do you live with any children?</h3>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="children" id="flexRadioDefault13"/>
      <label class="form-check-label" for="flexRadioDefault13">
        Yes
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="children" id="flexRadioDefault14"/>
      <label class="form-check-label" for="flexRadioDefault14">
        No
      </label>
      </div>

      <Link to="/Results">
        <button className="btn btn-primary">Submit Quiz</button>
      </Link>

      <Routes>
        <Route path="/Results/*" element={<Results />} />
      </Routes>
    </div>

  );
}

export default Quiz;