// pages/AuthPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle authentication here (e.g., check credentials)
    // On success, redirect to ChatPage
    navigate('/chat');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 border rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Login</h2>
        <input
          type="text"
          className="p-2 border mb-4"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
