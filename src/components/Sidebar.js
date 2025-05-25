import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdLiveTv } from 'react-icons/md';
import { RiDashboardLine } from 'react-icons/ri';
import { FaHistory } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import './Sidebar.css';

/**
 * คอมโพเนนต์แสดงแถบเมนูด้านข้าง
 * @returns {JSX.Element} แถบเมนูที่มีโลโก้และลิงก์นำทาง
 */
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`floating-menu ${isOpen ? 'open' : ''}`}>
      <button className="menu-button"title="Menu" onClick={toggleMenu}>
        <span className="menu-icon">☰</span>
      </button>
      
      <nav className="menu-items">
        <Link to="/LivePage" className="menu-item"title="Live Monitor">
          <MdLiveTv className="nav-icon"/>
        </Link>
        <Link to="/DashBoard" className="menu-item"title="DashBoard">
          <RiDashboardLine className="nav-icon"/>
        </Link>
        <Link to="/History" className="menu-item"title="History">
          <FaHistory className="nav-icon"/>
        </Link>
        <Link to="/Setting" className="menu-item"title="Settings">
          <IoSettingsOutline className="nav-icon"/>
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;