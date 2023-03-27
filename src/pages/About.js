import React from 'react';
import Header from '../components/Header';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <Header />
      <div className="about-main">
        <div className="about-left">
          <img src="/images/about-img.jpg" alt="about-img" />
          <p>설명 본문</p>
          <img src="/images/about-img.jpg" alt="about-img" />
          <p>설명 본문</p>
          <img src="/images/about-img.jpg" alt="about-img" />
          <p>설명 본문</p>
          <img src="/images/about-img.jpg" alt="about-img" />
          <p>설명 본문</p>
          <img src="/images/about-img.jpg" alt="about-img" />
          <p>설명 본문</p>
          <img src="/images/about-img.jpg" alt="about-img" />
          <p>설명 본문</p>
          <img src="/images/about-img.jpg" alt="about-img" />
          <p>설명 본문</p>
          <img src="/images/about-img.jpg" alt="about-img" />
          <p>설명 본문</p>
          <img src="/images/about-img.jpg" alt="about-img" />
          <p>설명 본문</p>
          <img src="/images/about-img.jpg" alt="about-img" />
          <p>설명 본문</p>
          <img src="/images/about-img.jpg" alt="about-img" />
          <p>설명 본문</p>
        </div>
        <div className="about-right">
          <div className="about-contents" style={{ float: 'right' }}>
            <ul>
              <li>전체</li>
              <li>목차1</li>
              <li>목차2</li>
              <li>목차3</li>
              <li>목차4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
