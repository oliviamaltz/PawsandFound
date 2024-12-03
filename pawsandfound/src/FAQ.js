import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHeart, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './FAQ.css';

function FAQ() {
  const [expanded, setExpanded] = useState(null);

  const toggleQuestion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqs = [
    {
      question: 'Why should I foster a pet?',
      answer: 'Fostering saves lives. Every year, approximately 920,000 cats and dogs are euthanized in U.S. shelters due to overcrowding and a lack of adoptive homes. By fostering, you provide a temporary safe haven, giving pets the time and space they need to find their forever homes.',
    },
    {
      question: 'What is fostering?',
      answer: 'Fostering means providing a temporary home for a cat or dog while they await adoption. It allows pets to experience a loving home environment, improving their behavior, health, and adoptability.',
    },
    {
      question: 'Do I need prior experience to foster?',
      answer: 'No experience is necessary to foster! Many foster parents are first-timers who learn along the way. Our team provides resources, support, and guidance to ensure you and your foster pet have a positive experience.',
    },
    {
      question: 'Can I adopt the animal I foster?',
      answer: 'Yes, you can adopt the animal you are fostering if you meet the adoption requirements. Reach out to our team for assistance.',
    },
    {
      question: 'What kind of support do foster parents receive?',
      answer: 'Foster parents are provided with guidance, medical care for the animal, and necessary supplies like food and bedding.',
    },
  ];

  return (
    <div className="loading-page-container">
      <h1 className="welcome-text">Frequently Asked Questions</h1>
      <img src="/image.png" alt="Paws and Found Logo" className="logo1" />
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${expanded === index ? 'expanded' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
            </div>
            {expanded === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
      {expanded === null && (
        <footer className="faq-footer">
          <Link to="/Location" className="footer-link">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Location</span>
          </Link>
          <Link to="/Favorites" className="footer-link">
            <FontAwesomeIcon icon={faHeart} />
            <span>Favorites</span>
          </Link>
          <Link to="/FAQ" className="footer-link active">
            <FontAwesomeIcon icon={faQuestionCircle} />
            <span>FAQ</span>
          </Link>
        </footer>
      )}
    </div>
  );
}

export default FAQ;
