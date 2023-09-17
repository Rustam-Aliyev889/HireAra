import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './SpinningImage.css';
import MouseTracker from './timer';

const SpinningImage = () => {
  const [rotateClockwise, setRotateClockwise] = useState(true);

  const handleImageClick = () => {
    // Reverse the rotation direction
    setRotateClockwise(!rotateClockwise);
  };

  return (
    <div className="spinning-image">
        <MouseTracker>
      <img
        src={logo}
        alt="Spinning Image"
        className={`rotate ${rotateClockwise ? 'clockwise' : 'counterclockwise'}`}
        onClick={handleImageClick}
      />
      </MouseTracker>
    </div>
  );
};

export default SpinningImage;
