import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Popup = () => {
  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
  };

  const handleClick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'replaceImages', imageUrl });
      }
    });
  };

  return (
    <div>
      <h1>Replace Images</h1>
      <input type="text" value={imageUrl} onChange={handleChange} placeholder="Enter image URL" />
      <button onClick={handleClick}>Replace Images</button>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Popup />, rootElement);