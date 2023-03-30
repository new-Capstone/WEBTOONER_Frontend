import React from 'react';
import Header from '../components/Header'
// import Mypage_sidebar from '../components/Mypage_sidebar';
// import Mypage_image from '../components/Mypage_image';

function Mypage() {

    return (
    <div>
            <Header />
            <div className='mypage-container'>
            {/* <Mypage_sidebar />
            <Mypage_image /> */}
            </div>
    </div>
    );
  }
  
  export default Mypage;