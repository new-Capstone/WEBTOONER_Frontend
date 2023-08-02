import React from 'react';

const Tabbar = ({ currentTab, onTabChange }) => {
  const genres = ['호러', '로맨스', '액션', '기타'];

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

export default Tabbar;
