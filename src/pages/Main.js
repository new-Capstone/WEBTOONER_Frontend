import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Main.css';

function Main() {
  return (
    <div>
        <Header />
<<<<<<< HEAD
      <h1>Main 페이지</h1>
      <Link to="/about">About 페이지로 이동</Link><br/>
      <Link to="/mypage">마이 페이지로 이동</Link>
=======
        <div class="main-container">
          <div class="main-left">
            <div class="main-left-title">Title</div>
            <div class="main-left-des">
              본문 설명<br />
              ...<br />
              ...<br />
              ...<br />
              ...<br />
              ...<br />
              <div class="button">
                <Link to="/mypage">
                  <button>사용하기</button>
                </Link>
              </div>
            </div>
          </div>
          <div class="main-right">사진 들어감</div>
        </div>
>>>>>>> abc74ebe856f28ca5ae32bc94e978c45de31391c
    </div>
  );
}

export default Main;