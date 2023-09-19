import './SpinningImage.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {

  const handleRefresh = () => {
    window.location.reload(); 
  };
  

  return (
    <div className="sidebar">
      <h2>HireAra</h2>
      
      <button  onClick={handleRefresh}>
        <FontAwesomeIcon icon={faSync} /> Refresh Page
      </button>
    </div>
  );
};

export default Sidebar;
