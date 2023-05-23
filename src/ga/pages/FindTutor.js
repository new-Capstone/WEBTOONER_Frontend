import React, { useState } from 'react';
import Header from '../components/Header';
import TabBar from '../components/TabBar';
import TutorImage from '../components/TutorImage';
import '../styles/FindTutor.css';

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
      <TabBar currentTab={currentTab} onTabChange={handleTabChange} />
      <TutorImage genre={currentTab} page={page} limit={limit} />
      <div className="pagination">
      <button type="button" class="btn btn-outline-success" onClick={handlePreviousPage} disabled={page === 1}>이전페이지</button>
      <button type="button" class="btn btn-outline-success" onClick={handleNextPage} >다음페이지</button>

      </div>
    </div>
  );
};

export default FindTutor;
