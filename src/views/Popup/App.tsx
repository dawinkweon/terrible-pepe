import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    chrome.storage.local.get(['modeStatus'], (result) => {
      console.log(result);
      if (result.modeStatus) {
        setModeStatus(result.modeStatus);
      }
    });
  }, []);

  const updateModeStatus = (mode: keyof ModeStatusType) => {
    setModeStatus((prev: ModeStatusType) => {
      const newModeStatus = { ...prev, [mode]: !prev[mode] };

      // Save the new state to Chrome Storage
      chrome.storage.local.set({ modeStatus: newModeStatus });

      return newModeStatus;
    });
  };

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
          setModeStatus={() => updateModeStatus('grindingMode')}
          imgSrcOff={'/images/btn_crunch_mode_off.png'}
          imgSrcOn={'/images/btn_crunch_mode_on.png'}
          modeName={'Grinding Mode'}
        />
        <ModeCard
          modeStatus={modeStatus.eyeSaverMode}
          setModeStatus={() => updateModeStatus('eyeSaverMode')}
          imgSrcOff={'/images/btn_eye_saver_mode_off.png'}
          imgSrcOn={'/images/btn_eye_saver_mode_on.png'}
          modeName={'Eye-Saver Mode'}
        />
      </div>
    </div>
  );
}

export default App;
