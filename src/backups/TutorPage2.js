import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../Jieun/styles/Mypage.css';
import noir from './TutorDetailData/noir.json';
import noir_isadded from './TutorDetailData/noir_isadded.json';
import romance from './TutorDetailData/romance.json';
import action from './TutorDetailData/action.json';
import horror from './TutorDetailData/horror.json';
import { useLocation } from "react-router-dom";
import axios from 'axios';
//id=>카테고리 이름 
// 튜터 정보 
// http://capstone-webtooner.com/tutorapi?tutorId=1

// 튜터 이미지 /tutorapi/allByCategory
// http://capstone-webtooner.com/tutorapi/allByCategory?categoryName=noir


//튜터 상세 페이지 
const Tutorpage2 = () => {
    //튜터 포트폴리오에서 link로 값 전달해주기 
    //이 값이 true냐 false냐에 따라 렌더링 될 이미지 달라짐 

    const location = useLocation();
    const addedData = location.state.isAdded;

    const { genre, id } = useParams();

    const [TutorData, setData] = useState({
        tutorId: 0,
        nickname: '',
        email: '',
        intro: '',
        category: '',
        portfolio_img: []
    });

    let filteredData;
    useEffect(() => {
        if (genre === 'noir') {
            const filteredData = addedData ?
                (noir_isadded.find((item) => parseInt(item.tutorId) === Number(id)))
                :
                (noir.find((item) => parseInt(item.tutorId) === Number(id)))
            setData(filteredData);
        }
        else if (genre === 'romance') {
            const filteredData = romance.find((item) => parseInt(item.tutorId) === Number(id));
            setData(filteredData);
        }
        else if (genre === 'action') {
            const filteredData = action.find((item) => parseInt(item.tutorId) === Number(id));
            setData(filteredData);
        }
        else {
            const filteredData = horror.find((item) => parseInt(item.tutorId) === Number(id));
            setData(filteredData);
        }
    }, [id, genre]);

    console.log(addedData);
    console.log(TutorData);

    return (
        <div className='mp-container'>


            <div className="mp-main" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div className="mp-left" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <img src="https://via.placeholder.com/231x231" alt="side-image" />
                    <div className="introduce" style={{ padding: "10px", fontSize: "20px" }}>
                        <p>
                            {TutorData.nickname}<br />
                            {TutorData.email}<br />
                            {TutorData.intro}
                        </p>
                    </div>

                </div>

                <div className='mp-right' style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    {TutorData.portfolio_img.map((imageUrl, index) => (
                        <img key={index} src={imageUrl} alt={`Portfolio Image ${index}`} style={{ width: "600px", height: "300px", marginBottom: "20px", borderRadius: "5px", border: "1px solid #ececec" }} />
                    ))}
                    <p>튜터에게 연락하기</p>
                    <Link to='/chat'>
                        <button>contact</button>
                    </Link>
                </div>

            </ div>
        </div>
    );
}

export default Tutorpage2;
