import OverlayImage from "./components/OverlayImage";
import { runtime } from "webextension-polyfill";
import { changeImagesToPepe } from "./utils/changeImages";
import { config } from "./config";


chrome.storage.local.get(["modeStatus"], (result) => {
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
  if (msg.id === "tab_load_complete") {
    init();
  }
});

const init = () => {
  updateImages();

  setupInterval();
};

const updateImages = () => {
  const imgs = Array.from(document.getElementsByTagName("img"));
  changeImagesToPepe(imgs);
}

const setupInterval = () => {
  setInterval(() => {
    updateImages();
  }, config.ImageToPepeUpdateRateInMillis);
};
