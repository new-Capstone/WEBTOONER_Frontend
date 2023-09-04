import React, { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./../styles/TutorPortfolio.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

function TutorPortfolio() {
  const fileInputRef = useRef(null);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleUpload = (event) => {
    event.preventDefault();
    const files = fileInputRef.current.files;
    const formData = new FormData();

    for (const file of files) {
      formData.append("multipartFileList", file);
    }

    axios({
      method: "POST",
      url: "http://capstone-webtooner.com/portfolio?tutorId=1",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((result) => {
        console.log("요청성공");
        console.log(result);
      })
      .catch((error) => {
        console.log("요청실패");
        console.log(error);
      });
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const urls = [];

    for (const file of files) {
      urls.push(URL.createObjectURL(file));
    }

    setPreviewUrls(urls);
  };

  return (
    <div className="mp-container">
      <div className="mp-left">
        <br />
        <h1>포트폴리오 등록</h1>
      </div>
      <div className="mp-main">
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <div className="preview-container">
          {previewUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Preview ${index}`}
              className="preview-image"
            />
          ))}
        </div>
        <button onClick={handleUpload}>업로드</button>
      </div>
    </div>
  );
}

export default TutorPortfolio;