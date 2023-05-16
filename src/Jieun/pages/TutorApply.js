import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/TutorApply.css";
import { Link } from "react-router-dom";

function TutorApply() {
  const [inputNickname, setInputNickname] = useState(""); // 이름을 입력받는 상태값
  const [inputEmail, setInputEmail] = useState(""); // 이메일을 입력받는 상태값  
  const [introduction, setIntroduction] = useState("");
  const [genres, setGenres] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputNicknameChange = (e) => {
    const { value } = e.target;
    setInputNickname(value);
  };

  const handleInputEmailChange = (e) => {
    const { value } = e.target;
    setInputEmail(value);
  };

  const handleIntroductionChange = (e) => {
    const { value } = e.target;
    setIntroduction(value);
  };

  const handleGenreSelect = (selectedGenre) => {
    setGenres((prevGenres) =>
      prevGenres.some((genre) => genre.id === selectedGenre.id)
        ? prevGenres.filter((genre) => genre.id !== selectedGenre.id)
        : [...prevGenres, selectedGenre]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 회원 등록 처리
    setShowConfirmation(true);
    {
      showConfirmation && (
        <div className="confirmation-modal">
          <h2>등록하시겠습니까?</h2>
          <div className="buttons">
            <button onClick={() => setShowConfirmation(false)}>아니오</button>
            <button>예</button>
          </div>
        </div>
      );
    }
  };

  
  return (
    <div>
      <Header />
      <div className="assign-tutor-container">
        <div className="introduction-section">
            <h2>닉네임</h2>
            <input type="text" value={inputNickname} onChange={handleInputNicknameChange} placeholder="nickname" />
            
            <h2>튜터 이메일</h2>
            <input type="text" value={inputEmail} onChange={handleInputEmailChange} placeholder="e-mail"/>

          <h2>자기소개</h2>
          <textarea
            value={introduction}
            style={{ width: "780px", height: "150px"}}
            onChange={handleIntroductionChange}
            placeholder="자기소개를 입력하세요"
          ></textarea>
        </div>
        <div className="genre-section">
          <h2>장르 선택</h2>
          <div className="genre-buttons">
            <button
              className={genres.includes("장르1") ? "selected" : ""}
              onClick={() => handleGenreSelect("장르1")}
            >
              장르1
            </button>
            <button
              className={genres.includes("장르2") ? "selected" : ""}
              onClick={() => handleGenreSelect("장르2")}
            >
              장르2
            </button>
            <button
              className={genres.includes("장르3") ? "selected" : ""}
              onClick={() => handleGenreSelect("장르3")}
            >
              장르3
            </button>
            <button
              className={genres.includes("장르4") ? "selected" : ""}
              onClick={() => handleGenreSelect("장르4")}
            >
              장르4
            </button>
          </div>  
        </div>

        <Link to="/tutorportfolio">
            <button type="submit">다음으로</button>
        </Link>
        </div>
    </div>
  );
}

export default TutorApply;
