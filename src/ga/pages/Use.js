import React, { useState } from "react";
import Header from "../components/Header";
import PhotoUploader from "../components/PhotoUploader";
import '../styles/Use.css'


function Use(){
    const [files, setFiles] = useState([]);

    const handleUpload = (acceptedFiles) => {
        setFiles(acceptedFiles);
    };

    return(
        <div>
            <Header />
                <div className="main_container">
                <div className="main_siderbar">
                    <div className="face">
                        <h1>face</h1>
                        <button className="face">기쁨</button>
                        <button className="face">슬픔</button>
                        <button className="face">분노</button>
                        <button className="face">놀람</button>
                    </div>
                    <div className="angle">
                        <h1>angel</h1>
                        <button className="angle">-30</button>
                        <button className="angle">-15</button>
                        <button className="angle">+15</button>
                        <button className="angle">+30</button>
                    </div>
                </div>
                <div className="photoupload">
                <h1>Photo Uploader</h1>
                <PhotoUploader onUpload={handleUpload} />
                {files.map((file)=>(
                    <img key={file.name} src={URL.createObjectURL(file)} alt={file.name} />
                ))}
                </div>
            </div>
        </div>
    )
     
}

export default Use;
