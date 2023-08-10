import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PhotoUploader from "../components/PhotoUploader";
import '../styles/Use.css'
import '../styles/Mypage.css'
import axios from "axios"
import { Link } from 'react-router-dom';

//sd 캐릭터 표시 넣기 
//버튼 클릭 factor 저장하게 

function Use(){
    const [files, setFiles] = useState([]);
    const [faces, setFaces]=useState([]);
    const [genres, setGenres] = useState([]);

    const genresData = [
        { id: 1, name: "기쁨" },
        { id: 2, name: "슬픔" },
        { id: 3, name: "분노" },
        { id: 4, name: "놀람" },
      ];

      const handleGenreSelect = (selectedGenre) => {
        setGenres((prevGenres) =>
          prevGenres.some((genre) => genre.id === selectedGenre.id)
            ? prevGenres.filter((genre) => genre.id !== selectedGenre.id)
            : [...prevGenres, selectedGenre]
        );
      };  

    // const [beforeimage, setBeforeImage] = useState("");
    // useEffect(() => {
    //     axios({
    //         method: 'GET',
    //         url: "http://capstone-webtooner.com/beforeimage?beforeImageId=10"
    //     }).then(response => setBeforeImage(response.data))
    // })

    const [userId, setUserId] = useState("");
    const [expression, setExpression] = useState("");
    const [model, setModel] = useState("");
    const [gender, setGender] = useState("");
    const [loraName, setLoraName] = useState("");
    const [afterId, setafterId] = useState("");

    const [selected1, setSelected1] = useState(false)
    const onClickHappy = (event) => {
        event.preventDefault();
        setUserId(1)
        setExpression("happy")
        setModel("lora")
        setGender("man")
        setLoraName("치즈인더트랩")
        setafterId(80)
        console.log(model)
        setSelected1(!selected1)
    }
    
//31, 32, , 80, 89
    const [selected2, setSelected2] = useState(false)
    const onClickSad = (event) => {
        event.preventDefault();
        setUserId(1)
        setExpression("sad")
        setModel("lora")
        setGender("woman")
        setLoraName("치즈인더트랩")
        setafterId(46)
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
        setafterId(108)
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
        setafterId(102)
        console.log(model)
        setSelected4(!selected4)
    }
    //95
    //101
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

  const [afterImage, setAfterImage] = useState("");

  const url2='http://capstone-webtooner.com/afterimage?afterImageId=' + 180
  useEffect(() => {
      axios({
          method: 'GET',
          url: url2
        //   url:'http://capstone-webtooner.com/afterimage/userId?beforeImageId=194'
      }).then((response) => {
        setAfterImage(response.data)
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
      }
    };

    return(
        <div>
            <Header />
                <div className="main_container">
                <div className="main_siderbar">
                    <div className="face">
                        <h1>표정</h1>
                        
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
                        {/* {genresData.map((genre) => (
                        <button
                            key={genre.id}
                            className={genres.some((g) => g.id === genre.id) ? "selected" : ""}
                            onClick={() => handleGenreSelect(genre)}
                        >
                            {genre.name}
                        </button>
                        ))} */}
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                        <div className="dt-button">
                        <button style = {{
                            backgroundColor: selected5 ? '#ffffff' : '#6cb48f',
                            color: selected5 ? '#6cb48f' : '#ffffff',}}
                            onClick={onClicktry}>try</button>
                        <button onClick={onClickshow}>done</button>
                        </div>
                        </div>
                    </div>
                    


                </div>
                <div className="photoupload">
                <h1>내 파일 업로드하기</h1>
                <label className="upload-button" for="input">
                    Upload
                </label><br/>
                <input type="file" id="input" style={{ display: "none" }} onChange={handleFileChange} />
                {previewUrl && (
                <img src={previewUrl} alt="Preview" />
                )}

                {
                try_bt ?
                    <img src= {afterImage.afterImageUri} />
                    : null
                }
                    {/* <img src= "https://capstone-webtooner.s3.ap-northeast-2.amazonaws.com/6ce0e9f5-b5ab-442b-bd24-f195e21dde50_.png" />        
                    <img src="https://capstone-webtooner.s3.ap-northeast-2.amazonaws.com/6ce0e9f5-b5ab-442b-bd24-f195e21dde50_.png"/> */}
                <button onClick={onClickRefresh}>retry</button>
                
                {/* <PhotoUploader onUpload={handleUpload} />
            

                {files.map((file)=>(
                    <table>
                        <tr>
                            <td>변환 사진 1</td>
                            <td><img key={file.name} src={URL.createObjectURL(file)} style={{ width: '400px', height: '200px' }} alt={file.name} /></td>
                        </tr>
                        <tr>
                            <td>변환 사진2</td>
                            <td><img key={file.name} src={URL.createObjectURL(file)} style={{ width: '400px', height: '200px' }} alt={file.name} /></td>
                        </tr>
                        <tr>
                            <td>변환 사진3</td>
                            <td><img key={file.name} src={URL.createObjectURL(file)}style={{ width: '400px', height: '200px' }} alt={file.name} /></td>
                        </tr>
                        <tr>
                            <td>변환 사진4</td>
                            <td><img key={file.name} src={URL.createObjectURL(file)} style={{ width: '400px', height: '200px' }} alt={file.name} /></td>
                        </tr>
                     </table>
                    
                ))} */}
                </div>
            </div>
        </div>
    )
     
}

export default Use;