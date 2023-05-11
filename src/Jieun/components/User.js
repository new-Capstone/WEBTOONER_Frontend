import React, { useState } from "react";
import { Link } from 'react-router-dom';

function User(props) {
    
    const {name, email, intro} = props.user; 
    const [inputName, setInputName] = useState(name); // 이름을 입력받는 상태값
    const [inputEmail, setInputEmail] = useState(email); // 이메일을 입력받는 상태값
    const [inputIntro, setInputIntro] = useState(intro); // 자기소개를 입력받는 상태값

    const handleNameChange = (e) => {
        setInputName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setInputEmail(e.target.value);
    };

    const handleIntroChange = (e) => {
        setInputIntro(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
        name: inputName,
        email: inputEmail,
        Intro: inputIntro,
        });
    };

    return (
    <form onSubmit={handleSubmit}>
        <ul>
            <li>
                <label>
                    <input type="text" value={inputName} onChange={handleNameChange} placeholder="name" />
                </label>
            </li>
            <li>
                <label>
                    <input type="text" value={inputEmail} onChange={handleEmailChange} placeholder="e-mail"/>
                </label>
            </li>
        </ul>
        <label>
            <textarea
            value={inputIntro}
            style={{ width: "165px", height: "100px"}}
            onChange={handleIntroChange}
            placeholder="자기소개"
            ></textarea>
        </label>
        <br/><br/>
        {/* <Link to="/mypage"> */}
            <button type="submit">수정완료</button>
        {/* </Link> */}
    </form>
    );
}

export default User;