import OverlayImage from "./components/OverlayImage";
import { runtime } from "webextension-polyfill";
import { changeImages } from "./utils/changeImages";
import { EventType } from "./types/EventType";
import { Message } from "./types/Message";
console.log("Hello Content");
export {};

const init = () => {
  OverlayImage().showDialog("testimage", "test", "test");
};

init();

runtime.onMessage.addListener(function (msg: Message, sender, sendResponse) {
  if(msg.evenType == EventType.TabLoadComplete) {
    changeImages(document.getElementsByTagName("img"));
  }
})
changeImages(document.getElementsByTagName("img"));
