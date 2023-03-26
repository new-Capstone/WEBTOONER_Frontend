import React from 'react';
import './About.css';
import Header from '../components/Header'
function About() {
  return (
    <div className="about-container">
        <Header />
      <div className="about-right">
        <div className="about-description">
          <h3>About</h3>
          <p>소개글</p>
        </div>
        <div className="about-side-image">
          <img src="https://via.placeholder.com/200x400" alt="side-image" />
        </div>
      </div>
    </div>
  );
}

export default About;
