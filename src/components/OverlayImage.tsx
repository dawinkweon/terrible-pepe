import React from "react";
import { runtime } from "webextension-polyfill";
import Dialog, { ScenarioState } from "./Dialog/Dialog";
import ReactDOM from "react-dom";
import AnswerModal from "./AnswerModal/AnswerModal";
import { UpdateResultEvent } from "./UpdateResultEvent";

export default function OverlayImage() {
  const createDiv = document.createElement("div") as HTMLDivElement;
  const createImage = document.createElement("img") as HTMLImageElement;

  let r = Math.floor(Math.random() * 14);
  let file = `./images/pepe${r + 1}.png`;
  let url = runtime.getURL(file);
  let punched = `./images/ic_pepe_punch.png`;
  let punchedUrl = runtime.getURL(punched);

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
    getImage.style.display = "none";
  }
  function showDialog() {
    const updateResultEvent = new UpdateResultEvent();

    ReactDOM.render(
      <>
        <AnswerModal updateResultEvent={updateResultEvent} />
        <Dialog updateResultEvent={updateResultEvent} />
      </>,
      document.getElementById("overlay")
    );
  }
  function Time() {
    const [saying, setSaying] = React.useState<string>(
      "Hi, I'm Dr.Pepe The Helpie. It's time to rest your eyes"
    );
    const [isVisible, setIsVisible] = React.useState<boolean>(false);
    const timeout = 30000;

    const timer = () => {
      setSaying("Close your eyes for 30 seconds. Don't Open!");
      const interval1 = setInterval(() => {
        setSaying(
          "If you can see this, It means you opend your eyes and about to get punched."
        );
        setIsVisible(true);
        clearInterval(interval1);
      }, 5000);
      const interval2 = setInterval(() => {
        setSaying("Well done. I will see you again in an hour");
        setIsVisible(false);
        clearInterval(interval2);
      }, timeout);
    };
    return (
      <div onClick={() => timer()} style={{ cursor: "pointer" }}>
        {isVisible ? (
          <img
            src={`${punchedUrl}`}
            alt="punched"
            style={{
              position: "fixed",
              top: "30%",
              left: "50%",
              opacity: "1.0",
              transform: "translate(-50%, -50%)",
              zIndex: "9999",
            }}
          />
        ) : (
          <></>
        )}
        <div className="dialog-container">
          <img
            src={`${url}`}
            alt="doctor_pepe"
            className="dialog-profile"
          />
          <div className="dialog-textBox">
            <h3 className="dialog-name">[Pepe The Helpie]</h3>
            <p className="dialog-text">{saying}</p>
          </div>
        </div>
      </div>
    );
  }
  function EyeSaver() {
    console.log("run eyesaver");

    ReactDOM.render(<Time />, document.getElementById("overlay"));
  }

  return {
    on,
    off,
    showDialog,
    EyeSaver,
  };
}
