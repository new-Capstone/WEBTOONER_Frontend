// import React, { useState } from 'react';
// import Header from '../components/Header';
// import { Link, useParams } from 'react-router-dom';
// import '../styles/Mypage.css';
// import Modal from 'react-modal';
// import axios from 'axios';

// function TutorPortfolio() {
//     const { genre, id } = useParams();

//     const [imageData, setImageData] = useState([]);
//     const [files, setFiles] = useState(new Array(4).fill(null)); // Array to store selected files
//     console.log(files);

//     function previewImage(event, index) {
//         const reader = new FileReader();
//         reader.onload = () => {
//             setImageData((prevImageData) => [
//                 ...prevImageData.filter((image) => image.id !== index),
//                 { id: index, data: reader.result },
//             ]);
//         };
//         reader.readAsDataURL(event.target.files[0]);

//         const updatedFiles = [...files];
//         updatedFiles[index - 1] = event.target.files[0];
//         setFiles(updatedFiles);
//     }

//     const [modalIsOpen, setModalIsOpen] = useState(false);

//     const ModalStyle = {
//         content: {
//             top: '50%',
//             left: '50%',
//             right: 'auto',
//             bottom: 'auto',
//             marginRight: '-50%',
//             transform: 'translate(-50%, -50%)',
//         },
//     };

//     // 블롭 주소
//     //문제: fd 에 빈 배열
//     //console.log 찍으면서 fd 에 키 value
//     //createUrl ->sjon String

//     const setTutorPortfolio = async () => {
//         const fd = new FormData();

//         files.map((file) => {
//             // let image = JSON.stringify(window.URL.createObjectURL(file));
//             // console.log(image);
//             fd.append('files', file);
//             console.log(fd);

//             for (const key of fd.keys()) {
//                 console.log(key);
//             }
//             for (const value of fd.values()) {
//                 console.log(value);
//             }
//             //console.log(fd);
//             axios
//                 .post(`http://capstone-webtooner.com/portfolio/category?tutorId=${id}&categoryName=${genre}`, fd, {

//                     headers: { 'Content-Type': 'multipart/form-data', 'accept': 'application/json' },
//                     // data: `multipartFileList=${fd};type=image/png`
//                 },
//                 )
//                 .then((res) => console.log(res.data))
//                 .catch((e) => console.log(e));
//         });

//     };

//     return (
//         <div className='mp-container'>
//             <Header />

//             <div className='mp-left'>
//                 <br />
//                 <h1>포트폴리오 등록</h1>
//             </div>

//             <div className='mp-main'>
//                 {[1, 2, 3, 4].map((index) => (
//                     <div className='upload-box' key={index}>
//                         <label htmlFor={`file-input-${index}`}>
//                             {imageData.find((image) => image.id === index) ? (
//                                 <img
//                                     id={`previewImage-${index}`}
//                                     src={imageData.find((image) => image.id === index).data}
//                                     alt='Uploaded image'
//                                 />
//                             ) : (
//                                 files[index] && (
//                                     <img
//                                         id={`previewImage-${index}`}
//                                         src={URL.createObjectURL(files[index])}
//                                         alt='Upload image'
//                                     />
//                                 )
//                             )}F
//                         </label>
//                         <input
//                             id={`file-input-${index}`}
//                             type='file'
//                             accept='image/*'
//                             onChange={(event) => previewImage(event, index)}
//                         />
//                     </div>
//                 ))}
//             </div>

//             <div className='mp-right'>
//                 <button onClick={() => setModalIsOpen(true)}>등록하기</button>
//                 <Modal
//                     isOpen={modalIsOpen}
//                     onRequestClose={() => setModalIsOpen(false)}
//                     style={ModalStyle}
//                 >
//                     <br />
//                     등록하시겠습니까?
//                     <br />
//                     <br />
//                     <Link to={`/findtutor/${genre}/${id}`} state={{ isAdded: true }}>
//                         <button onClick={setTutorPortfolio}>네</button>
//                     </Link>
//                     <button onClick={() => setModalIsOpen(false)}>아니오</button>
//                 </Modal>
//             </div>
//         </div>
//     );
// }

// export default TutorPortfolio;

import React, { useState, useRef } from "react";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import "../styles/Mypage.css";
import Modal from "react-modal";
import axios from "axios";

function TutorPortfolio() {
  const { id } = useParams();
  const imgRef = useRef();

  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [image4, setImage4] = useState();

  //image4개를 files에 넣고 이 이미지 배열을 axios post 로 보낼 것임
  const [files, setFiles] = useState([]);
  console.log(files);

  function previewImage1() {
    const showImage = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(showImage);
    reader.onload = () => {
      setImage1(reader.result);
    };

    setFiles(...files, showImage);
    console.log(files);
  }

  function previewImage2() {
    const showImage = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(showImage);
    reader.onload = () => {
      console.log(reader.result);
      setImage2(reader.result);
    };

    setFiles(...files, showImage);
    console.log(files);
  }
  function previewImage3() {
    const showImage = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(new Blob([showImage]));
    reader.onload = () => {
      setImage3(reader.result);
    };

    setFiles(...files, showImage);
    console.log(files);
  }

  function previewImage4() {
    const showImage = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(showImage);
    reader.onload = () => {
      setImage4(reader.result);
    };

    setFiles(...files, showImage);
    console.log(files);
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const ModalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // 블롭 주소로 전송하기
  //문제: fd 에 빈 배열
  //console.log 찍으면서 fd 에 키 value
  //createUrl ->json String

  const setTutorPortfolio = async () => {
    const fd = new FormData();
    //fd.append('files', new Blob([files]));
    fd.append("files", files);
    console.log(fd);

    for (const key of fd.keys()) {
      console.log(key);
    }
    for (const value of fd.values()) {
      console.log(value);
    }

    // axios 방법 1
    axios
      .post(`http://capstone-webtooner.com/portfolio?tutorId=${id}`, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
          accept: "application/json",
        },
      })
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  };

  //axios 방법 2
  //     await axios({
  //         method: "POST",
  //         url: `http://capstone-webtooner.com/portfolio?tutorId=${id}`,
  //         headers: {
  //             'Content-Type': 'multipart/form-data',
  //             'accept': 'application/json'
  //         },
  //         data: fd,
  //     })
  // };

  //axios 방법 3

  //     await axios.post(
  //         `http://capstone-webtooner.com/portfolio?tutorId=${id}`,
  //         fd,
  //         {
  //             data: fd,
  //             headers: {
  //                 'Content-Type': 'multipart/form-data',
  //                 'accept': 'application/json'
  //             },
  //         }
  //     )
  // }

  return (
    <div className="mp-container">
      <Header />

      <div className="mp-left">
        <br />
        <h1>포트폴리오 등록</h1>
      </div>

      <div className="mp-main">
        <div
          style={{
            border: "3px solid #ececec",
            borderRadius: "5px",
            height: "180px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form>
            <label className="portfolio_image_1" htmlFor="portfolio1"></label>
            {image1 ? <img src={image1} /> : ""}
            <input
              className="portfolio_image_1"
              type="file"
              accept="image/*"
              id="portfolio1"
              onChange={previewImage1}
              ref={imgRef}
            />
          </form>
        </div>

        <form>
          <label className="portfolio_image_2" htmlFor="portfolio2"></label>
          <img src={image2} alt="포트폴리오2 " />
          <input
            className="portfolio_image_2"
            type="file"
            accept="image/*"
            id="portfolio2"
            onChange={previewImage2}
            ref={imgRef}
          />
        </form>

        <form>
          <label className="portfolio_image_3" htmlFor="portfolio3"></label>
          <img src={image3} alt="포트폴리오3 " />
          <input
            className="portfolio_image_3"
            type="file"
            accept="image/*"
            id="portfolio3"
            onChange={previewImage3}
            ref={imgRef}
          />
        </form>

        <form>
          <label className="portfolio_image_4" htmlFor="portfolio4"></label>
          <img src={image4} alt="포트폴리오4 " />
          <input
            className="portfolio_image_4"
            type="file"
            accept="image/*"
            id="portfolio4"
            onChange={previewImage4}
            ref={imgRef}
          />
        </form>
      </div>

      <div className="mp-right">
        <button onClick={() => setModalIsOpen(true)}>등록하기</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={ModalStyle}
        >
          <br />
          등록하시겠습니까?
          <br />
          <br />
          <Link to="/tutorpage">
            <button onClick={setTutorPortfolio}>네</button>
          </Link>
          <button onClick={() => setModalIsOpen(false)}>아니오</button>
        </Modal>
      </div>
    </div>
  );
}

export default TutorPortfolio;
