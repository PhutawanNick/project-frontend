import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeStyle.css';

function HomePage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };
}
export default HomePage;