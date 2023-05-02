//임시로 만든 헤더UI 컴포넌트, <Header /> 를 넣어둔 페이지들이 전부 공유할 수 있음 
 
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo">My Logo</Link>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to = "/mypage">My Page</Link></li>
          <li><Link to="/findtutor">Tutor</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

