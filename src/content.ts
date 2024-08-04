import OverlayImage from './components/OverlayImage';
import { runtime } from 'webextension-polyfill';
import { changeImages, changeImagesV2 } from './utils/changeImages';

const IMG_CHANGE_RATE_SECONDS = 1;

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

const getImages = () => document.getElementsByTagName('img');

runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.id == 'tab_load_complete') {
    changeImages(getImages());
  }
});

const init = () => {
    changeImages(getImages());
}

setInterval(() => {
    const images = getImages();

    const imagesToChange : Array<HTMLImageElement> = [];
    for (let i = 0; i < images.length; i++) {
        const image = images.item(i)!;
        const isAlreadyPepe = image.src.includes("pepe");
        if (!isAlreadyPepe) {
            imagesToChange.push(image);
        }
    }
    changeImagesV2(imagesToChange);
}, IMG_CHANGE_RATE_SECONDS * 1000)

init();