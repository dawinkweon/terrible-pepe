import React from "react";
import { runtime } from "webextension-polyfill";
import Dialog from "./Dialog/Dialog";
import ReactDOM from "react-dom";
import AnswerModal from "./AnswerModal/AnswerModal";
export default function OverlayImage() {
  const createDiv = document.createElement("div") as HTMLDivElement;
  const createImage = document.createElement("img") as HTMLImageElement;

  let r = Math.floor(Math.random() * 14);
  let file = `./images/pepe${r + 1}.png`;
  let url = runtime.getURL(file);

  createDiv.setAttribute("id", "overlay");
  createImage.setAttribute("id", "img");

  document.body.appendChild(createDiv);
  createDiv.appendChild(createImage);

  let getOverlay = document.getElementById("overlay") as HTMLImageElement;
  let getImage = document.getElementById("img") as HTMLImageElement;

  function on() {
    getOverlay.style.position = "fixed";
    getOverlay.style.backgroundColor = "black";
    getOverlay.style.opacity = "0.7";
    getOverlay.style.height = "100%";
    getOverlay.style.width = "100%";
    getOverlay.style.top = "0";
    getOverlay.style.left = "0";
    getOverlay.style.zIndex = "999999";
    getImage.src = url;
    getImage.style.position = "fixed";
    getImage.style.top = "50%";
    getImage.style.left = "50%";
    getImage.style.opacity = "1.0";
    getImage.style.transform = "translate(-50%, -50%)";
    getImage.style.zIndex = "9999999";
  }
  function off() {
    // getImage!.style.display = "none";
  }
  function showDialog(profileImg:string, speaker:string, saying: string) {
    ReactDOM.render(
      <>
        <AnswerModal />
        <Dialog
          profileImg={profileImg}
          speaker={speaker}
          saying={saying}
        />
      </>,
      document.getElementById("overlay")
    );
  }
  return {
    on,
    off,
    showDialog,
  };
}

