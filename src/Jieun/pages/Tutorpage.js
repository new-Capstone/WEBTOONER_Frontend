import React from 'react';
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import '../styles/Mypage.css'

function Tutorpage() {

    return (
    <div className='mp-container'>
        <Header />
        <div className="mp-main">
            <div className="mp-left">
                <img src="https://via.placeholder.com/231x231" alt="side-image" />
                    <ul>
                        <li>김지은</li>
                        <li>smkje19999@gmail.com</li>
                    </ul>
                    <p>소개글 입니다.</p>
            </div>

            <div className='mp-right'>
                <img src="https://via.placeholder.com/600x300"/>
                <img src="https://via.placeholder.com/600x300"/>
                <img src="https://via.placeholder.com/600x300"/>
                <p>튜터에게 연락하기</p>
                <Link to='/chat'>
                    <button>contact</button>
                </Link>
            </div>
        </ div>
    </div>
    );
  }
  
  export default Tutorpage;