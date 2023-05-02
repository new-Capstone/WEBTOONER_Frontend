import React, { useState } from "react";
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import '../styles/Mypage.css'
import Tutor from "../components/Tutor";

function TutorApply() {
    const [tutor, setTutor] = useState({
        id:1,
        nickname: "",
        email: "",
        intro: "",
        genre: ""
    });

    const handleSubmit = (tutorInfo) => {
        setTutor({...tutor, ...tutorInfo });
    };

    return (
        <div className='mp-container'>
            <Header />
            <div className="mp-main">
                {/* <div className="mp-left"> */}
                {/* <Link to="/photoupload">
                    <img src="https://via.placeholder.com/231x231" alt="side-image" />
                </Link>     */}
                <div className="mp-left">
                    
                    <Tutor tutor={tutor} onSubmit={handleSubmit} />
                </div>

                <div className='mp-right'>
                    <img src="https://via.placeholder.com/600x500"/>
                    <p>튜터등록 시 할 수 있는 것들 설명하는 그림</p>
                </div>
            </ div>
        </div>
    );
  }

  export default TutorApply;