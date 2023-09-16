import logo from './logo.svg';
import React, { useState } from 'react';
import './SpinningImage.css';

const SpinningImage = () => {
  const [rotateClockwise, setRotateClockwise] = useState(true);

  const handleImageClick = () => {
    // Reverse the rotation direction
    setRotateClockwise(!rotateClockwise);
  };

  return (
    <div className="spinning-image">
      <img
        src={logo}
        alt="Spinning Image"
        className={`rotate ${rotateClockwise ? 'clockwise' : 'counterclockwise'}`}
        onClick={handleImageClick}
      />
    </div>
  );
};

export default SpinningImage;
