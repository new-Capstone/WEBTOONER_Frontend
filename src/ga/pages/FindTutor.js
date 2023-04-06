import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/FindTutor.css';

function FindTutor () {
    return (
        <div>
            <Header /> 
            <div className="category_list">
                <Link to='/tutorpage'>
                    <button className="bnt_item">느와르</button>
                </Link>
                <Link to='/tutorpage'>
                    <button className="bnt_item">로맨스</button>
                </Link>
                <Link to='/tutorpage'>
                    <button className="bnt_item">액션</button>
                </Link>
                <Link to='/tutorpage'>
                    <button className="bnt_item">호러</button>
                </Link>
            </div>

            <div className="content">
                <Link to='/tutorpage' className="img_wrapper">
                    <img src="https://via.placeholder.com/340x400" alt="placeholder"/>
                </Link>
            
                <Link to='/tutorpage' className="img_wrapper">
                    <img src="https://via.placeholder.com/340x400" alt="placeholder"/>
                </Link>
                
                <Link to='/tutorpage' className="img_wrapper">
                    <img src="https://via.placeholder.com/340x400" alt="placeholder"/>
                </Link>
            </div>
            
            <div className="parent">
                <Link to='/next_page'>
                    <button className="bnt_finish" >다음페이지</button>
                </Link>
            </div>
        </div>
    );
};

export default FindTutor;
