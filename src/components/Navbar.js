import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import Swal from 'sweetalert2';
// import logo from '../assets/images/ms-icon-48x48.png';
import logo from '../assets/images/helmet-icons.png';
import './Navbar.css';

/**
 * คอมโพเนนต์แสดงแถบนำทางด้านบน
 * @returns {JSX.Element} แถบนำทางที่มีโลโก้และปุ่ม logout
 */
const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    Swal.fire({
      title: 'Confirm logout',
      text: "Do you want to log out?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          title: 'Log out successfully',
          text: 'You have logged out.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          navigate('/');
        });
      }
    });
  };

  return (
    // ส่วนหัวของเว็บไซต์
    <header className="header">
      {/* ส่วนแสดงโลโก้ด้านซ้าย */}
      <div className="logo">
        {/* <img src={logo} alt="Logo" className="logo-image" /> */}
        <h1>Helmet & Rider Detection System</h1>
      </div>
      
      
      {/* ส่วนขวาที่แสดงชื่อผู้ใช้และปุ่ม logout */}
      <div className="header-right">
        {/* แสดงชื่อผู้ใช้ */}
        <span className="user-name">P</span>
        {/* ปุ่มสำหรับออกจากระบบ */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;