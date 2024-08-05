import React from "react";
import { useState } from "react";
import { runtime } from "webextension-polyfill";

type TimeProps = {
  onDialogClosing: () => void;
};
const Time: React.FC<TimeProps> = ({ onDialogClosing }) => {
  let punched = `./images/ic_pepe_punch.png`;
  let punchedUrl = runtime.getURL(punched);
  let doctor = `./images/ic_pepe_doctor.png`;
  let doctorUrl = runtime.getURL(doctor);

  const [saying, setSaying] = React.useState<string>(
    "Hi, I'm Dr.Pepe The Helpie. It's time to rest your eyes"
  );
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const timeoutInSeconds = parseInt(
    process.env.REACT_APP_EYE_SAVER_CLOSE_DURATION_SECONDS ?? "3"
  );
  const timeoutInMillis = timeoutInSeconds * 1000;

  const speechDelayInMillis = 5 * 1000;

  const timer = () => {
    setSaying(`Close your eyes for ${timeoutInSeconds} seconds. Don't Open!`);
    const interval1 = setInterval(() => {
      setSaying(
        "If you can see this, It means you opend your eyes and about to get punched."
      );
      setIsVisible(true);
      clearInterval(interval1);
    }, speechDelayInMillis);
    const interval2 = setInterval(() => {
      setSaying("Well done. I will see you again in an hour");
      setIsVisible(false);
      clearInterval(interval2);
    }, timeoutInMillis);
    const interval3 = setInterval(() => {
      clearInterval(interval3);
      onDialogClosing();
    }, timeoutInSeconds + speechDelayInMillis);
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
          src={`${doctorUrl}`}
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
};

const EyeSaverDialog = () => {
  const [isVisible, setIsVisible] = useState(true);

  const onDialogClosing = () => {
    setIsVisible(false);
  };
  return isVisible ? <Time onDialogClosing={onDialogClosing} /> : <div />;
};

export default EyeSaverDialog;
