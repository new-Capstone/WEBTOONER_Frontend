import React, { useState } from "react";
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import '../styles/Mypage.css'

function TutorPortfolio() {

    const [imageData, setImageData] = useState([]);

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
    
        <div className='mp-container'>
            <Header />
            <div className="mp-left">
                <h1>포트폴리오 등록하기</h1>
            </div>
            <div className="mp-main">
            {[1,2,3,4].map((index) => (
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

            <div className="mp-right">    
                <Link to="/TutorPortfolio">
                <button type="submit">등록완료</button>
                </Link>
            </ div>
        </div>
    );
  }

  export default TutorPortfolio;