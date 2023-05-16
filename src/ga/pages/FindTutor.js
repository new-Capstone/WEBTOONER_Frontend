import React, { useState } from 'react';
import TabBar from '../components/Tabbar';
import TutorImage from '../components/TutorImage';

const FindTutor = () => {
  const [currentTab, setCurrentTab] = useState('느와르');

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div>
      <TabBar currentTab={currentTab} onTabChange={handleTabChange} />
      <TutorImage genre={currentTab} />
    </div>
  );
};

export default FindTutor;
