import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LivePage from './pages/live/LivePage';
import DashBoard from './pages/dashboard/DashBoardPage';
import History from './pages/history/HistoryPage';
import Settings from './pages/setting/SettingPage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/LivePage" element={<LivePage />} />
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/History" element={<History />} />
          <Route path="/Setting" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;