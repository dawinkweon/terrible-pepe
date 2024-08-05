import { changeImagesToPepe } from "./utils/changeImages";
import { config } from "./config";
import { showEyeSaverModeDialog, showGrindingModeDialog } from "./components/OverlayImage";
import { runtime, storage } from "webextension-polyfill";

runtime.onMessage.addListener(async function (msg, sender, sendResponse) {
  if (msg.id === "tab_load_complete") {
    await init();
  }
});

const init = async () => {
  const result = await storage.local.get(["modeStatus"]);

  if (result.modeStatus.grindingMode) {
    initGrindingMode();
  }

  if (result.modeStatus.eyeSaverMode) {
    initEyeSaverMode();
  }
};

const initGrindingMode = () => {
  showGrindingModeDialog();

  // update images now and keep updating on a timer
  updateImages();
  setInterval(() => {
    updateImages();
  }, config.ImageToPepeUpdateRateInMillis);
}

const initEyeSaverMode = () => {
  showEyeSaverModeDialog();
}

const updateImages = () => {
  const imgs = Array.from(document.getElementsByTagName("img"));
  changeImagesToPepe(imgs);
};