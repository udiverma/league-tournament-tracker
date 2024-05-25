// src/ComingSoon.js
import React from 'react';
import logo from './Vertical_VT_Full_Color_RGB.svg';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <div className="content">
        <h1>Coming Soon</h1>
        <p>Stay tuned for the Virginia Tech League of Legends Tournament Tracker</p>
        <img src={logo} alt="Virginia Tech Logo" />
      </div>
    </div>
  );
};

export default ComingSoon;