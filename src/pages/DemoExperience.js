import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDemo } from '../contexts/DemoContext';
import Dashboard from './Dashboard';
import Analysis from './Analysis';

function DemoHome() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              You are viewing demo data. No TikTok authentication required.
            </p>
          </div>
        </div>
      </div>
      
      <h1 className="text-3xl font-bold mb-8">GnarokThematik Demo Experience</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => navigate('dashboard')}
          className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Demo Dashboard</h2>
          <p className="text-gray-600">
            Explore sample analytics and performance metrics
          </p>
        </button>
        
        <button
          onClick={() => navigate('analysis')}
          className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Demo Analysis</h2>
          <p className="text-gray-600">
            See example content analysis and recommendations
          </p>
        </button>
      </div>
    </div>
  );
}

function DemoExperience() {
  const { setIsDemo } = useDemo();

  useEffect(() => {
    setIsDemo(true);
    return () => setIsDemo(false);
  }, [setIsDemo]);

  return (
    <Routes>
      <Route path="/" element={<DemoHome />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/analysis" element={<Analysis />} />
    </Routes>
  );
}

export default DemoExperience;