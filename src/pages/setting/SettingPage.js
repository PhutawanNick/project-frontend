import React, { useState } from 'react';
import './Setting.css';
import { IoNotifications, IoCamera, IoLanguage, IoColorPalette } from 'react-icons/io5';

function Setting() {
  const [settings, setSettings] = useState({
    notifications: true,
    cameraQuality: 'high',
    language: 'thai',
    darkMode: false
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your application preferences</p>
      </div>

      <div className="settings-grid">
        <div className="settings-card">
          <div className="settings-icon">
            <IoNotifications />
          </div>
          <h3>Notifications</h3>
          <div className="setting-control">
            <label className="switch">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => handleSettingChange('notifications', e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        <div className="settings-card">
          <div className="settings-icon">
            <IoCamera />
          </div>
          <h3>Camera Quality</h3>
          <div className="setting-control">
            <select
              value={settings.cameraQuality}
              onChange={(e) => handleSettingChange('cameraQuality', e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <div className="settings-card">
          <div className="settings-icon">
            <IoLanguage />
          </div>
          <h3>Language</h3>
          <div className="setting-control">
            <select
              value={settings.language}
              onChange={(e) => handleSettingChange('language', e.target.value)}
            >
              <option value="thai">Thai</option>
              <option value="english">English</option>
            </select>
          </div>
        </div>

        <div className="settings-card">
          <div className="settings-icon">
            <IoColorPalette />
          </div>
          <h3>Dark Mode</h3>
          <div className="setting-control">
            <label className="switch">
              <input
                type="checkbox"
                checked={settings.darkMode}
                onChange={(e) => handleSettingChange('darkMode', e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;