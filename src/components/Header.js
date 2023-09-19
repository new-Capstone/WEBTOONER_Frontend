// Header.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext";
import "../styles/Header.css";

function Header({ isMain }) {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const { isLoggedIn, login, logout, setAuthUserId, isTutor, setTutorUserId, userId, setTutorStatus } = useAuth(); // isTutor를 추가

  const navigate = useNavigate();

  const openLoginPopup = () => {
    setShowLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
    setLoginEmail("");
    setLoginPassword("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email: loginEmail,
      password: loginPassword,
    };

    try {
      const response1 = await axios.post(
        "https://capstone-webtooner.com/login",
        loginData
      );

      console.log("로그인 성공:", response1.data);

      setAuthUserId(response1.data.userId);

      setTutorUserId(response1.data.teachingInformationDto.tutorId);
      console.log("tutorrrr:", response1.data.teachingInformationDto.tutorId);

      if (response1.data.teachingInformationDto.tutorId >= 0)
        setTutorStatus(true);

      login();

      closeLoginPopup();



      navigate("/");
    } catch (error) {
      console.error("로그인 실패:", error);

      setLoginError("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.");
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className={["header", isMain ? "main" : null].join(" ")}>
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
          {isLoggedIn && (
            <>
              <li>
                <Link to="/findtutor">
                  <p>Tutor</p>
                </Link>

              </li>
              <li>
                <Link to="/mypage">
                  <p>My Page</p>
                </Link>

              </li>
              {isLoggedIn && ( // isTutor 상태를 확인하여 표시할 내용 변경
                <li>
                  <Link to="/tutorapply">
                    <p>Tutor Apply</p>
                  </Link>

                </li>
              )}
            </>
          )}
        </ul>
      </nav>
      {isLoggedIn ? (
        <button className="logout-button" onClick={handleLogout}>
          로그아웃
        </button>
      ) : (
        <button className="login-button" onClick={openLoginPopup}>
          로그인
        </button>
      )}

      {showLoginPopup && (
        <div className="login-popup">
          <div className="login-popup-content">
            <h2>로그인</h2>
            <form onSubmit={handleLogin}>
              <label>
                이메일:
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </label>
              <br />
              <label>
                비밀번호:
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </label>
              <br />
              {isLoggedIn ? (
                <button type="button" onClick={handleLogout}>
                  로그아웃
                </button>
              ) : (
                <button type="submit">로그인</button>
              )}
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
