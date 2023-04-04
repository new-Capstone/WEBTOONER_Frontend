import React from 'react';
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import '../styles/Mypage.css'

function Mypage() {

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