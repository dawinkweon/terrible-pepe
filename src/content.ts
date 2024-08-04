import OverlayImage from './components/OverlayImage';
import { runtime } from 'webextension-polyfill';
import { changeImages } from './utils/changeImages';

chrome.storage.local.get(['modeStatus'], (result) => {
  if (result.modeStatus.grindingMode) {
    OverlayImage().showDialog();
    // setInterval(() => {
    //   OverlayImage().off();
    // }, 3000);
  }
  if (result.modeStatus.eyeSaverMode) {
    OverlayImage().EyeSaver();
  }
  
});

runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.id == 'tab_load_complete') {
    changeImages(document.getElementsByTagName('img'));
  }
});
changeImages(document.getElementsByTagName('img'));
