import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Results from './Results';
import './Quiz.css';

function Quiz() {
  return (
    <div>
      <h2>Quiz Page</h2>

      <h3>Would you like to foster a cat or a dog?</h3>
      <div id="flex" class="d-flex justify-content-left">
      <div class="form-check me-3">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckCat"/>
        <label class="form-check-label" for="flexCheckCat">Cat</label>
      </div>
      <div class="form-check ms-3">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDog"/>
        <label class="form-check-label" for="flexCheckDog">Dog</label>
      </div>
      </div>

      <h3>Are you interested in fostering to adopt or temporary placement?</h3>
      <div id="flex" class="d-flex justify-content-left">
      <div class="form-check me-3">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckAdopt"/>
        <label class="form-check-label" for="flexCheckAdopt">Foster to Adopt</label>
      </div>
      <div class="form-check ms-3">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckTemp"/>
        <label class="form-check-label" for="flexCheckTemp">Temporary Foster</label>
      </div>
      </div>

      <h3>Do you prefer a certain age range of animal?</h3>
      <div class="container">
      <div class="row justify-content-left">
        <div class="col-md-6 text-left">
        <div class="d-flex align-items-left">
        <span class="me-2">0</span>
        <input type="range" class="form-range w-100" id="rangeInput"></input>
        <span class="ms-2">20</span>
        </div>
        </div>
      </div>
      </div>

      <h3>Do you prefer your animal to be male or female?</h3>
      <div id="flex" class="d-flex justify-content-left">
      <div class="form-check me-3">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckMale"/>
        <label class="form-check-label" for="flexCheckMale">Male</label>
      </div>
      <div class="form-check ms-3">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckFemale"/>
        <label class="form-check-label" for="flexCheckFemale">Female</label>
      </div>
      </div>

      <h3>Do you prefer a certain size?</h3>
      <div class="container">
      <div class="row justify-content-left">
        <div class="col-md-6 text-left">
        <div class="d-flex align-items-left">
        <span class="me-2">1</span>
        <input type="range" class="form-range w-100" id="rangeInput"></input>
        <span class="ms-2">100</span>
        </div>
        </div>
      </div>
      </div>

      <h3>Do you have the ability to train your animal?</h3>
      <div id="flex" class="d-flex justify-content-left">
      <div class="form-check me-3">
        <input class="form-check-input" type="radio" name="train" id="flexRadioDefault1"/>
        <label class="form-check-label" for="flexRadioDefault1">Already Trained</label>
      </div>
      <div class="form-check ms-3">
        <input class="form-check-input" type="radio" name="train" id="flexRadioDefault2"/>
        <label class="form-check-label" for="flexRadioDefault2">I can train them</label>
      </div>
      </div>

      <h3>Do you have an outdoor area or yard accessible to your foster animal?</h3>
      <div id="flex" class="d-flex justify-content-left">
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="yard" id="flexRadioDefault3"/>
      <label class="form-check-label" for="flexRadioDefault3">Yes</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="yard" id="flexRadioDefault4"/>
      <label class="form-check-label" for="flexRadioDefault4">No</label>
      </div>
      </div>

      <h3>How much room (in sq ft) will your animal have access to?</h3>
      <div id="flex" class="d-flex justify-content-left">
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="room" id="flexRadioDefault5"/>
      <label class="form-check-label" for="flexRadioDefault5">Less than 500</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="room" id="flexRadioDefault6"/>
      <label class="form-check-label" for="flexRadioDefault6">500-1000</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="room" id="flexRadioDefault7"/>
      <label class="form-check-label" for="flexRadioDefault7">1000-2000</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="room" id="flexRadioDefault8"/>
      <label class="form-check-label" for="flexRadioDefault8">Greater than 2000</label>
      </div>
      </div>

      <h3>How many cats do you currently live with?</h3>
      <div id="flex" class="d-flex justify-content-left">
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="cats" id="flexRadioDefault9"/>
      <label class="form-check-label" for="flexRadioDefault9">0</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="cats" id="flexRadioDefault10"/>
      <label class="form-check-label" for="flexRadioDefault10">1</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="cats" id="flexRadioDefault11"/>
      <label class="form-check-label" for="flexRadioDefault11">2</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="cats" id="flexRadioDefault11"/>
      <label class="form-check-label" for="flexRadioDefault11">3+</label>
      </div>
      </div>

      <h3>How many dogs do you currently live with?</h3>
      <div id="flex" class="d-flex justify-content-left">
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="dogs" id="flexRadioDefault12"/>
      <label class="form-check-label" for="flexRadioDefault12">0</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="dogs" id="flexRadioDefault12"/>
      <label class="form-check-label" for="flexRadioDefault12">1</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="dogs" id="flexRadioDefault12"/>
      <label class="form-check-label" for="flexRadioDefault12">2</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="dogs" id="flexRadioDefault12"/>
      <label class="form-check-label" for="flexRadioDefault12">3+</label>
      </div>
      </div>

      <h3>Do you live with any children?</h3>
      <div id="flex" class="d-flex justify-content-left">
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="children" id="flexRadioDefault13"/>
      <label class="form-check-label" for="flexRadioDefault13">Yes</label>
      </div>
      <div class="form-check me-3">
      <input class="form-check-input" type="radio" name="children" id="flexRadioDefault14"/>
      <label class="form-check-label" for="flexRadioDefault14">No</label>
      </div>
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