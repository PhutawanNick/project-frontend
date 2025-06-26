import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import Swal from 'sweetalert2';
import './HomeStyle.css';

function HomePage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const mockUsers = {
    admin: { username: 'admin', password: 'admin123', role: 'admin' },
    office: { username: 'office', password: 'office123', role: 'office' }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const matchedUser = Object.values(mockUsers).find(
      user => user.username === formData.username && user.password === formData.password
    );
    if (matchedUser) {
      login({ username: formData.username, role: matchedUser.role });
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
    <div className="container" id="container">
      <div className="form-container admin">
        <form onSubmit={handleSubmit}>
          <h1>Admin</h1>
          <span>Please enter Username and Password for Admin</span>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
      <div className="form-container office">
        <form onSubmit={handleSubmit}>
          <h1>Office</h1>
          <span>Please enter Username and Password for Office</span>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Admin</h1>
            <p>Enter your details to Admin</p>
            <button className="hidden" id="login">Welcome</button>
          </div>
        </div>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-right">
            <h1>Welcome Office</h1>
            <p>Enter your details to Office</p>
            <button className="hidden" id="register">Welcome</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;