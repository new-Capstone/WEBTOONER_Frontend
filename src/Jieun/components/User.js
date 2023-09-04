import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Mypage.css'
import Modal from 'react-modal';


function User(props) {
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

  const [user, setUser] = useState("");
    
  useEffect(() => {
    axios({
      method: 'GET',
      url:'http://capstone-webtooner.com/user?userId=6'
    }).then(response => setUser(response.data))
  },[]);

    const [profileImage, setProfileImage] = useState("");
    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [password, setPassword] = useState('')
    const [selectedImage, setSelectedImage] = useState(null);
    const inputFileRef = useRef(null);

    useEffect(() => {
      if (user.profileImage) {
        setProfileImage(user.profileImage);
      }
    }, [user.profileImage]);

    const handleImageClick = () => {
      inputFileRef.current.click();
    };

    const handleProfileImageChange = (event) => {
        const selectedFile = event.target.files[0];

          if (selectedFile) {
            setSelectedImage(selectedFile);
            const reader = new FileReader();
            reader.onload = () => {
              setProfileImage(reader.result);
            };
            reader.readAsDataURL(selectedFile);
          }
        };
    
    const handleNameChange = (event) => {
      setUsername(event.target.value);
    };

    
    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    };

    const handlepasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const handleUpdateProfile = async () => {

      const generateUpdateUrl = () => {
        let url = 'http://capstone-webtooner.com/user/edit?userId=6';
        if (username) {
          url += `&nickname=${username}`;
        }
        if (password) {
          url += `&password=${password}`;
        }
        if (description) {
          url += `&description=${description}`;
        }
        return url;
      };

      const url = generateUpdateUrl();
      const formData = new FormData();
      const data = {
        'userId': 6,
        'nickname': username,
        'password': password,
        'description': description
      }
      formData.append('profileImage', selectedImage);
      formData.append('data', new Blob([JSON.stringify(data)],{
        type: "application/json"
     }));

      await axios.patch(
        url,
        formData,
        {
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        } 
      )
        .then((response) => {
          console.log(response.data); // 업데이트된 사용자 데이터 또는 API 응답 데이터 처리
          console.log("success!")
          console.log(url)
        })
        .catch((error) => {
          console.error('Error:', error);
          console.log("fail!----------------------------------")
        });
  };


  return (
    <div>
      프로필이미지<br/>
      <li>
      <img
        src={profileImage}
        alt="Profile Image"
        width="230px"
        height="230px"
        style={{ borderRadius: '50%', cursor: 'pointer' }}
        onClick={handleImageClick}
      />
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleProfileImageChange}
        ref={inputFileRef}
      />
      </li>
  
      닉네임<br/>
        <li>
          <label>
          <input type="text" defaultValue={user.username} onChange={handleNameChange}/>
          </label>
        </li>
        비밀번호<br/>
        <li>
          <label>
          <input type="text" value={password} onChange={handlepasswordChange} placeholder={user.password} />
            {/* <input type="email" value={userEmail} onChange={handleEmailChange} placeholder={user.userEmail} /> */}
          </label>
        </li>
  
    소개<br/>
    <label>
    <textarea defaultValue={user.description} style={{ width: "165px", height: "100px"}} onChange={handleDescriptionChange}/>
    </label>
    <br/><br/>
    <Link to='/mypage'>
      <button onClick={handleUpdateProfile}>수정</button>
    </Link>
    <button onClick={()=> setModalIsOpen(true)}>탈퇴</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={ModalStyle}>
        <br/>회원탈퇴 하시겠습니까?<br/><br/>
      <Link to="/">
        <button>네(메인페이지로)</button>
      </Link>
        <button onClick={()=> setModalIsOpen(false)}>아니오</button>
      </Modal>
  </div>
    );
}

export default User;