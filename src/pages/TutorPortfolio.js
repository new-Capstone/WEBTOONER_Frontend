import React, { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './../styles/TutorPortfolio.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';

function TutorPortfolio() {
    const { genre, id } = useParams();
    const navigate = useNavigate();
    const [tutorId, setTutorId] = useState();

    useEffect(() => {
        axios
            .get(`http://capstone-webtooner.com/user?userId=${id}`)
            .then((response) => {
                console.log(response);
                console.log(response.data.teachingInformationDto.tutorId);
                setTutorId(response.data.teachingInformationDto.tutorId);
            })
            .catch((error) => console.log(error));
    }, [id]);

    useEffect(() => {
        console.log(tutorId);
    }, [tutorId]);

    const fileInputRef1 = useRef();
    const fileInputRef2 = useRef();
    const fileInputRef3 = useRef();
    const fileInputRef4 = useRef();

    const onClickImage1 = () => {
        fileInputRef1.current.click();
    };
    const onClickImage2 = () => {
        fileInputRef2.current.click();
    };
    const onClickImage3 = () => {
        fileInputRef3.current.click();
    };
    const onClickImage4 = () => {
        fileInputRef4.current.click();
    };

    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    const [image3, setImage3] = useState();
    const [image4, setImage4] = useState();

    //이미지 url 로 바꿔서 preview 해주는 함수
    const setImageUrl1 = (event) => {
        const beforeimageUrl = event.target.files;
        const currentImageUrl = URL.createObjectURL(beforeimageUrl[0]);
        setImage1(currentImageUrl);
    };
    const setImageUrl2 = (event) => {
        const beforeimageUrl = event.target.files;
        const currentImageUrl = URL.createObjectURL(beforeimageUrl[0]);
        setImage2(currentImageUrl);
    };
    const setImageUrl3 = (event) => {
        const beforeimageUrl = event.target.files;
        const currentImageUrl = URL.createObjectURL(beforeimageUrl[0]);
        setImage3(currentImageUrl);
    };
    const setImageUrl4 = (event) => {
        const beforeimageUrl = event.target.files;
        const currentImageUrl = URL.createObjectURL(beforeimageUrl[0]);
        setImage4(currentImageUrl);
    };

    //axios form Data에 넣을 이미지
    const handleUpload = (event) => {
        event.preventDefault();
        const files = [
            fileInputRef1.current.files[0],
            fileInputRef2.current.files[0],
            fileInputRef3.current.files[0],
            fileInputRef4.current.files[0],
        ];
        const formData = new FormData();

        for (const file of files) {
            console.log(file);
            formData.append('multipartFileList', file);
        }

        //axios
        axios({
            method: 'POST',
            url: `http://capstone-webtooner.com/portfolio?tutorId=${tutorId}`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((result) => {
                console.log('요청성공');
                console.log(result);
            })
            .catch((error) => {
                console.log('요청실패');
                console.log(error);
                console.log(files);
            });

        setTimeout(() => {
            navigate(`/findtutor/${genre}/${tutorId}`);
        }, 600);
    };

    return (
        <div>
            <div className='TutorPortfolio_main_container'>
                <br />
                <h1>포트폴리오 등록</h1>
                <div className='portfolio'>
                    <label htmlFor='input-file' onChange={setImageUrl1}>
                        <div
                            className='inputfile1'
                            onClick={onClickImage1}
                            style={{
                                width: '180px',
                                height: '180px',
                                borderRadius: '20px',
                                border: 0,
                                backgroundColor: '#ececec',
                                overflow: 'hidden',
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            {image1 ? (
                                <img
                                    src={image1}
                                    alt={''}
                                    key={1}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ) : (
                                <AiOutlinePlusCircle
                                    style={{ width: 100, height: 100, color: '#b4b4b4' }}
                                />
                            )}
                            <input
                                type='file'
                                ref={fileInputRef1}
                                style={{ display: 'none' }}
                            />
                        </div>
                    </label>

                    <label htmlFor='input-file' onChange={setImageUrl2}>
                        <div
                            className='inputfile2'
                            onClick={onClickImage2}
                            style={{
                                width: '180px',
                                height: '180px',
                                borderRadius: '20px',
                                border: 0,
                                backgroundColor: '#ececec',
                                overflow: 'hidden',
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            {image2 ? (
                                <img
                                    src={image2}
                                    alt={''}
                                    key={2}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ) : (
                                <AiOutlinePlusCircle
                                    style={{ width: 100, height: 100, color: '#b4b4b4' }}
                                />
                            )}
                            <input
                                type='file'
                                ref={fileInputRef2}
                                style={{ display: 'none' }}
                            />
                        </div>
                    </label>

                    <label htmlFor='input-file' onChange={setImageUrl3}>
                        <div
                            className='inputfile3'
                            onClick={onClickImage3}
                            style={{
                                width: '180px',
                                height: '180px',
                                borderRadius: '20px',
                                border: 0,
                                backgroundColor: '#ececec',
                                overflow: 'hidden',
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            {image3 ? (
                                <img
                                    src={image3}
                                    alt={''}
                                    key={3}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ) : (
                                <AiOutlinePlusCircle
                                    style={{ width: 100, height: 100, color: '#b4b4b4' }}
                                />
                            )}
                            <input
                                type='file'
                                ref={fileInputRef3}
                                style={{ display: 'none' }}
                            />
                        </div>
                    </label>

                    <label htmlFor='input-file' onChange={setImageUrl4}>
                        <div
                            className='inputfile4'
                            onClick={onClickImage4}
                            style={{
                                width: '180px',
                                height: '180px',
                                borderRadius: '20px',
                                border: 0,
                                backgroundColor: '#ececec',
                                overflow: 'hidden',
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            {image4 ? (
                                <img
                                    src={image4}
                                    alt={''}
                                    key={4}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ) : (
                                <AiOutlinePlusCircle
                                    style={{ width: 100, height: 100, color: '#b4b4b4' }}
                                />
                            )}
                            <input
                                type='file'
                                ref={fileInputRef4}
                                style={{ display: 'none' }}
                            />
                        </div>
                    </label>
                </div>
                <button onClick={handleUpload}>업로드</button>
            </div>
        </div>
    );
}

export default TutorPortfolio;