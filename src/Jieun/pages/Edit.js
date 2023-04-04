import React, { useState } from "react";
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import '../styles/Mypage.css'

function Edit() {
    const [name, setName] = useState(''); // 이름을 입력받는 상태값
    const [email, setEmail] = useState(''); // 이메일을 입력받는 상태값
    const [intro, setIntro] = useState(''); // 자기소개를 입력받는 상태값
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // 서버로 수정된 정보를 전송하는 API 호출
      // ...
    }


    return (
    
        <div className='mp-container'>
            <Header />
            <div className="mp-main">
                <div className="mp-left">
                <Link to="/photoupload">
                    <img src="https://via.placeholder.com/231x231" alt="side-image" />
                </Link>    
                    <form onSubmit={handleSubmit}>
                        <ul>
                            <li>
                                <label>
                                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="name" />
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="e-mail"/>
                                </label>
                            </li>
                        </ul>
                        <label>
                            <textarea style={{ width: "220px", height: "100px"}} value={intro} onChange={(event) => setIntro(event.target.value)} placeholder="자기소개"/>
                        </label>
                        <br/><br/>
                        <Link to="/mypage">
                        <button type="submit">수정완료</button>
                        </Link>
                    </form>

                        <Link to="/">
                            <button>회원탈퇴</button>
                        </Link>
                </div>

                <div className='mp-right'>
                    <img src="https://via.placeholder.com/600x300"/>
                    <p>log1</p>
                    <img src="https://via.placeholder.com/600x300"/>
                    <p>log2</p>
                    <img src="https://via.placeholder.com/600x300"/>
                    <p>log3</p>
                    <img src="https://via.placeholder.com/600x300"/>
                    <p>log4</p>
                    <img src="https://via.placeholder.com/600x300"/>
                    <p>log5</p>
                </div>
            </ div>
        </div>
    );
  }

  export default Edit;