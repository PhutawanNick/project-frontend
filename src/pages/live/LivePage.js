import React, { useState } from 'react';
import './LivePage.css';
import logo from '../../assets/images/2กม กรงเทพฯ 8027.jpg'; // นำเข้าโลโก้จาก assets


function LivePage() {
  const [plateData]=useState({
    plate:""
  });

  return (
    <div className="live-container">
      <section className="video-section">
        <h2 className="live-header">Live Monitor</h2>
        <div className="video-container">
          <img
            src="http://localhost:8000/video_feed"
            alt="Live Stream"
            className="video-frame"
          />
        </div>
      </section>

      <section className="info-section">
        <div className="info-box">
          <h3>License Plate picture</h3>
          <img src={logo} alt="Logo" className="logo-images" />
          <div className="events-list">
            {/* Event items will go here */}
          </div>
        </div>

        <div className="info-box">
          <h3>License Plate Character</h3>
          <div className="plate-info">
            {plateData.plate || "No plate detected"}
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
