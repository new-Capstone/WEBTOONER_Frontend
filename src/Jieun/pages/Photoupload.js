import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


//팝업창으로 하는 방법 고려
function PhotoUpload() {
    const [file, setFile] = useState(null);
    

    const handleFileInputChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleFileUpload = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        // 서버로 formData를 보내는 코드 작성
    };

    return (
        <div className="mp-main">
            <form onSubmit={handleFileUpload}>
                <p>파일 가져오기</p>
                <input type="file" onChange={handleFileInputChange} /> <br/><br/>
                {/* <Link to="/Edit"> */}
                <button type="submit">Upload</button>
                {/* </Link> */}
            </form>
        </div>
    );
}

export default PhotoUpload;
