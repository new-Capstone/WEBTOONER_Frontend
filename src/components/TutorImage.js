import React from 'react';

const TutorImage = ({ genre }) => {
  const imageDatas = {
    느와르: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
    로맨스: ['image4.jpg', 'image5.jpg', 'image6.jpg'],
    액션: ['image7.jpg', 'image8.jpg', 'image9.jpg'],
    호러: ['image10.jpg', 'image11.jpg', 'image12.jpg']
  };

  // 선택된 장르에 해당하는 이미지 배열 가져오기
  const images = imageDatas[genre] || [];

  return (
    <div className="TutorImage">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default TutorImage;
