import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedPage = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      setMessage('Bienvenue sur la page protégée !');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Protected Page</h1>
        <p className="text-gray-700">{message}</p>
      </div>
    </div>
  );
};

export default ProtectedPage;
