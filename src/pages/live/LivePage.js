import React, { useState, useEffect } from 'react';
import './LivePage.css';
import fallbackImage from '../../assets/images/2กม กรงเทพฯ 8027.jpg';

function LivePage() {
  const [plateData]=useState({
    plate:""
  const [plateData, setPlateData] = useState({
    plate: '',
    image: '',
    timestamp: ''

  });

  useEffect(() => {
    const fetchPlateData = async () => {
      try {
        const response = await fetch('http://localhost:8001/plate');
        const data = await response.json();
        setPlateData({
          plate: data.plate || '',
          image: data.image || '',
          timestamp: data.timestamp || ''
        });
      } catch (error) {
        console.error('Error fetching plate data:', error);
        setPlateData({ plate: '', image: '' });
      }
    };

    fetchPlateData();
    const intervalId = setInterval(fetchPlateData, 2000);
    return () => clearInterval(intervalId);
  }, []);

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
          <h3>License Plate Picture</h3>
          <img
             src={plateData.image ? `data:image/jpeg;base64,${plateData.image}` : fallbackImage}
              alt="License Plate"
              className="logo-images"
              id="plate-img"
          />
        </div>

        <div className="info-box">
          <h3>License Plate Character</h3>
          <div className="plate-info">
            {plateData.plate || 'No plate detected'}
          </div>
          <div className="timestamp-info">
            {plateData.timestamp || 'No timestamp available'}
          </div>
        </div>

        <div className="info-box">
          <h3>Helmet Detected</h3>
          <div className="helmet-info">
            {/* Insert helmet detection data here */}
          </div>
        </div>

        <div className="info-box">
          <h3>No Helmet</h3>
          <div className="no-helmet-info">
            {/* Insert no-helmet detection data here */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LivePage;
