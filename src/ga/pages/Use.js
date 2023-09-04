import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PhotoUploader from "../components/PhotoUploader";
import '../styles/Use.css'
import '../styles/Mypage.css'
import axios from "axios"
import { Link } from 'react-router-dom';

function Use(){
    const [files, setFiles] = useState([]);
    const [faces, setFaces]=useState([]);
    const [genres, setGenres] = useState([]);


      const handleGenreSelect = (selectedGenre) => {
        setGenres((prevGenres) =>
          prevGenres.some((genre) => genre.id === selectedGenre.id)
            ? prevGenres.filter((genre) => genre.id !== selectedGenre.id)
            : [...prevGenres, selectedGenre]
        );
      };  

    const [userId, setUserId] = useState("");
    const [expression, setExpression] = useState("");
    const [model, setModel] = useState("");
    const [gender, setGender] = useState("");
    const [loraName, setLoraName] = useState("");
    const [afterImage, setAfterImage] = useState("");

    const [selected1, setSelected1] = useState(false)
    const onClickHappy = (event) => {
        event.preventDefault();
        setUserId(1)
        setExpression("happy")
        setModel("lora")
        setGender("man")
        setLoraName("치즈인더트랩")
        console.log(model)
        setSelected1(!selected1)
    }
    
    const [selected2, setSelected2] = useState(false)
    const onClickSad = (event) => {
        event.preventDefault();
        setUserId(1)
        setExpression("sad")
        setModel("lora")
        setGender("woman")
        setLoraName("치즈인더트랩")
        console.log(model)
        setSelected2(!selected2)
    }

    const [selected3, setSelected3] = useState(false)
    const onClickSurprised = (event) => {
        event.preventDefault();
        setUserId(1)
        setExpression("surprise")
        setModel("lora")
        setGender("woman")
        setLoraName("치즈인더트랩")
        console.log(model)
        setSelected3(!selected3)
    }
    //106, 108, , 113, 115
    const [selected4, setSelected4] = useState(false)
    const onClickAngry = (event) => {
        event.preventDefault();
        setUserId(1)
        setExpression("angry")
        setModel("lora")
        setGender("woman")
        setLoraName("치즈인더트랩")
        console.log(model)
        setSelected4(!selected4)
    }
    
    const [selected6, setSelected6] = useState(false)
    const onClickGod = (event) => {
        event.preventDefault();
        setUserId(1)
        setLoraName("신의탑")
        console.log(model)
        setSelected6(!selected6)
    }

    const [selected7, setSelected7] = useState(false)
    const onClickDuna = (event) => {
        event.preventDefault();
        setUserId(1)
        setLoraName("이두나")
        console.log(model)
        setSelected7(!selected7)
    }

    const [mid, setMid] = useState("")
    const [selected5, setSelected5] = useState(false)
    const onClicktry = (event) => {
        event.preventDefault();
        const formData = new FormData();
        
        formData.append('multipartFile', selectedFile);
        const url = 'http://capstone-webtooner.com/beforeimage?userId=' + userId + "&expression=" + expression + "&model=" + model + "&gender=" + gender + "&loraName=" + loraName
        axios ({
            method: 'POST',
            url: 'http://capstone-webtooner.com/beforeimage?userId=' + userId + "&expression=" + expression + "&model=" + model + "&gender=" + gender + "&loraName=" + loraName,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((result) => {console.log('요청성공')
        console.log(result)
        setSelected5(!selected5)
        console.log('---------------')
        console.log(result.data.beforeImageId)
        setMid(result.data.beforeImageId)
        })
    .catch((error)=>{console.log('요청실패')
    console.log(error)
    console.log(url)
    console.log(userId)
    console.log(expression)
    console.log(model)
  })
  };

  const url2='http://capstone-webtooner.com/afterimage/userId?beforeImageId=' + mid
  useEffect(() => {
      axios({
          method: 'GET',
          url: url2
      }).then((response) => {
        setAfterImage(response.data[0])
      }
      )
  })


  const [try_bt, setTry_bt] = useState(false);
  const onClickshow = (event) => {
    event.preventDefault();
    setTry_bt(true)
    console.log(try_bt)
    console.log(mid)
  }

  const onClickRefresh = () => {
    window.location.reload();
  };

  const [selectedFile, setSelectedFile] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setSelectedFile(file);
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);

        setShowDropBox(false);
      }
    };

    const [showDropBox, setShowDropBox] = useState(true);
    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setSelectedFile(file);
    
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setPreviewUrl(reader.result);
          };
          reader.readAsDataURL(file);

          setShowDropBox(false);
        }
      };
    
      const handleDragOver = (event) => {
        event.preventDefault();
      };

    return(
        <div>
            <Header />
                <div className="main_container">
                <div className="main_siderbar">
                    <div className="face">
                        <h4>표정</h4>
                        <div className="face-buttons">
                        <button style = {{
                            backgroundColor: selected1 ? '#6cb48f' : '#FFFFFF',
                            color: selected1 ? '#FFFFFF' : '#6cb48f',}}
                        onClick={onClickHappy}>기쁨</button>
                        <button style = {{
                            backgroundColor: selected2 ? '#6cb48f' : '#FFFFFF',
                            color: selected2 ? '#FFFFFF' : '#6cb48f',}}
                        onClick={onClickSad}>슬픔</button>
                        <button style = {{
                            backgroundColor: selected3 ? '#6cb48f' : '#FFFFFF',
                            color: selected3 ? '#FFFFFF' : '#6cb48f',}}
                        onClick={onClickSurprised}>놀람</button>
                        <button style = {{
                            backgroundColor: selected4 ? '#6cb48f' : '#FFFFFF',
                            color: selected4 ? '#FFFFFF' : '#6cb48f',}}
                            onClick={onClickAngry}>분노</button>
                        </div>
                        <div className="face-buttons">
                        <br/>
                        <h4>웹툰</h4>
                        <button style = {{
                            backgroundColor: selected6 ? '#6cb48f' : '#FFFFFF',
                            color: selected6 ? '#FFFFFF' : '#6cb48f',}}
                        onClick={onClickGod}>신의탑</button>
                        <button style = {{
                            backgroundColor: selected7 ? '#6cb48f' : '#FFFFFF',
                            color: selected7 ? '#FFFFFF' : '#6cb48f',}}
                        onClick={onClickDuna}>이두나!</button>
                        </div>
                    </div>
                        
                    <div className="dt-button">
                        <button style = {{
                            backgroundColor: selected5 ? '#ffffff' : '#6cb48f',
                            color: selected5 ? '#6cb48f' : '#ffffff',}}
                            onClick={onClicktry}>try</button>
                        <button onClick={onClickshow}>done</button>
                    </div>
                </div>

                <div className="photoupload">
                <h1>내 파일 업로드하기</h1>

                {/* 드래그 앤 드롭 영역 */}            
                {showDropBox && (
                <div
                    className="drop-box"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    <h2>원하는 이미지를 넣고 다양한 변환을 시도해보세요!</h2>
                    <span>파일을 드래그 하거나 버튼을 클릭하여 업로드하세요</span><br/>
                    <label className="upload-button" for="input">
                        이미지 불러오기
                    </label><br/>
                </div>
                    )}

                {previewUrl && <img src={previewUrl} alt="Preview" />}

                <input type="file" id="input" style={{ display: "none" }} onChange={handleFileChange} />
                {
                try_bt ?
                    <img src= {afterImage.afterImageUri} />
                    : null
                }
                    {/* <img src= "https://capstone-webtooner.s3.ap-northeast-2.amazonaws.com/6ce0e9f5-b5ab-442b-bd24-f195e21dde50_.png" />        
                    <img src="https://capstone-webtooner.s3.ap-northeast-2.amazonaws.com/6ce0e9f5-b5ab-442b-bd24-f195e21dde50_.png"/> */}
                    <button className="rt_button" onClick={onClickRefresh}>retry</button>
        
                </div>
            </div>
        </div>
    )
     
}

export default Use;