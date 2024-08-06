import React, { useEffect, useState } from "react";
import "./App.css";
import ModeCard from "../../components/ModeCard/ModeCard";
import Setting from "../../components/Setting/Setting";
import { storage } from "../../runtime";

type ModeStatusType = {
  grindingMode: boolean;
  eyeSaverMode: boolean;
};

function App() {
  const [modeStatus, setModeStatus] = useState<ModeStatusType>({
    grindingMode: false,
    eyeSaverMode: false,
  });
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  useEffect(() => {
    const getModeStatus = async () => {
      var result = await storage.local.get(["modeStatus"]);
      console.log(result);
      if (result.modeStatus) {
        setModeStatus(result.modeStatus);
      }
    };
    getModeStatus().catch(console.error);
  }, []);

  const updateModeStatus = (mode: keyof ModeStatusType) => {
    setModeStatus((prev: ModeStatusType) => {
      const newModeStatus = { ...prev, [mode]: !prev[mode] };

      // Save the new state to Chrome Storage
      storage.local.set({ modeStatus: newModeStatus });

      // updateDialogs(prev, newModeStatus);
      return newModeStatus;
    });
  };

  return (
    <div className="popup-container">
      <header className="popup-header">
        <h1 className="popup-heading">Pepe The Helpie</h1>
        <Setting
          isSettingOpen={isSettingOpen}
          setIsSettingOpen={setIsSettingOpen}
        />
      </header>
      <div className="popup-body">
        <ModeCard
          modeStatus={modeStatus.grindingMode}
          setModeStatus={() => updateModeStatus("grindingMode")}
          imgSrcOff={"/images/btn_crunch_mode_off.png"}
          imgSrcOn={"/images/btn_crunch_mode_on.png"}
          modeName={"Grinding Mode"}
        />
        <ModeCard
          modeStatus={modeStatus.eyeSaverMode}
          setModeStatus={() => updateModeStatus("eyeSaverMode")}
          imgSrcOff={"/images/btn_eye_saver_mode_off.png"}
          imgSrcOn={"/images/btn_eye_saver_mode_on.png"}
          modeName={"Eye-Saver Mode"}
        />
      </div>
    </div>
  );
}

// const updateDialogs = (previousStatus : ModeStatusType, newStatus: ModeStatusType) => {
//   console.log("Updating dialogs...");
//   let hasChanged = previousStatus.eyeSaverMode !== newStatus.eyeSaverMode;
//   if (hasChanged && newStatus.eyeSaverMode) {
//     console.log("enabling eye saver mode...");
//     runtime.sendMessage({id: "showEyeSaverModeDialog"});

//     // showEyeSaverModeDialog();
//   } else if (hasChanged && !newStatus.eyeSaverMode) {
//     hideEyeSaverModeDialog();
//   }

//   hasChanged = previousStatus.grindingMode !== newStatus.grindingMode;
//   if (hasChanged && newStatus.grindingMode) {
//     showGrindingModeDialog();
//   } else if (hasChanged && !newStatus.grindingMode) {
//     hideGrindingModeDialog();
//   }
// }

export default App;
