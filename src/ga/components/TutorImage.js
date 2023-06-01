// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const TutorImage = ({ genre, page, limit }) => {
//   const [images, setImages] = useState([]);
// //${genre}?/page=${page}&limit=${limit}
//   useEffect(() => {
//     // 장르에 해당하는 이미지 데이터를 서버에서 가져오는 비동기 함수
//     const fetchImages = async () => {
//       try {
//         // 장르와 페이지에 해당하는 이미지 데이터를 서버에서 가져온다고 가정
//         const response = await axios.get(`http://capstone-webtooner.com/portfolio?portfolioId=1`);
//         const imageDatas = response.data;
//         console.log(imageDatas) 

//         // 이미지 데이터 설정
//         setImages(imageDatas);
//       } catch (error) {
//         console.error('이미지 데이터를 가져오는 중 오류가 발생했습니다.', error);
//       }
//     };

//     fetchImages();
//   }, [genre, page, limit]);

//   return (
//     <div className="TutorImage">
//       {images.products.map((image, index) => (
//         <img key={index} src={image} alt={`Image ${index + 1}`} />
//       ))}
//     </div>
//   );
// };

// export default TutorImage;

//이미지 url 보내고 다시 그 주소로 get 하기 
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TutorImage = ({ genre, page, limit }) => {
  const [images, setImages] = useState("");

  useEffect(() => {
    axios({
      method:'GET',
      url: "http://capstone-webtooner.com/portfolio?tutorId=1"
    }).then(response => setImages(response.data))
    })


  return (
    <div className="TutorImage">
      <img src={images.imageUri}></img>
      {/* {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))} */}
    </div>
  );
};

export default TutorImage;
