import React, { useState } from 'react';
import './ToggleSwitch.css';
import { playAudioAtURL } from '../AudioSource';

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: (isOn: boolean) => void;
  onColor?: string;
  offColor?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isOn,
  onToggle,
  onColor = '#528138',
  offColor = '#FF3131',
}) => {
  const [isToggled, setIsToggled] = useState<boolean>(isOn);

  const handleToggle = () => {
    const newIsToggled = !isToggled;
    setIsToggled(newIsToggled);
    onToggle(newIsToggled);
  };

  return (
    <div
      onClick={handleToggle}
      className={`toggle-container ${isToggled ? 'on' : 'off'}`}
      style={
        {
          '--on-color': onColor,
          '--off-color': offColor,
        } as React.CSSProperties
      }
    >
      <div className={`toggle-circle ${isToggled ? 'on' : 'off'}`} />
    </div>
  );
};

export default ToggleSwitch;
