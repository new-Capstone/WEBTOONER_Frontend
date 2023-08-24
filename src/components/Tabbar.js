import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const TabBar = () => {
  const genres = ['noir', 'romance', 'action', 'horror'];

  return (
    <div className='Tab-bar'>
      {genres.map((genre) => (
        <button
          type="button"
          className="btn btn-outline-success"
          style={{ marginLeft: "20px", width: "100px" }}
          key={genre}
        >
          <Link to={`/findtutor/${genre}`} style={{ textDecoration: "none", color: "green", textTransform: "capitalize" }}>{genre}</Link>
        </button>
      ))}
    </div>
  );
};

export default TabBar;
