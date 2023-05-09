import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/AssignTutor.css";

function AssignTutor() {
  const [introduction, setIntroduction] = useState("");
  const [genres, setGenres] = useState([]);
  const [imageData, setImageData] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

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

  function previewImage(event, index) {
    const reader = new FileReader();
    reader.onload = () => {
      setImageData((prevImageData) => [
        ...prevImageData.filter((image) => image.id !== index),
        { id: index, data: reader.result },
      ]);
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  return (
    <div>
      <Header />
      <div className="assign-tutor-container">
        <div className="introduction-section">
          <h2>자기소개</h2>
          <textarea
            value={introduction}
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
        <div className="photo-section">
          <h2>사진 업로드</h2>
          <div className="photo-buttons">
            {[1, 2, 3, 4].map((index) => (
              <div className="upload-box" key={index}>
                <label htmlFor={`file-input-${index}`}>
                  {imageData.find((image) => image.id === index) ? (
                    <img
                      id={`previewImage-${index}`}
                      src={imageData.find((image) => image.id === index).data}
                      alt="Upload image"
                    />
                  ) : (
                    <img
                      id={`previewImage-${index}`}
                      src="https://via.placeholder.com/150x150"
                      alt="Upload image"
                    />
                  )}
                </label>
                <input
                  id={`file-input-${index}`}
                  type="file"
                  accept="image/*"
                  onChange={(event) => previewImage(event, index)}
                />
              </div>
            ))}
          </div>
        </div>{" "}
        <button className="register-button" onClick={handleSubmit}>
          등록
        </button>
        {showConfirmation && (
          <div className="confirmation-modal">
            <div className="confirmation-modal-content">
              <h2>등록하시겠습니까?</h2>
              <div className="buttons">
                <button onClick={() => setShowConfirmation(false)}>
                  
                  아니오
                </button>
                <button>예</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AssignTutor;
