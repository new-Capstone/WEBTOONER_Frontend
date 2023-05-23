import React, { useState } from "react";
import Header from "../components/Header";
import PhotoUploader from "../components/PhotoUploader";
import '../styles/Use.css'

function Use() {
    const [files, setFiles] = useState([]);
    const [selectedFace, setSelectedFace] = useState(null);

    const handleUpload = (acceptedFiles) => {
        setFiles(acceptedFiles);
    };

    const handleFaceSelect = (face) => {
        setSelectedFace(face === selectedFace ? null : face);
    };

    return (
        <div>
            <Header />
            <div className="main_container">
                <div className="main_siderbar">
                    <div className="face">
                        <h1>face</h1>
                        <button
                            type="button"
                            className={`btn btn-outline-success ${selectedFace === "기쁨" ? "selected" : ""}`}
                            onClick={() => handleFaceSelect("기쁨")}
                        >
                            기쁨
                        </button>
                        <button
                            type="button"
                            className={`btn btn-outline-success ${selectedFace === "슬픔" ? "selected" : ""}`}
                            onClick={() => handleFaceSelect("슬픔")}
                        >
                            슬픔
                        </button>
                        <button
                            type="button"
                            className={`btn btn-outline-success ${selectedFace === "분노" ? "selected" : ""}`}
                            onClick={() => handleFaceSelect("분노")}
                        >
                            분노
                        </button>
                        <button
                            type="button"
                            className={`btn btn-outline-success ${selectedFace === "놀람" ? "selected" : ""}`}
                            onClick={() => handleFaceSelect("놀람")}
                        >
                            놀람
                        </button>
                    </div>
                </div>
                <div className="photoupload">
                    <h1>Photo Uploader</h1>
                    <PhotoUploader onUpload={handleUpload} />
                    {files.map((file, index) => (
                        <table key={index}>
                            <tr>
                                <td>변환 사진 1</td>
                                <td><img src={URL.createObjectURL(file)} style={{ width: '400px', height: '200px' }} alt={file.name} /></td>
                            </tr>
                            <tr>
                                <td>변환 사진 2</td>
                                <td><img src={URL.createObjectURL(file)} style={{ width: '400px', height: '200px' }} alt={file.name} /></td>
                            </tr>
                            <tr>
                                <td>변환 사진 3</td>
                                <td><img src={URL.createObjectURL(file)} style={{ width: '400px', height: '200px' }} alt={file.name} /></td>
                            </tr>
                            <tr>
                                <td>변환 사진 4</td>
                                <td><img src={URL.createObjectURL(file)} style={{ width: '400px', height: '200px' }} alt={file.name} /></td>
                            </tr>
                        </table>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Use;