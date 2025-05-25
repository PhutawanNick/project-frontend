// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import LivePage from './pages/live/LivePage';
import DashBoard from './pages/dashboard/DashBoardPage';
import History from './pages/history/HistoryPage';
import Settings from './pages/setting/SettingPage';
import HomePage from './pages/home/HomePage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <Sidebar />
                <main className="main-content">
                  <Routes>
                    <Route path="/dashboard" element={<DashBoard />} />
                    <Route path="/livepage" element={<LivePage />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/setting" element={<Settings />} />
                  </Routes>
                  <Footer />
                </main>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
