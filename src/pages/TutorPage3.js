import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Mypage.css";
import axios from "axios";
import { useAuth } from "../components/AuthContext"; // AuthContext를 불러옴

//id=>카테고리 이름
// 튜터 정보
// http://capstone-webtooner.com/tutorapi?tutorId=1

// 튜터 이미지 /tutorapi/allByCategory
// http://capstone-webtooner.com/tutorapi/allByCategory?categoryName=noir

//튜터 상세 페이지
const Tutorpage3 = () => {
  //주소창을 받을 tutorId는 tutorId
  const { tutorId } = useParams();

  const [TutorData, setData] = useState({
    tutorId:0,
    nickname: "",
    email: "",
    intro: "",
    category: "",
    portfolio_img: [],
  });

  useEffect(() => {
    axios
      .all([
        axios.get(`http://capstone-webtooner.com/tutorapi?tutorId=${tutorId}`),
        axios.get(
          `http://capstone-webtooner.com/portfolio/tutorId?tutorId=${tutorId}`
        ),
      ])
      .then(
        axios.spread((res1, res2) => {
          console.log(res1, res2);
          setData({
            tutorId: res1.data.tutorId,
            nickname: res1.data.tutorName,
            email: res1.data.tutorEmail,
            intro: res1.data.description,
            category: res1.data.categoryNames[0],
            portfolio_img: res2.data,
          });
        })
      )
      .catch((error) => console.log(error));
  }, [tutorId]);

  console.log(TutorData);

  return (
    <div>
      <div
        className="mp-main"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          className="mp-left"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img src="https://via.placeholder.com/231x231" alt="side-image" />
          <div
            className="introduce"
            style={{ padding: "10px", fontSize: "20px" }}
          >
            <p>
              {TutorData.nickname}
              <br />
              {TutorData.email}
              <br />
              {TutorData.intro}
            </p>
          </div>
        </div>

        <div
          className="mp-right"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {TutorData.portfolio_img.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl.imageUri}
              alt={`Portfolio_${index}`}
              style={{
                width: "600px",
                height: "300px",
                marginBottom: "20px",
                borderRadius: "5px",
                border: "1px solid #ececec",
              }}
            />
          ))}
          <p>튜터에게 연락하기</p>
          <Link to="/chat">
            <button>contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tutorpage3;
