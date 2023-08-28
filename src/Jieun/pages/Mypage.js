import React, { useEffect, useState } from "react";
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import '../styles/Mypage.css'
import axios from 'axios';
import Modal from 'react-modal';
import User from "../components/User";

function Mypage() {

    const [user, setUser] = useState("");
    
    useEffect(() => {
        axios({
            method: 'GET',
            url:'http://capstone-webtooner.com/user?userId=6'
        }).then(response => setUser(response.data))
    })

    // const [afters, setAfters] = useState("");
    // useEffect(()=>{
    //     axios({
    //         method: 'GET',
    //         url: "http://capstone-webtooner.com/afterimage?afterImageId=10"
    //     }).then(response => setLogs(response.data))
    // })

    const [logs, setLogs] = useState("");
    const id = 15
    const myurl = 'http://capstone-webtooner.com/beforeimage?beforeImageId='+ id
    
    useEffect(()=>{
        axios({
            method: 'GET',
            url: myurl
        }).then(response => setLogs(response.data))
    })

    const [showImage, setShowImage] = useState(true);

    const handleClick = () => {
      setShowImage(!showImage);
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
                <h1>마이페이지</h1>
                <img src={user.profileImage}  alt="side-image" />
                    <ul>
                        <li>{user.username}</li> 
                        <li>{user.userEmail}</li>
                    </ul>
                    <p>{user.description}</p>

                    <Link to='/edit'>
                        <button>Edit</button>
                    </Link>
            </div>

            <div className='mp-right'>
                <h1>이전 결과 둘러보기</h1>
                <img src={logs.beforeImageUri} onClick={()=> setModalIsOpen(true)}/>
                    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={ModalStyle}>
                        <img src="https://capstone-webtooner.s3.ap-northeast-2.amazonaws.com/dedd7440-ce62-42bc-8abb-4f8ab9c32ae2_.png" onClick={()=> setModalIsOpen(false)}/>
                    </Modal>
                <p>log1</p>
                <img src= "https://capstone-webtooner.s3.ap-northeast-2.amazonaws.com/ef030924-26f4-4a71-a672-4bbf204e7250_.png" onClick={()=> setModalIsOpen(true)}/>
                <p>log2</p>
                <img src="https://capstone-webtooner.s3.ap-northeast-2.amazonaws.com/059ff728-1477-4f5d-87a9-77d06234037f_.png"/>
                <p>log3</p>
                <img src="https://capstone-webtooner.s3.ap-northeast-2.amazonaws.com/7c08b716-bd3f-41ef-a49a-fbf7b01adffc_.png"/>
                <p>log4</p>
            </div>
        </ div>
    </div>
    );
  }
  
  export default Mypage;