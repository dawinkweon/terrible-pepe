import React from 'react';
import './AnswerModal.css';

// interface AnswerModalProps {
//   onAnswer: (answer: string) => void;
// }

const AnswerModal = () => {
  return (
    <div className="container">
      <button className="answer-btn" onClick={()=> localStorage.setItem("answer", 'yes')}>Yes</button>
      <button className="answer-btn" onClick={()=> localStorage.setItem("answer", 'no')}>No</button>
    </div>
  );
};

export default AnswerModal;
