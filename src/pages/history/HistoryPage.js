import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './History.css';

function History() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [historyData, setHistoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!startDate || !endDate) {
      alert('Please select date and time range');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('https://allowing-secretly-mantis.ngrok-free.app/history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString()
        })
      });

      const data = await response.json();
      setHistoryData(data);
    } catch (error) {
      console.error('Error fetching history:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="history-container">
      <div className="history-header">
        <h1>Detection History</h1>
        <div className="date-picker-container">
          <div className="date-time-picker">
            <label>Start Date & Time:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setDateRange([date, endDate])}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="dd/MM/yyyy HH:mm"
              placeholderText="Select start date and time"
              className="date-picker"
              isClearable
            />
          </div>
          <div className="date-time-picker">
            <label>End Date & Time:</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setDateRange([startDate, date])}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="dd/MM/yyyy HH:mm"
              placeholderText="Select end date and time"
              className="date-picker"
              isClearable
              minDate={startDate}
            />
          </div>
          <button 
            className="search-button"
            onClick={handleSearch}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Search'}
          </button>
        </div>
      </div>

      <div className="history-grid">
        {historyData.map((item, index) => (
          <div key={index} className="history-card">
            <img src={item.imageUrl} alt={`Detection ${index}`} />
            <div className="card-info">
              <p className="timestamp">{new Date(item.timestamp).toLocaleString()}</p>
              <p className="plate-number">{item.plateNumber}</p>
              <p className={`status ${item.hasHelmet ? 'success' : 'violation'}`}>
                {item.hasHelmet ? 'Helmet Detected' : 'No Helmet'}
              </p>
            </div>
          </div>
        ))}
      </div>

      {isLoading && (
        <div className="loading-overlay">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
}

export default History;