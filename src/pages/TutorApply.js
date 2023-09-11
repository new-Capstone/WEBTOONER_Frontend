import React, { useState, useRef, useEffect } from "react";
import "../styles/TutorApply.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../components/AuthContext"; // AuthContext를 불러옴

//http://capstone-webtooner.com/tutorapi

function TutorApply() {
  //userId 23부터 시작
  //이것을 localstorage에 저장해서 사용할 것 
  //localStorage.setItem('nextUserId', [23]);
  //console.log(localStorage.getItem('nextUserId'))
  const { isLoggedIn, userId, setTutorStatus, setTutorUserId } = useAuth(); // 로그인 여부와 유저 ID 가져오기
  const [inputNickname, setInputNickname] = useState("");  //tutorName
  const [inputEmail, setInputEmail] = useState(""); //email 
  const [introduction, setIntroduction] = useState(""); //description_introduction
  const [genres, setGenres] = useState([]);  //categoryName-genre

  const navigate = useNavigate();

  //사용자로부터 기본사항 입력받는 부분
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

  const handleCreateTutor = async () => {
    try {
      const response = await axios.post("https://capstone-webtooner.com/tutorapi", {
        "userId": userId,
        "description": introduction,
        "categoryNames": genres,
        "tutorName": inputNickname,
        "tutorEmail": inputEmail
      });
      console.log(response);
      setTutorStatus(true);
      setTutorUserId(response.data.tutorId);
      //이 부분을 localStorage 추가하는 것으로 바꿀 것 
      //setUserId((prevUserId) => prevUserId + 1);
      //localStorage.setItem('nextUserId', userId + 1);

    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      navigate(`/tutorportfolio/${genres[0]}/${userId}`);
    }, 100)

  }

  useEffect(() => {
    console.log(userId)
  }, [userId])

  return (
    <div>
      <div className="assign-tutor-container">
        <div className="introduction-section">
          <h2>닉네임</h2>
          <input type="text" value={inputNickname} onChange={handleInputNicknameChange} placeholder="nickname" />

          <h2>튜터 이메일</h2>
          <input type="text" value={inputEmail} onChange={handleInputEmailChange} placeholder="e-mail" />

          <h2>자기소개</h2>
          <textarea
            value={introduction}
            style={{ width: "780px", height: "150px" }}
            onChange={handleIntroductionChange}
            placeholder="자기소개를 입력하세요"
          ></textarea>
        </div>

        <div className="genre-section">
          <h2>장르 선택</h2>
          <div className="genre-buttons">
            <button
              className={genres.includes("noir") ? "selected" : ""}
              onClick={() => handleGenreSelect("noir")}
            >
              장르1
            </button>
            <button
              className={genres.includes("romance") ? "selected" : ""}
              onClick={() => handleGenreSelect("romance")}
            >
              장르2
            </button>
            <button
              className={genres.includes("action") ? "selected" : ""}
              onClick={() => handleGenreSelect("action")}
            >
              장르3
            </button>
            <button
              className={genres.includes("horror") ? "selected" : ""}
              onClick={() => handleGenreSelect("horror")}
            >
              장르4
            </button>
          </div>
        </div>

        <button type="submit" onClick={handleCreateTutor}>다음으로</button>
      </div>

    </div>
  );
}

export default TutorApply;