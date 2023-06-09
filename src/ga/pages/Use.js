import React, { useState } from "react";
import Header from "../components/Header";
import PhotoUploader from "../components/PhotoUploader";
import Modal from 'react-modal';
// import axios from 'axios';
import '../styles/Use.css';

//사진 업로드 && factor 추가 되었다면 try 버튼 누를 수 있게 
//try 버튼 클릭 시에 axios 호출

//입력받은 factor 값 저장하기 

//Lora 모델
function Use() {
  const [files, setFiles] = useState([]);
  const [selectedFace, setSelectedFace] = useState(null);
  const [isSDApplied, setIsSDApplied] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const[gender,setGender]=useState(false);

  const [factor1,setfactor1]=useState(false); //사진
  const [factor2,setfactor2]=useState(false); //표정
  const [factor3,setfactor3]=useState(false); //sd 
  const [factor4_1,setfactor4_1]=useState(false); //Lora 모델 1
  const [factor4_2,setfactor4_2]=useState(false); //Lora 모델 1
  const [factor4_3,setfactor4_3]=useState(false); //Lora 모델 1


  const handleGender=()=>{
    setGender(prevgender=>!prevgender)
  }

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

  const handleLoraToggle1=()=>{
    setfactor4_1(prevfactor4_1=>!prevfactor4_1);
    
  }

  const handleLoraToggle2=()=>{
    setfactor4_2(prevfactor4_2=>!prevfactor4_2);
    
  }

  const handleLoraToggle3=()=>{
    setfactor4_3(prevfactor4_3=>!prevfactor4_3);
    
  }
  
  const handleTry = () => {
    if (factor1&&(factor2 &&factor3&&(factor4_1 || factor4_2 || factor4_3))) {
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
            <h1 align="center" style={{ fontSize:'26px',fontWeight:'bold'}}> face</h1>
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

          <div className="Lora_model">
            <h1 align="center" style={{fontSize:'17px', marginLeft:'10px',fontWeight:'bold'}}>Lora model</h1>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={factor4_1} onChange={handleLoraToggle1} />
              <label class="form-check-label" for="flexCheckDefault" >
                치인트 
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={factor4_2} onChange={handleLoraToggle2} />
              <label class="form-check-label" for="flexCheckDefault">
                모델이름2 
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={factor4_3} onChange={handleLoraToggle3} />
              <label class="form-check-label" for="flexCheckDefault">
                모델이름3
              </label>
            </div>

          </div>

          <div className="genderseleted">
          <h1 align="center" style={{ fontSize:'15px', fontWeight:'bold'}}>Gender Selected</h1>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={gender} onChange={handleGender}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">남/여</label>
            </div>
          </div>


          <div className="SD-Character">
          <h1 align="center" style={{ fontSize:'17px', marginLeft:'10px',fontWeight:'bold'}}>SD 캐릭터</h1>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleSDToggle}/>
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
