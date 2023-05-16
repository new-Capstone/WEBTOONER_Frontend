import React, { useState } from "react";
import Header from '../components/Header'
import '../styles/Mypage.css'
import User from "../components/User";
import { Link } from "react-router-dom";
import Modal from 'react-modal';

function Edit() {
    const [user, setUser] = useState({
        id:1,
        name: "김지은",
        email: "smkje19999@gamil.com",
        intro: "소개글"
    });

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

    const handleSubmit = (userInfo) => {
        setUser({...user, ...userInfo });
    };

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
            <div className="mp-main">
                <div className="mp-left">

                {[1].map((index) => (
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

                    <User user={user} onSubmit={handleSubmit} />
                        <button onClick={()=> setModalIsOpen(true)}>회원탈퇴</button>
                        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={ModalStyle}>
      	                    <br/>회원탈퇴 하시겠습니까?<br/><br/>
                            <Link to="/">
                                <button>네(메인페이지로)</button>
                            </Link>
                            <button onClick={()=> setModalIsOpen(false)}>아니오</button>
                        </Modal>
                </div>

                <div className='mp-right'>
                    <img src="https://via.placeholder.com/600x300"/>
                    <p>log1</p>
                    <img src="https://via.placeholder.com/600x300"/>
                    <p>log2</p>
                    <img src="https://via.placeholder.com/600x300"/>
                    <p>log3</p>
                    <img src="https://via.placeholder.com/600x300"/>
                    <p>log4</p>
                    <img src="https://via.placeholder.com/600x300"/>
                    <p>log5</p>
                </div>
            </ div>
        </div>
    );
  }

  export default Edit;