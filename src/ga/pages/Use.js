import React, { useState } from "react";
import Header from "../components/Header";
import PhotoUploader from "../components/PhotoUploader";
import Modal from 'react-modal';
// import axios from 'axios';

import '../styles/Use.css';

//사진 업로드 && factor 추가 되었다면 try 버튼 누를 수 있게 
//try 버튼 클릭 시에 axios 호출 

function Use() {
  const [files, setFiles] = useState([]);
  const [selectedFace, setSelectedFace] = useState(null);
  const [isSDApplied, setIsSDApplied] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [factor1,setfactor1]=useState(false); //사진
  const [factor2,setfactor2]=useState(false); //표정
  const [factor3,setfactor3]=useState(false); //sd 

  

  const handleUpload = (acceptedFiles) => {
    setFiles(acceptedFiles);
    setfactor1(true);
  };

  const handleFaceSelect = (face) => {
    setSelectedFace(selectedFace === face ? null : face);
    setfactor2(prevfactor2=>!prevfactor2);
  };

  const handleSDToggle = () => {
    setfactor3(prevfactor3=>!prevfactor3);
    setIsSDApplied(prevIsSDApplied => !prevIsSDApplied); // SD 적용 여부 토글
  };
  
  const handleTry = () => {
    if (factor1&&(factor2 || factor3)) {
      setIsReady(true);
      // axiosCall();
    }else {
      setModalIsOpen(true);
    }
  };
 

  const ModalStyle = { //modal css
      content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
      }
  };

  return (
    <div>
      <Header />
      <div className="main_container">
        <div className="main_siderbar">
          <div className="face">
            <h1 align="center" style={{ fontSize:'26px'}}> face</h1>
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
          <div className="SD-Character">
          <h1 align="center" style={{ fontSize:'20px'}}>SD 캐릭터</h1>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={isSDApplied} onChange={handleSDToggle}/>
              <label class="form-check-label" for="flexCheckDefault">
                SD 적용하기 
              </label>
            </div>
          </div>
          <div className="try">
          <button type="button" className="btn btn-outline-success" onClick={handleTry}>
          Try
        </button>
          </div>
        </div>
        <div className="photoupload">
          <h1>Photo Uploader</h1>
          <PhotoUploader onUpload={handleUpload} />
          {files.map((file, index) => (
            <table key={index}>
              <tbody>
                <tr>
                  <td>변환 사진 1</td>
                  <td>
                    <img src={URL.createObjectURL(file)} style={{ width: '400px', height: '200px' }} alt={file.name} />
                  </td>
                  <td>변환 사진 2</td>
                  <td>
                    <img src={URL.createObjectURL(file)} style={{ width: '400px', height: '200px' }} alt={file.name} />
                  </td>
                </tr>
                <tr>
                  <td>변환 사진 3</td>
                  <td>
                    <img src={URL.createObjectURL(file)} style={{ width: '400px', height: '200px' }} alt={file.name} />
                  </td>
                  <td>변환 사진 4</td>
                  <td>
                    <img src={URL.createObjectURL(file)} style={{ width: '400px', height: '200px' }} alt={file.name} />
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={ModalStyle}>
      <br/>Factor를 올바르게 지정하세요.<br/><br/>
      
      <button type="button" className="btn btn-outline-success" onClick={()=> setModalIsOpen(false)}>Close</button>
    </Modal>
    </div>
  );
}

export default Use;
