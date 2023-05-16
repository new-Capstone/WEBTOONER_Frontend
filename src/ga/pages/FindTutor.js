import React, { useState } from 'react';
import Header from '../components/Header';
import TabBar from '../components/TabBar';
import TutorImage from '../components/TutorImage';
import '../styles/FindTutor.css';
const FindTutor = () => {
  const [currentTab, setCurrentTab] = useState('느와르');

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div>
      <Header/>
      <TabBar currentTab={currentTab} onTabChange={handleTabChange} />
      <TutorImage genre={currentTab} />
    </div>
  );
};

export default FindTutor;
