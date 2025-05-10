import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/login/LoginPage';
import HomePage from './pages/home/HomePage';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  const ShowNavbarAndHeader = () => {
    const location = useLocation();
    return location.pathname !== '/' && location.pathname !== '/login' ?(
    <>
      <Navbar /> 
      <Sidebar />
    </>
    ) : null;
  }

  return (
    <Router>
      <div className="App">
        <ShowNavbarAndHeader />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;