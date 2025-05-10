import React from 'react';
import './DashBoard.css';

function DashBoard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <div className="date-picker">
          <input type="date" />
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Detections</h3>
          <div className="stat-number">1,234</div>
        </div>
        <div className="stat-card">
          <h3>Helmet Usage</h3>
          <div className="stat-number">85%</div>
        </div>
        <div className="stat-card">
          <h3>Violations</h3>
          <div className="stat-number">156</div>
        </div>
        <div className="stat-card">
          <h3>Active Cameras</h3>
          <div className="stat-number">8</div>
        </div>
      </div>

      <div className="charts-container">
        <div className="chart-box">
          <h2>Detection Trends</h2>
          <div className="chart-placeholder">
            [Graph Area]
          </div>
        </div>
        <div className="chart-box">
          <h2>Violation Types</h2>
          <div className="chart-placeholder">
            [Pie Chart Area]
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Recent Detections</h2>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Location</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>09:45 AM</td>
              <td>Camera #1</td>
              <td>No Helmet</td>
              <td>Violation</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashBoard;