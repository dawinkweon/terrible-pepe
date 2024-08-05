import React from "react";
import ReactDOM from "react-dom";
import GrindingModeDialog from "./GrindingModeDialog/GrindingModeDialog";
import EyeSaverDialog from "./EyeSaverDialog/EyeSaverDialog";

let overlayDiv: HTMLDivElement;

const init = () => {
  // Initialize injecting the overlay on the dom to render the react dialogs
  overlayDiv = document.createElement("div") as HTMLDivElement;
  overlayDiv.setAttribute("id", "overlay");

  document.body.appendChild(overlayDiv);
};

function showGrindingModeDialog() {
  console.debug("running grinding mode dialog...");

  ReactDOM.render(<GrindingModeDialog />, overlayDiv);
}

function showEyeSaverModeDialog() {
  console.debug("running eyesaver mode dialog...");

  ReactDOM.render(<EyeSaverDialog />, overlayDiv);
}

init();

export { showGrindingModeDialog, showEyeSaverModeDialog };
