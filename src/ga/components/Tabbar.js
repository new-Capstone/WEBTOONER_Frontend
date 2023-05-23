import React from 'react';
import Button from 'react-bootstrap/Button';

const TabBar = ({ currentTab, onTabChange }) => {
  const genres = ['느와르', '로맨스', '액션', '호러'];

  return (
    <div className='Tab-bar'>
      {genres.map((genre) => (
        <Button
          key={genre}
          variant={currentTab === genre ? 'success' : 'outline-success'}
          className={currentTab === genre ? 'active' : ''}
          onClick={() => onTabChange(genre)}
        >
          {genre}
        </Button>
      ))}
    </div>
  );
};

export default TabBar;

