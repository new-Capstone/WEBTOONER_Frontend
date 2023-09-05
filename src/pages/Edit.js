import React, { useState, useEffect } from "react";
import "../styles/Mypage.css";
import User from "../components/User";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import { useAuth } from "../components/AuthContext"; // AuthContext를 불러옴

function Edit() {
  const [user, setUser] = useState("");
  const { isLoggedIn, userId } = useAuth(); // 로그인 여부와 유저 ID 가져오기

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://capstone-webtooner.com/user?userId=" + userId,
    }).then((response) => setUser(response.data));
  });

  // const [user, setUser] = useState({
  //     id:1,
  //     name: "김지은",
  //     email: "smkje19999@gamil.com",
  //     intro: "소개글"
  // });

  const [logs, setLogs] = useState("");
  var myurl =
    "http://capstone-webtooner.com/beforeimage?beforeImageId=" + userId;

  useEffect(() => {
    axios({
      method: "GET",
      url: myurl,
    }).then((response) => setLogs(response.data));
  });

  const handleSubmit = (userInfo) => {
    setUser({ ...user, ...userInfo });
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const ModalStyle = {
    //modal css
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="mp-container">
      <div className="mp-main">
        <div className="mp-left">
          <h1>마이페이지</h1>
          <User user={user} onSubmit={handleSubmit} />
          <button onClick={() => setModalIsOpen(true)}>탈퇴</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={ModalStyle}
          >
            <br />
            회원탈퇴 하시겠습니까?
            <br />
            <br />
            <Link to="/">
              <button>네(메인페이지로)</button>
            </Link>
            <button onClick={() => setModalIsOpen(false)}>아니오</button>
          </Modal>
        </div>

        <div className="mp-right">
          <h1>이전 결과 둘러보기</h1>
          <img src={logs.beforeImageUri} onClick={() => setModalIsOpen(true)} />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={ModalStyle}
          >
            <img
              src="https://capstone-webtooner.s3.ap-northeast-2.amazonaws.com/dedd7440-ce62-42bc-8abb-4f8ab9c32ae2_.png"
              onClick={() => setModalIsOpen(false)}
            />
          </Modal>
          <p>log1</p>
          <img
            src="https://capstone-webtooner.s3.ap-northeast-2.amazonaws.com/ef030924-26f4-4a71-a672-4bbf204e7250_.png"
            onClick={() => setModalIsOpen(true)}
          />
          <p>log2</p>
          <img src="https://capstone-webtooner.s3.ap-northeast-2.amazonaws.com/059ff728-1477-4f5d-87a9-77d06234037f_.png" />
          <p>log3</p>
          <img src="https://capstone-webtooner.s3.ap-northeast-2.amazonaws.com/7c08b716-bd3f-41ef-a49a-fbf7b01adffc_.png" />
          <p>log4</p>
        </div>
      </div>
    </div>
  );
}

export default Edit;
