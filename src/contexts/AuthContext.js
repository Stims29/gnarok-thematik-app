import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    try {
      // URL d'authentification TikTok (à configurer une fois l'app approuvée)
      const authUrl = `https://www.tiktok.com/auth/authorize/` +
        `?client_key=${process.env.REACT_APP_TIKTOK_CLIENT_ID}` +
        `&scope=user.info.basic,video.list` +
        `&response_type=code` +
        `&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}` +
        `&state=test`;
      
      window.location.href = authUrl;
    } catch (error) {
      console.error('Authentication error:', error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}