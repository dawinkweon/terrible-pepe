import React, { useState, useEffect } from 'react';
import './Dialog.css';
import { runtime } from 'webextension-polyfill';
import scenario from '../../scenario.json';
import { UpdateResultEvent } from '../UpdateResultEvent';
import OverlayImage from '../OverlayImage';

const typedSecnario: Array<ScenarioState> = scenario;

interface DialogProps {
  updateResultEvent: UpdateResultEvent;
}

export interface ScenarioState {
  id: number;
  title: string;
  icon_name: string;
  is_dismissable: boolean;
  timeout_sec: number;
  timeout: number | null;
  answers: {
    yes: number;
    no: number;
  } | null;
}

const generateNextStepId = (
  currentStep: ScenarioState,
  answer: boolean
): number | null => {
  if (currentStep.answers) {
    return answer ? currentStep?.answers['yes'] : currentStep?.answers['no'];
  }

  return null;
};
//let scenarioTimer: NodeJS.Timeout | null;

const Dialog = ({ updateResultEvent }: DialogProps) => {
  const [selectedScenario, setSelectedScenario] = React.useState<ScenarioState>(
    {
      id: 1,
      title: 'Are you there?',
      icon_name: 'images/ic_pepe_snug.png',
      is_dismissable: false,
      timeout_sec: 3,
      timeout: 5,
      answers: {
        yes: 3,
        no: 4,
      },
    }
  );

  updateResultEvent.addListener((result) => {
    console.debug('Update result event received!');
    const nextStep = generateNextStepId(selectedScenario, result);
    if (nextStep !== null) setSelectedScenario(typedSecnario[nextStep - 1]);
    // display hiden the dialog
    // OverlayImage.off();
    // TODO do something
  });

  // grindTimer = setInterval(() => {
  //   //         if (grindTimerHandler !== null) {
  //   //           grindTimerHandler();
  //   //         }
  //   //       }, 1000 * 1);

  return (
    <div className="dialog-container">
      <img
        src={runtime.getURL(selectedScenario.icon_name)}
        alt="pepe image"
        className="dialog-profile"
      />
      <div className="dialog-textBox">
        <h3 className="dialog-name">Pepe</h3>
        <p className="dialog-text">{selectedScenario.title}</p>
      </div>
    </div>
  );
};

export default Dialog;
