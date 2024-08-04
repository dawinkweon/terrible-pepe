import React from 'react';
import './AnswerModal.css';
import { UpdateResultEvent } from '../UpdateResultEvent';
// interface AnswerModalProps {
//   onAnswer: (answer: string) => void;
// }
interface AnswerModalProps {
  updateResultEvent: UpdateResultEvent
}

const AnswerModal : React.FC<AnswerModalProps> = ({updateResultEvent}) => {

  const handleUpdateResult = (result: Boolean) => {
    updateResultEvent.updateResult(result)
  }
  
  return (
    <div className="container">
      <button className="answer-btn" onClick={() => handleUpdateResult(true)}>Yes</button>
      <button className="answer-btn" onClick={() => handleUpdateResult(false)}>No</button>
    </div>
  );
};

export default AnswerModal;
