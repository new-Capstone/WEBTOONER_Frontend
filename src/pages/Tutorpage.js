import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Mypage.css'
import horror from '../styles/horror.webp'
import horror2 from '../styles/horror2.jpg'
import horror3 from '../styles/horror3.jpg'
import seol from '../styles/seol.jpg'

function Tutorpage() {
    const tutor = {
        nickname: "김지은",
        email: "smkje19999@gmail.com",
        intro: "튜터 소개글 입니다."
    };

    return (
    <div className='mp-container'>
        <div className="mp-main">
            <div className="mp-left">
                <h1>Tutor Page</h1>
                <img src={seol} alt="side-image" />
                {/* "https://via.placeholder.com/231x231" */}
                    <ul>
                        <li>{tutor.nickname}</li>
                        <li>{tutor.email}</li>
                    </ul>
                    <p>{tutor.intro}</p>
            </div>

            <div className='mp-right'>
                <h1>portfolio</h1>
                <img src={horror} />
                <img src={horror2} />
                <img src={horror3} />
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