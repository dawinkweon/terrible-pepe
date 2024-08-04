import OverlayImage from './components/OverlayImage';
import { runtime } from 'webextension-polyfill';
import { changeImages } from './utils/changeImages';
import scenario from './scenario.json';

const firstStep = scenario[0];

const generateNextStepId = (currentStep: any, answer: any) => {
  return currentStep.answers[answer];
};

chrome.storage.local.get(['modeStatus'], (result) => {
  if (result.modeStatus.grindingMode) {
    OverlayImage().showDialog(
      runtime.getURL(firstStep.icon_name),
      'Pepe',
      firstStep.title
    );
    setInterval(() => {
      OverlayImage().off();
    }, 3000);
  }
});

runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.id == 'tab_load_complete') {
    changeImages(document.getElementsByTagName('img'));
  }
});
changeImages(document.getElementsByTagName('img'));
