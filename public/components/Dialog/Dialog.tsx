import React from 'react';
import './Dialog.css';

interface DialogProps {
  profileImg: string;
  speaker: string;
  saying: string;
}

const Dialog = ({ profileImg, speaker, saying }: DialogProps) => {
  return (
    <div className="dialog-container">
      <img src={profileImg} alt="pepe image" className="dialog-profile" />
      <div className="dialog-textBox">
        <h3 className="dialog-name">{speaker}</h3>
        <p className="dialog-text">{saying}</p>
      </div>
    </div>
  );
};

export default Dialog;
