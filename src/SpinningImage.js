import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './SpinningImage.css';
import MouseTracker from './timer';

const SpinningImage = () => {
  const [rotateClockwise, setRotateClockwise] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [imageSize, setImageSize] = useState({ width: 200, height: 200 }); // Initial size

  const handleImageClick = () => {
    // Reverse the rotation direction
    setRotateClockwise(!rotateClockwise);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Updates cursor position
      setCursorPosition({ x: e.clientX, y: e.clientY });

      // Calculating new image size based on cursor position
      const newSize = {
        width: 200 + e.clientX / 5, 
        height: 200 + e.clientY / 5,
      };

      setImageSize(newSize);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="spinning-image">
      <MouseTracker>
        <img
          src={logo}
          alt="Spinning Image"
          className={`rotate ${rotateClockwise ? 'clockwise' : 'counterclockwise'}`}
          style={{
            width: imageSize.width + 'px',
            height: imageSize.height + 'px',
          }}
          onClick={handleImageClick}
        />
      </MouseTracker>
    </div>
  );
};

export default SpinningImage;
