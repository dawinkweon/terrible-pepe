import { runtime } from "webextension-polyfill";
import { changeImagesToPepe } from "./utils/changeImages";
import { config } from "./config";
import { showEyeSaverModeDialog, showGrindingModeDialog } from "./components/OverlayImage";


chrome.storage.local.get(["modeStatus"], (result) => {
  if (result.modeStatus.grindingMode) {
    showGrindingModeDialog();
  }

  if (result.modeStatus.eyeSaverMode) {
    showEyeSaverModeDialog();
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
