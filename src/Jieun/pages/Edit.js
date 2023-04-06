import React, { useState } from "react";
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import '../styles/Mypage.css'
import User from "../components/User";

function Edit() {
    const [user, setUser] = useState({
        id:1,
        name: "김지은",
        email: "smkje19999@gamil.com",
        intro: "소개글"
    });

    const handleSubmit = (userInfo) => {
        setUser({...user, ...userInfo });
    };

    return (
    
        <div className='mp-container'>
            <Header />
            <div className="mp-main">
                <div className="mp-left">
                <Link to="/photoupload">
                    <img src="https://via.placeholder.com/231x231" alt="side-image" />
                </Link>    
                    <User user={user} onSubmit={handleSubmit} />
                        <Link to="/">
                            <button>회원탈퇴</button>
                        </Link>
                </div>

                <div className='mp-right'>
                    <img src="https://via.placeholder.com/600x300"/>
                    <p>log1</p>
                    <img src="https://via.placeholder.com/600x300"/>
                    <p>log2</p>
                    <img src="https://via.placeholder.com/600x300"/>
                    <p>log3</p>
                    <img src="https://via.placeholder.com/600x300"/>
                    <p>log4</p>
                    <img src="https://via.placeholder.com/600x300"/>
                    <p>log5</p>
                </div>
            </ div>
        </div>
    );
  }

  export default Edit;