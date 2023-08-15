import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/SignupPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동 기능 구현

  const handleSignup = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("userEmail", userEmail);
    formData.append("password", password);
    formData.append("description", description);
    if (profileImage) {
      formData.append("profileImage", profileImage);
    }

    try {
      const response = await axios.post(
        "http://capstone-webtooner.com/user/auth/sign-up",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // 회원 가입 성공 시 처리
      console.log("회원 가입 성공:", response.data);
      window.alert("회원 가입이 완료되었습니다.");
      navigate("/about");
    } catch (error) {
      // 회원 가입 실패 시 처리
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("서버와의 통신 중 오류가 발생했습니다.");
      }

      window.alert("회원 가입이 실패하였습니다.");
    }
  };

  return (
    <div>
      <Header />

      <div className="assign-tutor-container">
        <h2>회원가입</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSignup}>
          <label>
            아이디:
            <input
              type="text"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            이메일:
            <input
              type="text"
              className="input-field"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            비밀번호:
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <label>
            자기 소개:
            <textarea
              className="textarea-field"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <br />
          <label>
            프로필 이미지:
            <div className="upload-box">
              {profileImage ? (
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="프로필 이미지"
                />
              ) : (
                <span>이미지 업로드</span>
              )}
              <input
                type="file"
                accept="image/*"
                className="file-input"
                onChange={(e) => setProfileImage(e.target.files[0])}
              />
            </div>
          </label>
          <br />
          <div className="register-button-container">
            <button type="submit" className="register-button">
              회원가입
            </button>
          </div>
        </form>
      </div>
      {errorMessage && (
        <div className="error-modal">
          <div className="error-modal-content">
            <h2>에러 발생</h2>
            <p>{errorMessage}</p>
            <button onClick={() => setErrorMessage("")}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignupPage;
