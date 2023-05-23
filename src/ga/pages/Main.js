import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  return (
    <div>
        <Header />
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
                <Link to="/use">
                  <button type="button" class="btn btn-outline-success">사용하기</button>
                </Link>
              </div>
            </div>ㄴ
          </div>
          <div class="main-right">사진 들어감</div>
        </div>
    </div>
  );
}

export default Main;