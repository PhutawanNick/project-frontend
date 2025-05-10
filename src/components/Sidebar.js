import React from 'react';
import { Link } from 'react-router-dom';
import {MdLiveTv} from 'react-icons/md';
import { RiDashboardLine } from 'react-icons/ri';
import { FaHistory } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import './Sidebar.css';

/**
 * คอมโพเนนต์แสดงแถบเมนูด้านข้าง
 * @returns {JSX.Element} แถบเมนูที่มีโลโก้และลิงก์นำทาง
 */
function Sidebar() {
  return (
    // ส่วนแถบเมนูด้านข้าง
    <aside className="sidebar">
      {/* ส่วนแสดงโลโก้ด้านบนของเมนู */}
      <div className="side-brand">
      </div>
      {/* รายการเมนูสำหรับนำทาง */}
      <ul className="side-links">
        {/* ลิงก์ไปยังหน้าต่างๆ */}
          <li>
            <Link to="/LivePage">
            <MdLiveTv className="nav-icon"/>
            <span>LivePage</span>
          </Link>
        </li>
        <li>
          <Link to="/DashBoard">
          <RiDashboardLine className="nav-icon"/>
          <span>DashBoard</span>
          </Link>
        </li>
        <li>
          <Link to="/History">
          <FaHistory className="nav-icon"/>
          <span>History</span>
          </Link>
        </li>
        <li><Link to="/Setting">
        <IoSettingsOutline className="nav-icon"/>
        <span>Setting</span>
        </Link>
       </li>
      </ul>
    </aside>
  );
}

export default Sidebar;