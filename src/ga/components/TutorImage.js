import React from 'react';

const TutorImage = ({ genre }) => {
  const imageDatas = {
    느와르: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg'],
    로맨스: ['image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg'],
    액션: ['image13.jpg', 'image14.jpg', 'image15.jpg', 'image16.jpg', 'image17.jpg', 'image18.jpg'],
    호러: ['image19.jpg', 'image20.jpg', 'image21.jpg', 'image22.jpg', 'image23.jpg', 'image24.jpg'],
  };

  // 선택된 장르에 해당하는 이미지 배열 가져오기
  const images = imageDatas[genre];

  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default TutorImage;
