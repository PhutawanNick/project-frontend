import React from 'react';
import './LivePage.css';

function LivePage() {
  return (
    <div className="live-container">
      <h1>Live Monitoring</h1>
      <div className="video-container">
        <img
          src="http://172.20.10.7:8000/video_feed"
          alt="live"
          className="video-frame"
        />
      </div>
    </div>
  );
}

export default LivePage;