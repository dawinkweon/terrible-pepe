import React from 'react';
import { FaCog } from 'react-icons/fa';

type SettingProps = {
  isSettingOpen: boolean;
  setIsSettingOpen: (isOpen: boolean) => void;
};

const Setting: React.FC<SettingProps> = ({
  isSettingOpen,
  setIsSettingOpen,
}) => {
  return (
    <button
      className="setting-btn"
      onClick={() => setIsSettingOpen(!isSettingOpen)}
    >
      <FaCog className="setting-icon" />
      {isSettingOpen && (
        <div className="setting-dropdown">
          <ul className="setting-menu">
            <li className="setting-item">
              <button className="setting-item-btn">Block List</button>
            </li>
            <li className="setting-item">
              <button className="setting-item-btn">Donation Link</button>
            </li>
          </ul>
        </div>
      )}
    </button>
  );
};

export default Setting;
