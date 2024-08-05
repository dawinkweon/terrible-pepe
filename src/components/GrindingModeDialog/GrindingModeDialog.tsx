import { useState } from "react";
import { UpdateResultEvent } from "../UpdateResultEvent";
import AnswerModal from "../AnswerModal/AnswerModal";
import React from "react";
import Dialog from "../Dialog/Dialog";

const GrindingModeDialog = () => {
  const style: React.CSSProperties = {
    position: "fixed",
    backgroundColor: "black",
    opacity: "0.7",
    height: "100%",
    width: "100%",
    top: "0",
    left: "0",
    zIndex: "999999",
  };

  const updateResultEvent = new UpdateResultEvent();
  const [isVisible, setIsVisible] = useState(true);
  const [showModal, setShowModal] = useState(true);

  const onClosingDialog = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div style={style}>
      <AnswerModal
        updateResultEvent={updateResultEvent}
        isVisible={showModal}
      />
      <Dialog
        updateResultEvent={updateResultEvent}
        onClosingDialog={onClosingDialog}
        showModal={setShowModal}
      />
    </div>
  ) : (
    <div />
  );
};

export default GrindingModeDialog;
