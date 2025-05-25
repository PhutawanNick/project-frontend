import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeStyle.css';

function HomePage() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('security');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="home-container">
      <div className="login-box">
        <h2>Sign in to your account</h2>
        
        <div className="user-type-selector">
          <label>
            <input
              type="radio"
              value="security"
              checked={userType === 'security'}
              onChange={(e) => setUserType(e.target.value)}
            />
            Security
          </label>
          <label>
            <input
              type="radio"
              value="admin"
              checked={userType === 'admin'}
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Enter username" />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            {/* <a href="#">Forgot Password?</a> */}
          </div>

          <button type="submit" className="login-button">
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;