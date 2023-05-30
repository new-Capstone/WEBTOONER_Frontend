import React from "react";
import "../styles/About.css";
import Header from "../components/Header";
import samplegif from "./samplegif.gif";
import Button from "react-bootstrap/Button";

function About() {
  return (
    <div className="about-container">
      <Header />
      <div className="about-main">
        <div className="about-left">
          
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        
          <img src={samplegif} alt="about-img" />
          <p>설명 본문</p>
          <img src={samplegif} alt="about-img" />
          <p>설명 본문</p>
          <img src={samplegif} alt="about-img" />
          <p>설명 본문</p>
          <img src={samplegif} alt="about-img" />
          <p>설명 본문</p>
          <img src={samplegif} alt="about-img" />
          <p>설명 본문</p>
          <img src={samplegif} alt="about-img" />
          <p>설명 본문</p>
          <img src={samplegif} alt="about-img" />
          <p>설명 본문</p>
        </div>
        <div className="about-right">
          <div className="about-contents" style={{ float: "right" }}>
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
