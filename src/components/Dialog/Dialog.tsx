import React, { useState, useEffect } from 'react';
import './Dialog.css';
import scenario from "../../../public/assets/scenario.json";
import { UpdateResultEvent } from '../UpdateResultEvent';

interface DialogProps {
  profileImg: string;
  speaker: string;
  saying: string;
  updateResultEvent: UpdateResultEvent
}

interface ScenarioState {
  id: number,
  title: string,
  icon_name: string,
  is_dismissable: boolean,
  timeout_sec: number,
  timeout: number,
  answers: {
    yes: number,
    no: number
  }
}

//let scenarioTimer: NodeJS.Timeout | null;

const Dialog = ({ profileImg, speaker, saying, updateResultEvent }: DialogProps) => {
  const [selectedScenario, setSelectedScenario] = React.useState<ScenarioState> ({
      id: 1,
      title: "Are you there?",
      icon_name: "images/ic_pepe_snug.png",
      is_dismissable: false,
      timeout_sec: 3,
      timeout: 5,
      answers: {
        yes: 3,
        no: 4
      }
  })
  updateResultEvent.addListener((result) => {
    console.debug("Update result event received!", result);
    // TODO do something
  });

  // grindTimer = setInterval(() => {
  //   //         if (grindTimerHandler !== null) {
  //   //           grindTimerHandler();
  //   //         }
  //   //       }, 1000 * 1);


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
