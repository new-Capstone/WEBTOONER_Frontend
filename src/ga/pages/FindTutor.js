import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CategorySlider from '../components/CategorySlider';
import '../styles/FindTutor.css';

function FindTutor () {
    return (
        <div>
        <Header />
        <CategorySlider />
        </div>
    );
}

export default FindTutor;