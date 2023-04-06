import React, { useState } from "react";
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import '../styles/Mypage.css'
import User from "../components/User";

function Mypage(props) {

    //Edit에서 수정한 유저 정보 어떻게 가져와야할까?
    //User.js import?
    //Edit.js import?
    

    const [user, setUser] = useState({
        id: "1",
        name: "김지은",
        email:"smkje19999@gmail.com",
        intro:"소개글입니다."
    });

    // const handleSubmit = (userInfo) => {
    //     setUser({...user, ...userInfo });
    // };
    
    return (
    <div className='mp-container'>
        <Header />
        <div className="mp-main">
            <div className="mp-left">
                <img src="https://via.placeholder.com/231x231" alt="side-image" />
                    {/* <User user={user} onSubmit={handleSubmit}/> */}
                    <ul>
                        <li>{user.name}</li> 
                        <li>{user.email}</li>
                    </ul>
                    <p>{user.intro}</p>
                    <Link to='/edit'>
                        <button>Edit</button>
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
  
  export default Mypage;