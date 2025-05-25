import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import Swal from 'sweetalert2';
import './HomeStyle.css';

function HomePage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // Mock users for testing
  const mockUsers = {
    admin: { username: 'admin', password: 'admin123', role: 'admin' },
    office: { username: 'office', password: 'office123', role: 'office' }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check credentials against both user types
    const matchedUser = Object.values(mockUsers).find(
      user => user.username === formData.username && user.password === formData.password
    );

    if (matchedUser) {
      // Login success
      login({
        username: formData.username,
        role: matchedUser.role
      });

      Swal.fire({
        icon: 'success',
        title: 'Login successful',
        text: `Welcome ${formData.username}`,
        timer: 1500,
        showConfirmButton: false
      }).then(() => {
        navigate('/dashboard');
      });
    } else {
      // Login failed
      Swal.fire({
        icon: 'error',
        title: 'Login failed',
        text: 'Invalid username or password'
      });
    }
  };

  return (
    <div className="home-container">
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter username"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              required
            />
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>

          <button type="submit" className="login-button">
            เข้าสู่ระบบ
          </button>
        </form>

        <div className="login-note">
          <p>Test Credentials:</p>
          <p>Admin - username: admin, password: admin123</p>
          <p>Office - username: office, password: office123</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;