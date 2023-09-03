import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext"; // AuthContext를 불러옵니다.
import "../styles/Header.css";

function Header() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [loginEmail, setLoginEmail] = useState(""); // 이메일 상태 관리
  const [loginPassword, setLoginPassword] = useState(""); // 비밀번호 상태 관리
  const [loginError, setLoginError] = useState(""); // 로그인 오류 메시지 상태 관리

  const { isLoggedIn, login, logout, setAuthUserId } = useAuth();

  const openLoginPopup = () => {
    setShowLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);

    // 팝업 닫을 때 입력값 초기화
    setLoginEmail("");
    setLoginPassword("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // 로그인 요청 데이터
    const loginData = {
      email: loginEmail,
      password: loginPassword,
    };

    try {
      // 서버로 POST 요청을 보냄
      const response = await axios.post(
        "https://capstone-webtooner.com/login",
        loginData
      );

      // 로그인 성공 처리
      console.log("로그인 성공:", response.data);

      // 유저 ID 설정
      setAuthUserId(response.data.userId); // 이 부분을 추가합니다.

      // 로그인 상태를 true로 설정
      login();

      // 로그인 팝업 닫기
      closeLoginPopup();
      
    } catch (error) {
      // 로그인 실패 처리
      console.error("로그인 실패:", error);

      // 오류 메시지 표시
      setLoginError("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.");
    }
  };

  const handleLogout = () => {
    // 로그아웃 버튼 클릭 시 로그인 상태를 false로 설정
    logout();
    // 추가적인 로그아웃 처리 로직을 여기에 추가할 수 있습니다.
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

      {isLoggedIn ? ( // 로그인 상태에 따라 버튼 표시 여부 결정
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
              {isLoggedIn ? ( // 로그인 상태에 따라 버튼 표시 여부 결정
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
