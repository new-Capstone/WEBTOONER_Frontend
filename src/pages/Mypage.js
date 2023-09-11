import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Mypage.css";
import axios from "axios";
import Modal from "react-modal";
import User from "../components/User";
import { useAuth } from "../components/AuthContext"; // AuthContext를 불러옴

function Mypage() {
  const { isLoggedIn, userId } = useAuth(); // 로그인 여부와 유저 ID 가져오기

  const [user, setUser] = useState("");

  const [logs, setLogs] = useState("");

  var id = userId;
  var myurl = "http://capstone-webtooner.com/beforeimage?beforeImageId=" + id;

  useEffect(() => {
    // 이 부분은 로그인 상태에 따라 다르게 처리할 수 있습니다.
    // 예를 들어, 로그인한 경우에만 유저 정보를 가져오도록 처리할 수 있습니다.

    if (isLoggedIn) {
      axios({
        method: "GET",
        url: myurl,
      });

      axios({
        method: "GET",
        url: "http://capstone-webtooner.com/user?userId=" + id,
      }).then((response) => setUser(response.data));
    }
  }, [isLoggedIn]);

  const [showImage, setShowImage] = useState(true);

  const handleClick = () => {
    setShowImage(!showImage);
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
          <img src={user.profileImage} alt="side-image" />
          <ul>
            <li>{user.username}</li>
            <li>{user.userEmail}</li>
          </ul>
          <p>{user.description}</p>

          <Link to="/edit">
            <button>Edit</button>
          </Link>
        </div>

        <div className="mp-right">
          <h1>이전 결과 둘러보기</h1>
          최근 4개의 변환 이미지입니다. 클릭하면 변환 후 이미지를 조회할 수
          있습니다.
          <br />
          <br />
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

export default Mypage;
