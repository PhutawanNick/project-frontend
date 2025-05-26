import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import Swal from 'sweetalert2';
import './HomeStyle.css';
import defaultAvatar from '../../assets/images/chisanucha.png'; // สร้างไฟล์ default avatar
import { FaUser, FaLock } from 'react-icons/fa';

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
    <div className="home-container">
      <div className="login-box">
        <img src={defaultAvatar} alt="User Avatar" className="user-avatar" />
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <FaUser className="form-icon" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Username"
              required
            />
          </div>
          
          <div className="form-group">
            <FaLock className="form-icon" />
            <input 
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        {/* <a href="#" className="forgot-password">
          Forgot Username / Password?
        </a> */}
      </div>
    </div>
  );
}

export default HomePage;