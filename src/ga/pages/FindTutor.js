import React, { useState } from 'react';
import Header from '../components/Header';
import Tabbar from '../components/Tabbar';
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
      <Tabbar currentTab={currentTab} onTabChange={handleTabChange} />
      <TutorImage genre={currentTab} />
    </div>
  );
};

export default FindTutor;
