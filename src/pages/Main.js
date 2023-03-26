//임시로 만든 메인 페이지

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Main() {
  return (
    <div>
        <Header />
      <h1>Main 페이지</h1>
      <Link to="/about">About 페이지로 이동</Link>
    </div>
  );
}

export default Main;