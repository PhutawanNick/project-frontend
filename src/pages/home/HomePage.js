import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import Swal from 'sweetalert2';
import './HomeStyle.css';
// import { FaUser, FaLock } from 'react-icons/fa';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const matchedUser = Object.values(mockUsers).find(
      user => user.username === formData.username && user.password === formData.password
    );

    if (matchedUser) {
      login({
        username: formData.username,
        role: matchedUser.role
      });

      await Swal.fire({
        icon: 'success',
        title: 'Login successful',
        timer: 1500,
        showConfirmButton: false
      });
      
      navigate('/dashboard');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login failed',
        text: 'Username or password is incorrect'
      });
    }
  };

  return (
    <body>
      <div class="container"id="container">
        <div class="form-container admin">
          <form onSubmit={handleSubmit}>
            <h1>Admin</h1>
            <span>Plase Form Username and password for Admin</span>
            <input name="username" type="text" placeholder='UserName'value={formData.username}onChange={handleInputChange}required></input>
            <input name="password" type="password" placeholder='Password'value={formData.password}onChange={handleInputChange}required></input>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
        <div class="form-container office">
          <form onSubmit={handleSubmit}>
            <h1>Office</h1>
            <span>Plase Form Username and password for Office</span>
            <input name="username" type="text" placeholder='UserName'value={formData.username}onChange={handleInputChange}required></input>
            <input name="password" type="password" placeholder='Password'value={formData.password}onChange={handleInputChange}required></input>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
        <div class="toggle-container">
          <div class="toggle">
            <div class="toggle-panel toggle-left">
              <h1>Welcome Admin</h1>
              <p>Enter your details to Admin</p>
              <button class="hidden" id="login">Welcome
              </button>
            </div>
          </div>
        </div>
        <div class="toggle-container">
          <div class="toggle">
            <div class="toggle-panel toggle-right">
              <h1>Welcome Office</h1>
              <p>Enter your details to Office</p>
              <button class="hidden" id="register">Welcome
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default HomePage;