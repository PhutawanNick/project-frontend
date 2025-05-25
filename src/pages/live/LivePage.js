import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LivePage.css';

function LivePage() {
  const [plateData, setPlateData] = useState({
    plate: "",
    plateImage: "",
    hasHelmet: false,
    timestamp: null
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlateData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8001/plate');
        setPlateData(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching plate data:', err);
        setError('Failed to load plate data');
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchPlateData();

    // Set up polling interval
    const interval = setInterval(fetchPlateData, 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-container">
      <div className="video-section">
        <div className="live-header">Live Monitor</div>
        <div className="video-container">
          <img
            src="https://allowing-secretly-mantis.ngrok-free.app/video_feed"
            alt="live"
            className="video-frame"
          />
        </div>
      </div>

      <div className="info-section">
        <div className="info-box">
          <h3>License Plate Picture</h3>
          {loading ? (
            <div className="loading">Loading...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            <img 
              src={
                plateData.plateImage
                  ? plateData.plateImage.startsWith('http')
                    ? plateData.plateImage
                    : `data:image/jpeg;base64,${plateData.plateImage}`
                  : ""
              }
              alt="License plate"
              className="plate-image"
            />
          )}
        </div>

        <div className="info-box">
          <h3>License Plate Character</h3>
          <div className="plate-info">
            {loading ? (
              <div className="loading">Loading...</div>
            ) : error ? (
              <div className="error">{error}</div>
            ) : (
              <div className="plate-data">{plateData.plate || "No plate detected"}</div>
            )}
          </div>
        </div>

        <div className="info-box">
          <h3>Detection Status</h3>
          {loading ? (
            <div className="loading">Loading...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            <>
              <div className={`status ${plateData.hasHelmet ? 'success' : 'warning'}`}>
                {plateData.hasHelmet ? 'Helmet Detected' : 'No Helmet Detected'}
              </div>
              {plateData.timestamp && (
                <div className="timestamp">
                  {new Date(plateData.timestamp).toLocaleString()}
                </div>
              )}
            </>
          )}
        </div>
        
      </div>
    </div>
  );
}

export default LivePage;