import OverlayImage from "./components/OverlayImage";
import { runtime } from "webextension-polyfill";
import { changeImages } from "./utils/changeImages";
console.log("Hello Content");
export {};

const init = () => {
  OverlayImage().on();
};

init();

runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if(msg.id == 'tab_load_complete') {
    changeImages(document.getElementsByTagName("img"));
  }
})
changeImages(document.getElementsByTagName("img"));
