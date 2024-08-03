import React from 'react';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

interface ToggleSwitchProps {
  modeStatus: boolean;
  setModeStatus: () => void;
  imgSrcOff: string;
  imgSrcOn: string;
  modeName: string;
}

const ModeCard = ({
  modeStatus,
  setModeStatus,
  imgSrcOff,
  imgSrcOn,
  modeName,
}: ToggleSwitchProps) => {
  return (
    <div className="mode">
      <img
        src={modeStatus ? imgSrcOn : imgSrcOff}
        alt="mode image"
        className="mode-image"
      />
      <h2 className="mode-text">{modeName}</h2>
      <div className="mode-switch">
        <ToggleSwitch isOn={modeStatus} onToggle={setModeStatus}/>
      </div>
    </div>
  );
};

export default ModeCard;
