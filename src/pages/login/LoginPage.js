import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const [userType, setUserType] = React.useState('user'); // เพิ่ม state สำหรับเก็บประเภทผู้ใช้

  const handleSubmit = (e) => {
    e.preventDefault();
    // ตรวจสอบประเภทผู้ใช้และนำทางไปหน้าที่เหมาะสม
    
    navigate(userType === 'admin' ? '/admin' : '/home');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Sign in to your account</h1>
        <br />
        {/* เพิ่มส่วนเลือกประเภทผู้ใช้ */}
        <div className="user-type-selector">
          <div className="radio-group">
            <input
              type="radio"
              id="security"
              name="securityType"
              value="security"
              checked={userType === 'security'}
              onChange={(e) => setUserType(e.target.value)}
            />
            <label htmlFor="security">Security</label>

            <input
              type="radio"
              id="admin"
              name="userType"
              value="admin"
              checked={userType === 'admin'}
              onChange={(e) => setUserType(e.target.value)}
            />
            <label htmlFor="admin">Admin</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <br />
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-options">
          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>
        </div>
        <br />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;