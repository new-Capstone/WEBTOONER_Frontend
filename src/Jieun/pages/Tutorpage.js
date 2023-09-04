import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import '../styles/Mypage.css'
import horror from '../styles/horror.webp'
import horror2 from '../styles/horror2.jpg'
import horror3 from '../styles/horror3.jpg'
import seol from '../styles/seol.jpg'

function Tutorpage() {
    const [user, setUser] = useState("");
    const [tutor, setTutor] = useState("");
    const [pofol, setPofol] = useState([]);
    const [ti, setTi] = useState("");

    useEffect(() => {
        axios({
            method: 'GET',
            url:'http://capstone-webtooner.com/user?userId=6'
        }).then(response => {
        setUser(response.data);
        setTi(response.data.tutorId);
    })
    })

    useEffect(() => {
        axios({
            method: 'GET',
            url:'http://capstone-webtooner.com/tutorapi?tutorId=44'
        }).then(response => setTutor(response.data))
    })

    useEffect(() => {
        axios({
            method: 'GET',
            url:'http://capstone-webtooner.com/portfolio/tutorId?tutorId=' + ti
        }).then(response => setPofol(response.data))
    })

    return (
    <div className='mp-container'>
        <Header />
        <div className="mp-main">
            <div className="mp-left">
                <h1>튜터페이지</h1>
                <img src={user.profileImage}  alt="side-image" />
                {/* "https://via.placeholder.com/231x231" */}
                    <ul>
                        <li>{tutor.tutorName}</li>
                        <li>{tutor.tutorEmail}</li>
                    </ul>
                    <p>{tutor.description}</p>
            </div>

            <div className='mp-right'>
                <h1>포트폴리오</h1>
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