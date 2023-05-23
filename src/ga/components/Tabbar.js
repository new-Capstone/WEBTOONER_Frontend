import React from 'react';

const TabBar = ({ currentTab, onTabChange }) => {
  const genres = ['느와르', '로맨스', '액션', '호러'];

  return (
    <div className='Tab-bar'>
      {genres.map((genre) => (
        <button
          key={genre}
          className={currentTab === genre ? 'active' : ''}
          onClick={() => onTabChange(genre)}
        >
        {genre}
        </button>
      ))}
    </div>
  );
};

export default TabBar;




