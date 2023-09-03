import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  return (
    <div>
      <div className="main-container">
        <div className="main-left">
          <div className="main-left-title">Title</div>
          <div className="main-left-des">
            본문 설명<br />
            ...<br />
            ...<br />
            ...<br />
            ...<br />
            ...<br />
            <div className="button">
              <Link to="/use">
                <button type="button" className="btn btn-outline-success">사용하기</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="main-right">사진 들어감</div>
      </div>
    </div>
  );
}

export default Main;