import React, { useState } from "react";
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import '../styles/Mypage.css'

function TutorPortfolio() {

    return (
    
        <div className='mp-container'>
            <Header />
            <div className="mp-left">
                <h1>포트폴리오 등록하기</h1>
            </div>
            <div className="mp-main">
                <Link to="/photoupload">
                    <img src="https://via.placeholder.com/231x231" alt="side-image" />
                </Link>
                <Link to="/photoupload">
                    <img src="https://via.placeholder.com/231x231" alt="side-image" />
                </Link>
                <Link to="/photoupload">
                    <img src="https://via.placeholder.com/231x231" alt="side-image" />
                </Link>
                <Link to="/photoupload">
                    <img src="https://via.placeholder.com/231x231" alt="side-image" />
                </Link>    
            </ div>

            <div className="mp-right">    
                <Link to="/">
                    <button>등록하기</button>
                </Link>
            </ div>
        </div>
    );
  }

  export default TutorPortfolio;