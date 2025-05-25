import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/ms-icon-48x48.png'; // นำเข้าโลโก้จาก assets
import './Navbar.css';

/**
 * คอมโพเนนต์แสดงแถบนำทางด้านบน
 * @returns {JSX.Element} แถบนำทางที่มีโลโก้และปุ่ม logout
 */
const Navbar = () => {
  return (
    // ส่วนหัวของเว็บไซต์
    <header className="header">
      {/* ส่วนแสดงโลโก้ด้านซ้าย */}
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <h1>Helmet & Rider Detection System</h1>
      </div>
      
      
      {/* ส่วนขวาที่แสดงชื่อผู้ใช้และปุ่ม logout */}
      <div className="header-right">
        {/* แสดงชื่อผู้ใช้ */}
        <span className="user-name">P</span>
        {/* ปุ่มสำหรับออกจากระบบ */}
        <button className="logout-btn">Logout</button>
      </div>
    </header>
  );
};

export default Navbar;