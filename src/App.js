import React, {useState} from 'react';
import SpinningImage from './SpinningImage';
import MouseTracker from './timer';
import Sidebar from './Sidebar';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className="App">
      <button
        className={`sidebar-toggle ${isSidebarVisible ? 'open' : ''}`}
        onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isSidebarVisible ? faTimes : faBars} size="lg" />
      </button>
      {isSidebarVisible && <Sidebar />}
      <SpinningImage/>
    </div>
  );
}

export default App;
