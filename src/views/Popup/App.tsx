import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import './App.css';
import ModeCard from '../../components/ModeCard/ModeCard';

type ModeStatusType = {
  grindingMode: boolean;
  eyeSaverMode: boolean;
};

function App() {
  const [modeStatus, setModeStatus] = useState<ModeStatusType>({
    grindingMode: false,
    eyeSaverMode: false,
  });

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
        <ModeCard
          modeStatus={modeStatus.grindingMode}
          setModeStatus={() =>
            setModeStatus((prev: ModeStatusType) => ({
              ...prev,
              grindingMode: !prev.grindingMode,
            }))
          }
          imgSrcOff={'/images/btn_crunch_mode_off.png'}
          imgSrcOn={'/images/btn_crunch_mode_on.png'}
          modeName={'Grinding Mode'}
        />
        <ModeCard
          modeStatus={modeStatus.eyeSaverMode}
          setModeStatus={() =>
            setModeStatus((prev: ModeStatusType) => ({
              ...prev,
              eyeSaverMode: !prev.eyeSaverMode,
            }))
          }
          imgSrcOff={'/images/btn_eye_saver_mode_off.png'}
          imgSrcOn={'/images/btn_eye_saver_mode_on.png'}
          modeName={'Eye-Saver Mode'}
        />
      </div>
    </div>
  );
}

export default App;
