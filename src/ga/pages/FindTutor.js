import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/FindTutor.css';

function FindTutor () {
    return (
        <div classname= "container">
            <Header /> 
            <div classname="category_list">
                <Link to='/tutorpage'>
                    <button class="bnt_item">느와르</button>
                </Link>
                <Link to='/tutorpage'>
                    <button class="bnt_item">로맨스</button>
                </Link>
                <Link to='/tutorpage'>
                    <button class="bnt_item">액션</button>
                </Link>
                <Link to='/tutorpage'>
                    <button class="bnt_item">호러</button>
                </Link>
            </div>

            <div classname="content">
                <div classname="content_first">
                    <Link to='/tutorpage'>
                        <img src="https://via.placeholder.com/250*340"width="340" height="250"/>
                    </Link>
                </div>
                <div classname="content_second">
                    <Link to='/tutorpage'>
                        <img src="https://via.placeholder.com/250*340"width="340" height="250"/>
                    </Link>
                </div>
                <div classname="content_thrid">
                    <Link to='/tutorpage'>
                        <img src="https://via.placeholder.com/250*340" width="340" height="250"/>
                    </Link>
                </div>

            </div>
            //다음 페이지로 연결 어떻게 해야하는지 .. 
            <div>
                <Link to='/next_page'>
                <button class="bnt_finish" >다음페이지</button>
                </Link>
            </div>
        </div>
        

    );
};

export default FindTutor;