import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function AuthCallback() {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const state = urlParams.get('state');

      if (code) {
        try {
          // Une fois l'application approuvée, nous implémenterons 
          // l'échange du code contre un token ici
          console.log('Auth code received:', code);
          
          // Rediriger vers le dashboard après connexion réussie
          navigate('/dashboard');
        } catch (error) {
          console.error('Authentication error:', error);
          navigate('/');
        }
      } else {
        navigate('/');
      }
    };

    handleCallback();
  }, [navigate, login]);

  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Connecting to TikTok...</h2>
        <p className="text-gray-600">Please wait while we complete your authentication.</p>
      </div>
    </div>
  );
}

export default AuthCallback;