import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function User(props) {
    
    // const {name, email, intro} = props.user; 
    // const [inputName, setInputName] = useState(name); // 이름을 입력받는 상태값
    // const [inputEmail, setInputEmail] = useState(email); // 이메일을 입력받는 상태값
    // const [inputIntro, setInputIntro] = useState(intro); // 자기소개를 입력받는 상태값

    // const handleNameChange = (e) => {
    //     setInputName(e.target.value);
    // };

    // const handleEmailChange = (e) => {
    //     setInputEmail(e.target.value);
    // };

    // const handleIntroChange = (e) => {
    //     setInputIntro(e.target.value);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     props.onSubmit({
    //     name: inputName,
    //     email: inputEmail,
    //     Intro: inputIntro,
    //     });
    // };

    const [user, setUser] = useState("");
    
    useEffect(() => {
        axios({
            method: 'GET',
            url:'http://capstone-webtooner.com/user?userId=20'
        }).then(response => setUser(response.data))
    })

    const [profileImage, setProfileImage] = useState(user.profileImage);
    const [username, setUsername] = useState(user.username);
    const [userEmail, setUserEmail] = useState(user.userEmail);
    const [description, setDescription] = useState(user.description);

    const handleProfileImageChange = (event) => {
        setProfileImage(event.target.value);
      };
    
    const handleNameChange = (event) => {
        setUsername(event.target.value);
      };
    
    const handleEmailChange = (event) => {
        setUserEmail(event.target.value);
      };
    
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
      };
    
    const handleUpdateProfile = () => {
        const updatedData = {
          profileImage,
          username,
          userEmail,
          description,
        };

    // const userId = '123'; // 사용자의 고유 ID로 수정해야 함

    axios.patch('http://capstone-webtooner.com/user?userId=20', updatedData)
      .then((response) => {
        console.log(response.data); // 업데이트된 사용자 데이터 또는 API 응답 데이터 처리
        console.log("success!")
      })
      .catch((error) => {
        console.error('Error:', error);
        console.log("fail!")
      });
  };

    return (
    // <form onSubmit={handleSubmit}>
    //     <ul>
    //         <li>
    //             <label>
    //                 <input type="text" value={inputName} onChange={handleNameChange} placeholder="name" />
    //             </label>
    //         </li>
    //         <li>
    //             <label>
    //                 <input type="text" value={inputEmail} onChange={handleEmailChange} placeholder="e-mail"/>
    //             </label>
    //         </li>
    //     </ul>
    //     <label>
    //         <textarea
    //         value={inputIntro}
    //         style={{ width: "165px", height: "100px"}}
    //         onChange={handleIntroChange}
    //         placeholder="자기소개"
    //         ></textarea>
    //     </label>
    //     <br/><br/>
    //     {/* <Link to="/mypage"> */}
    //         <button type="submit">수정완료</button>
    //     {/* </Link> */}
    // </form>
    <div>
    
    <input type="text" value={profileImage} onChange={handleProfileImageChange} placeholder={user.profileImage} />
    <ul>
        <li>
          <label>
          <input type="text" value={username} onChange={handleNameChange} placeholder={user.username} />
          </label>
        </li>
        <li>
          <label>
            <input type="email" value={userEmail} onChange={handleEmailChange} placeholder={user.userEmail} />
          </label>
        </li>
    </ul>
    <label>
    <textarea value={description} style={{ width: "165px", height: "100px"}} onChange={handleDescriptionChange} placeholder={user.description}/>
    </label>
    <br/><br/>
    <button onClick={handleUpdateProfile}>수정완료</button>
  
  </div>
    );
}

export default User;