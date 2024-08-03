import React from 'react';
import { FaCog } from 'react-icons/fa';
import './App.css';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';

function App() {
  return (
    <div className="popup-container">
      <header className="popup-header">
        <h1 className="popup-heading">Pepe The Helpie</h1>
        <button
          className="setting-btn"
          onClick={() => console.log('button clicked')}
        >
          <FaCog className="setting-icon" />
        </button>
      </header>

      <div className="popup-body">
        <div className="mode">
          {/* Img will be added here */}
          <img
            src="/images/btn_crunch_mode_off.png"
            alt="grinding mode image"
            className="mode-image"
          />
          <h2 className="mode-text">Grinding Mode</h2>
          <div className="mode-switch">
            <ToggleSwitch
              isOn={true}
              onToggle={() => {
                console.log('yo');
              }}
            />
          </div>
        </div>
        <div className="mode">
          {/* Img will be added here */}
          <img
            src="/images/btn_eye_saver_mode_off.png"
            alt="eyesaver mode image"
            className="mode-image"
          />
          <h2 className="mode-text">Eye-Saver Mode</h2>
          <div className="mode-switch">
            <ToggleSwitch
              isOn={true}
              onToggle={() => {
                console.log('yo');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
