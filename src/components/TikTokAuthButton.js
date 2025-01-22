import React from 'react';
import { useAuth } from '../contexts/AuthContext';

function TikTokAuthButton({ className }) {
  const { login, loading } = useAuth();

  return (
    <button
      onClick={login}
      disabled={loading}
      className={`flex items-center justify-center space-x-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-opacity-90 transition-colors ${className}`}
    >
      {/* TikTok Icon */}
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 013.183-4.51v-3.5a6.329 6.329 0 00-5.394 10.692 6.33 6.33 0 1010.857-4.424V8.687a8.182 8.182 0 004.773 1.526V6.79a4.831 4.831 0 01-1.003-.104z"/>
      </svg>
      <span>
        {loading ? 'Connecting...' : 'Connect with TikTok'}
      </span>
    </button>
  );
}

export default TikTokAuthButton;