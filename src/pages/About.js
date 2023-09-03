import React from "react";
import "../styles/About.css";
import samplegif from "./samplegif.gif";
import UseApi from "../components/UseApi";

//          <UseApi /> 로 조회 가능

function About() {
  return (
    <div className="about-container">
      <div className="about-main">
        <div className="about-left">

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
