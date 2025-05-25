import React from 'react';
import './LivePage.css';


function LivePage() {
  return (
    <div className="live-container">
      <div className="video-section">
        <div className="live-header">Live Monitor</div>
        <div className="video-container">
          <img
            src="https://thumb.photo-ac.com/9f/9fdb5d142ef667cf9d32735308eb281e_t.jpeg"
            alt="live"
            className="video-frame"
          />
        </div>
      </div>

      <div className="info-section">
        <div className="info-box">
          <h3>Recent Events</h3>
          <div className="events-list">
            {/* Event items will go here */}
          </div>
        </div>

        <div className="info-box">
          <h3>License Plate</h3>
          <div className="plate-info">
            {/* License plate info will go here */}
          </div>
        </div>

        <div className="info-box">
          <h3>Helmet Detected</h3>
          <div className="helmet-info">
            {/* Helmet detection info will go here */}
          </div>
        </div>

        <div className="info-box">
          <h3>No Helmet</h3>
          <div className="no-helmet-info">
            {/* No helmet info will go here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LivePage;