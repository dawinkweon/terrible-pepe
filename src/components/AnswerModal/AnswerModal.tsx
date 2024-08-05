import React from "react";
import "./AnswerModal.css";
import { UpdateResultEvent } from "../UpdateResultEvent";
// interface AnswerModalProps {
//   onAnswer: (answer: string) => void;
// }
interface AnswerModalProps {
  updateResultEvent: UpdateResultEvent;
  isVisible: boolean;
}

const AnswerModal: React.FC<AnswerModalProps> = ({
  isVisible,
  updateResultEvent,
}) => {
  const handleUpdateResult = (result: boolean) => {
    updateResultEvent.updateResult(result);
  };

  return isVisible ? (
    <div className="container">
      <button className="answer-btn" onClick={() => handleUpdateResult(true)}>
        Yes
      </button>
      <button className="answer-btn" onClick={() => handleUpdateResult(false)}>
        No
      </button>
    </div>
  ) : (
    <div />
  );
};

export default AnswerModal;
