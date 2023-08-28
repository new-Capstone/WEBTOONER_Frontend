import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import '../styles/Mypage.css'
import axios from 'axios';

function User(props) {
    const [user, setUser] = useState("");
    
    useEffect(() => {
        axios({
            method: 'GET',
            url:'http://capstone-webtooner.com/user?userId=6'
        }).then(response => setUser(response.data))
    },[]);

    const [profileImage, setProfileImage] = useState(user.profileImage);
    const [username, setUsername] = useState(user.username);
    const [description, setDescription] = useState(user.description);
    const [password, setPassword] = useState('')
    const [selectedImage, setSelectedImage] = useState(null);
    const inputFileRef = useRef(null);

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
    
    const handleUpdateProfile = () => {
      const formData = new FormData();
      // formData.append('userId', 6);
      // formData.append('nickname', username);
      // formData.append('password', password);
      // formData.append('description', description);
      formData.append('profileImage', selectedImage);

      axios.patch(
        'http://capstone-webtooner.com/user/edit?userId=6&nickname='+ username,
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
        })
        .catch((error) => {
          console.error('Error:', error);
          console.log("fail!----------------------------------")
        });
  };


  return (
    <div>
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
    <ul>
        <li>
          <label>
          <input type="text" defaultValue={user.username} onChange={handleNameChange}/>
          </label>
        </li>
        <li>
          <label>
          <input type="text" value={password} onChange={handlepasswordChange} placeholder={user.password} />
            {/* <input type="email" value={userEmail} onChange={handleEmailChange} placeholder={user.userEmail} /> */}
          </label>
        </li>
    </ul>
    <label>
    <textarea defaultValue={user.description} style={{ width: "165px", height: "100px"}} onChange={handleDescriptionChange}/>
    </label>
    <br/><br/>
    <Link to='/mypage'>
      <button onClick={handleUpdateProfile}>수정완료</button>
    </Link>
  </div>
    );
}

export default User;