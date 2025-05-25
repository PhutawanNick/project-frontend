// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/login/LoginPage';
import LivePage from './pages/live/LivePage';
import DashBoard from './pages/dashboard/DashBoardPage';
import History from './pages/history/HistoryPage';
import Settings from './pages/setting/SettingPage';
import HomePage from './pages/home/HomePage';
import Management from './pages/management/Management';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
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
                      <Route
                        path="/dashboard"
                        element={
                          <ProtectedRoute allowedRoles={['admin', 'office']}>
                            <DashBoard />
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path="/management"
                        element={
                          <ProtectedRoute allowedRoles={['admin']}>
                            <Management />
                          </ProtectedRoute>
                        }
                      />
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
    </AuthProvider>
  );
}

export default App;
