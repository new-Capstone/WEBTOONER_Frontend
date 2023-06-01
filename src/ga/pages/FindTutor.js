import React, { useState } from 'react';
import Header from '../components/Header';
import TabBar from '../components/TabBar';
import TutorImage from '../components/TutorImage';
import '../styles/FindTutor.css';


// 아직 튜터 이미지 서버에서 안 가져와서 사진이 출력되지 않는거 같음

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

  return (
    <div>
      <Header />
      <div className="TabBarContainer">
      <TabBar currentTab={currentTab} onTabChange={handleTabChange} />
      </div>
      <div className="TutorImage">
      <TutorImage genre={currentTab} page={page} limit={limit} />
      </div>
      <div className="Separate_page_bnt">
      <button type="button" class="btn btn-outline-success" onClick={handlePreviousPage} disabled={page === 1}>이전페이지</button>
      <button type="button" class="btn btn-outline-success" onClick={handleNextPage} >다음페이지</button>
      </div>
    </div>
  );
};

export default FindTutor;
