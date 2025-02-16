import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { DemoProvider } from './contexts/DemoContext';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Analysis from './pages/Analysis';
import Demo from './pages/Demo';  // La page d'information sur la démo
import DemoExperience from './pages/DemoExperience';  // L'expérience démo interactive
import AuthCallback from './pages/AuthCallback';

function App() {
  return (
    <AuthProvider>
      <DemoProvider>
        <Router>
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/try-demo/*" element={<DemoExperience />} />
                <Route 
                  path="/dashboard" 
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  } 
                />
                <Route 
                  path="/analysis" 
                  element={
                    <PrivateRoute>
                      <Analysis />
                    </PrivateRoute>
                  } 
                />
                <Route path="/auth/callback" element={<AuthCallback />} />
              </Routes>
            </main>
          </div>
        </Router>
      </DemoProvider>
    </AuthProvider>
  );
}

export default App;