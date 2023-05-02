import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Tutor(props) {
    
    const {nickname, email, intro, genre} = props.tutor; 
    const [inputNickname, setInputNickname] = useState(nickname); // 이름을 입력받는 상태값
    const [inputEmail, setInputEmail] = useState(email); // 이메일을 입력받는 상태값
    const [inputIntro, setInputIntro] = useState(intro); // 자기소개를 입력받는 상태값
    const [inputGenre, setInputGenre] = useState(genre);

    const handleNickNameChange = (e) => {
        setInputNickname(e.target.value);
    };

    const handleEmailChange = (e) => {
        setInputEmail(e.target.value);
    };

    const handleIntroChange = (e) => {
        setInputIntro(e.target.value);
    };

    const handleGenreChange = (e) => {
        setInputGenre(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
        nickname: inputNickname,
        email: inputEmail,
        Intro: inputIntro,
        genre: inputGenre
        });
    };

    return (
    <form onSubmit={handleSubmit}>
                <label>
                    사용할 닉네임을 입력해주세요.<br/>
                    <input type="text" value={inputNickname} onChange={handleNickNameChange} placeholder="nickname" /><br/>
                </label>

                <label>
                    <br/>튜티들에게 제공할 이메일을 입력해주세요.<br/>
                    <input type="text" value={inputEmail} onChange={handleEmailChange} placeholder="e-mail"/><br/>
                </label>
    
                <label>
                    <br/>튜터님의 주요 장르를 입력해주세요.<br/>
                    <input type="text" value={inputGenre} onChange={handleGenreChange} placeholder="genre"/><br/>
                </label>
        <br/>튜티들에게 자신을 소개해주세요<br/>
        <label>
            <input type="text" style={{ width: "220px", height: "100px"}} value={inputIntro} onChange={handleIntroChange} placeholder="자기소개"/>
        </label>

        <br/><br/>
        <Link to="/tutorportfolio">
            <button type="submit">다음으로</button>
        </Link>
    </form>
    );
}

export default Tutor;