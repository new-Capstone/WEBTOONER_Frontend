import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Mypage.css";
import axios from "axios";
import { useAuth } from "../components/AuthContext"; // AuthContext를 불러옴

function User(props) {
  const [user, setUser] = useState("");
  const { isLoggedIn, userId } = useAuth(); // 로그인 여부와 유저 ID 가져오기

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://capstone-webtooner.com/user?userId=" + userId,
    }).then((response) => setUser(response.data));
  }, []);

  const [profileImage, setProfileImage] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
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
      let url = "http://capstone-webtooner.com/user/edit?userId=" + userId;
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
      userId: 6,
      nickname: username,
      password: password,
      description: description,
    };
    formData.append("profileImage", selectedImage);
    formData.append(
      "data",
      new Blob([JSON.stringify(data)], {
        type: "application/json",
      })
    );

    await axios
      .patch(url, formData, {
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data); // 업데이트된 사용자 데이터 또는 API 응답 데이터 처리
        console.log("success!");
        console.log(url);
      })
      .catch((error) => {
        console.error("Error:", error);
        console.log("fail!----------------------------------");
      });
  };

  return (
    <div>
      프로필이미지
      <br />
      <li>
        <img
          src={profileImage}
          alt="Profile Image"
          width="230px"
          height="230px"
          style={{ borderRadius: "50%", cursor: "pointer" }}
          onClick={handleImageClick}
        />
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleProfileImageChange}
          ref={inputFileRef}
        />
      </li>
      닉네임
      <br />
      <li>
        <label>
          <input
            type="text"
            defaultValue={user.username}
            onChange={handleNameChange}
          />
        </label>
      </li>
      비밀번호
      <br />
      <li>
        <label>
          <input
            type="text"
            value={password}
            onChange={handlepasswordChange}
            placeholder={user.password}
          />
          {/* <input type="email" value={userEmail} onChange={handleEmailChange} placeholder={user.userEmail} /> */}
        </label>
      </li>
      소개
      <br />
      <label>
        <textarea
          defaultValue={user.description}
          style={{ width: "165px", height: "100px" }}
          onChange={handleDescriptionChange}
        />
      </label>
      <br />
      <br />
      <Link to="/mypage">
        <button onClick={handleUpdateProfile}>수정</button>
      </Link>
    </div>
  );
}

export default User;
