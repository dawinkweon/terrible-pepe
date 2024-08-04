import OverlayImage from "./components/OverlayImage";
import { runtime, storage } from "webextension-polyfill";
import { changeImagesToPepe } from "./utils/changeImages";
import { config } from "./config";

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
  OverlayImage().showDialog();

  updateImages();

  // keep updating on a timer
  setInterval(() => {
    updateImages();
  }, config.ImageToPepeUpdateRateInMillis);

  // setInterval(() => {
  //   OverlayImage().off();
  // }, 3000);
}

const initEyeSaverMode = () => {
  OverlayImage().EyeSaver();
}

const updateImages = () => {
  const imgs = Array.from(document.getElementsByTagName("img"));
  changeImagesToPepe(imgs);
};