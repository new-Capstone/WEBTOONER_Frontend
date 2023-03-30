import React from 'react';
import './Mypage.css';

function Mypage_sidebar() {

    return (
    <div className='sidebar-container'>
        <div className='sidebar-content'>
            <img src="https://via.placeholder.com/231x231" alt="side-image" />
            <ul className='sidebar-li'>
                <li>김지은</li>
                <li>smkje19999@gmail.com</li>
            </ul>
            <p>소개글 입니다.</p>
            
            <div className='sidebar-bottom'>
                <button type="submit" value="Edit">Edit</button>
            </div>
        </div>
    </div>
    )
}

export default Mypage_sidebar;