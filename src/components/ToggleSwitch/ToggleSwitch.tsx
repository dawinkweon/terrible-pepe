import React, { useState } from 'react';
import './ToggleSwitch.css';
import { SoundEffects } from '../AudioSource';

let eyeTimerIntervalMin = 60;
let grindTimer: NodeJS.Timeout | null;
let eyeTimer: NodeJS.Timeout | null;

let grindTimerHandler: () => void | null;
let eyeTimerHandler: () => void | null;

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: (isOn: boolean) => void;
  onColor?: string;
  offColor?: string;
  toggleName?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isOn,
  onToggle,
  onColor = '#528138',
  offColor = '#FF3131',
  toggleName = 'default',
}) => {
  const [isToggled, setIsToggled] = useState<boolean>(isOn);

  const handleToggle = () => {
    const newIsToggled = !isToggled; 
    
    if(toggleName === 'Grinding Mode') {
      if(!isOn) {
        console.log("Enabling Grinding mode");
        
        if(grindTimer !== null) {
          clearInterval(grindTimer);
          grindTimer = null;
        }

        grindTimer = setInterval(() => {
            if(grindTimerHandler !== null) {
              grindTimerHandler();
            }
        }, 1000 * 1);
        // (Math.floor(Math.random() * 59) + 1)
      } else {
        console.log("Disabling Grinding mode");
        if(grindTimer !== null) {
          clearInterval(grindTimer);
        }
        grindTimer = null;if(grindTimer !== null) {
          clearInterval(grindTimer);
        }
        grindTimer = null;
      }

    }
    else if(toggleName === 'Eye-Saver Mode') {
      if(!isOn) {
        console.log("Enabling Eye-Saver mode");

        if(eyeTimer !== null) {
          clearInterval(eyeTimer);
          eyeTimer = null;
        }

        eyeTimer = setInterval(() => {
          if(eyeTimerHandler !== null) {
            eyeTimerHandler();
          }
      }, 1000);
      // 1000 * eyeTimerIntervalMin
      } else {
        console.log("Disabling Eye-Saver mode");
        if(eyeTimer !== null) {
          clearInterval(eyeTimer);
        }
        eyeTimer = null;
      }
    }

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



grindTimerHandler = () => {
  console.log("Running grind timer handler");
}

eyeTimerHandler = () => {
  console.log("Running eye timer handler");
}