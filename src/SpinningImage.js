import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './SpinningImage.css';
import MouseTracker from './timer';

const SpinningImage = () => {
  const [rotateClockwise, setRotateClockwise] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [imageSize, setImageSize] = useState({ width: 200, height: 200 }); // Initial size
  const [isSpinning, setIsSpinning] = useState(true);

  const handleImageClick = () => {
    // Reverse the rotation direction
    setRotateClockwise(!rotateClockwise);
  };

  const toggleSpin = () => {
    setIsSpinning(!isSpinning);
  };

  // You can add or remove the 'rotate' class based on the 'isSpinning' state
  useEffect(() => {
    const imgElement = document.querySelector('.spinning-image img');
    if (imgElement) {
      if (isSpinning) {
        imgElement.classList.add('rotate');
      } else {
        imgElement.classList.remove('rotate');
      }
    }
  }, [isSpinning]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Updates cursor position
      setCursorPosition({ x: e.clientX, y: e.clientY });

      // Calculating new image size based on cursor position
      const newSize = {
        width: 200 + e.clientX / 5, // Change to adjust the size of the icon
        height: 200 + e.clientY / 5, // Change to adjust the size of the icon
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
      <div>
        <button onClick={toggleSpin}>
          {isSpinning ? 'Stop Spinning' : 'Start Spinning'}
        </button>
      </div>
    </div>
  );
};

export default SpinningImage;
