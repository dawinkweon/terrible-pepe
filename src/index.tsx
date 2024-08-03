import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/Popup/App';
import Dialog from './components/Dialog/Dialog';
import AnswerModal from './components/AnswerModal/AnswerModal';

ReactDOM.render(
  <React.StrictMode>
    <App />

    <AnswerModal />
    <Dialog
      profileImg="/images/ic_pepe_snug.png"
      speaker="Pepe"
      saying="Are you there?"
    />
  </React.StrictMode>,
  document.getElementById('root')
);
