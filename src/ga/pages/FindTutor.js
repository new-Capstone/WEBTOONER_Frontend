import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import TabBar from '../components/TabBar';
import TutorImage from '../components/TutorImage';
import '../styles/FindTutor.css';
import axios from 'axios';

//


const FindTutor = () => {
  const [currentTab, setCurrentTab] = useState('느와르');
  const [page, setPage] = useState(1);
  const limit = 3;
  const offset = (page - 1) * limit;

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setPage(1); // 탭 변경 시 페이지를 1로 초기화
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1); // 다음 페이지로 이동
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1); // 이전 페이지로 이동
  };

  const [images, setImages] = useState("[]");

  useEffect(() => {
    axios({
      method:'GET',
      url: "http://capstone-webtooner.com/portfolio?portfolioId=6"
    }).then(response => setImages(response.data))
    })


  return (
    <div>
      <Header />
      <div className="TabBarContainer">
      <TabBar currentTab={currentTab} onTabChange={handleTabChange} />
      </div>
      <div className="TutorImage">
      {/* <TutorImage genre={currentTab} page={page} limit={limit} /> */}

      <img src={images.imageUri}/>
      </div>

      <div className="Separate_page_bnt">
      <button type="button" class="btn btn-outline-success" onClick={handlePreviousPage} disabled={page === 1}>이전페이지</button>
      <button type="button" class="btn btn-outline-success" onClick={handleNextPage} >다음페이지</button>
      </div>
    </div>
  );
};

export default FindTutor;
