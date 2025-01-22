import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/logo192.png"
                alt="GnarokThematik"
                className="h-10 w-10"
              />
              <span className="text-xl font-bold">GnarokThematik</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-gray-700">
              Home
            </Link>
            {user ? (
              <>
                <Link to="/dashboard" className="px-3 py-2 rounded-md hover:bg-gray-700">
                  Dashboard
                </Link>
                <Link to="/analysis" className="px-3 py-2 rounded-md hover:bg-gray-700">
                  Analysis
                </Link>
                <button
                  onClick={logout}
                  className="px-3 py-2 rounded-md hover:bg-gray-700 text-gray-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/demo" className="px-3 py-2 rounded-md hover:bg-gray-700 bg-primary">
                Demo
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;