import React from 'react';
import './LivePage.css';

function LivePage() {
  return (
    <div className="live-container">
      <div className="video-container">
        <h1>Live Monitoring</h1>
        <img
          src="https://thumb.photo-ac.com/9f/9fdb5d142ef667cf9d32735308eb281e_t.jpeg"
          alt="live"
          className="video-frame"
        />
      </div>
      <div className="detection-container">
        <div className="detection-box">
          <h3>No Helmet Detected</h3>
          <div className="detection-count">5</div>
        </div>
        <div className="detection-box">
          <h3>License Plate</h3>
          <div className="plate-number">กข 1234</div>
        </div>
        <div className="detection-box">
          <h3>Detection Status</h3>
          <div className="status-indicator active">Active</div>
        </div>
        <div className="detection-box">
          <h3>Recent Events</h3>
          <ul className="events-list">
            <li>Violation Detected - 12:45</li>
            <li>Helmet Detected - 12:43</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LivePage;