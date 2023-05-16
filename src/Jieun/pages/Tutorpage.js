import React from 'react';
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import '../styles/Mypage.css'

function Tutorpage() {
    const tutor = {
        nickname: "김지은",
        email: "smkje19999@gmail.com",
        intro: "튜터 소개글 입니다."
    };

    return (
    <div className='mp-container'>
        <Header />
        <div className="mp-main">
            <div className="mp-left">
                <img src="https://via.placeholder.com/231x231" alt="side-image" />
                    <ul>
                        <li>{tutor.nickname}</li>
                        <li>{tutor.email}</li>
                    </ul>
                    <p>{tutor.intro}</p>
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