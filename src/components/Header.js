import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const openLoginPopup = () => {
    setShowLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("로그인 정보:", loginId, loginPassword);
    closeLoginPopup();
  };

  return (
    <div className="header">
      <Link to="/" className="logo">
        <p className="logo">WEBTOONER</p>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link to="/chat">
              <p>Chat</p>
            </Link>
          </li>
          <li>
            <Link to="/ChatTest">
              <p>ChatTest</p>
            </Link>
          </li>
          <li>
            <Link to="/Tutorapply">
              <p>Apply</p>
            </Link>
          </li>
          <li>
            <Link to="/Mypage">
              <p>MyPage</p>
            </Link>
          </li>
        </ul>
      </nav>

      <button className="login-button" onClick={openLoginPopup}>
        로그인
      </button>

      {showLoginPopup && (
        <div className="login-popup">
          <div className="login-popup-content">
            <h2>로그인</h2>
            <form onSubmit={handleLogin}>
              <label>
                ID ::
                <input
                  type="text"
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                />
              </label>
              <br />
              <label>
                P/W ::
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </label>
              <br />
              <button type="submit">로그인</button>
            </form>
            <button onClick={closeLoginPopup}>닫기</button>
            <Link to="/SignupPage">
              <button onClick={closeLoginPopup}>회원가입</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
