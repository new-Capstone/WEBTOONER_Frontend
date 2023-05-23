// 
import React, { useEffect, useState } from 'react';

const TutorImage = ({ genre }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // 서버에서 이미지 데이터 가져오는 비동기 함수
    const fetchImages = async () => {
      try {
        // 장르에 해당하는 이미지 데이터를 서버에서 가져온다고 가정
        const response = await fetch(`서버주소/${genre}`);
        const imageDatas = await response.json();

        // 이미지 데이터 설정
        setImages(imageDatas);
      } catch (error) {
        console.error('이미지 데이터를 가져오는 중 오류가 발생했습니다.', error);
      }
    };

    fetchImages();
  }, [genre]);

  return (
    <div className="TutorImage">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default TutorImage;
