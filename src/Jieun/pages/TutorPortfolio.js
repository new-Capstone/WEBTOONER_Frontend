import React, { useState } from "react";
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import '../styles/Mypage.css'
import Modal from 'react-modal';

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

      const [modalIsOpen, setModalIsOpen] = useState(false);

      const ModalStyle = { //modal css
          content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
          }
      };
  

    return (
    
        <div className='mp-container'>
            <Header />
            <div className="mp-left">
                <br/>
                <h1>포트폴리오 등록</h1>
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
                <button onClick={()=> setModalIsOpen(true)}>등록하기</button>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={ModalStyle}>
                <br/>등록하시겠습니까?<br/><br/>
                <Link to="/tutorpage">    
                    <button>네</button>
                </Link>                
                <button onClick={()=> setModalIsOpen(false)}>아니오</button>
                </Modal>
            </ div>
         </div>
       
    );
  }

  export default TutorPortfolio;