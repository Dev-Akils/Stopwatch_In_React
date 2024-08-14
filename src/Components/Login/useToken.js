import { useState, useEffect } from 'react';

export function useToken() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem('token');
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
    }
  }, []);

  const saveToken = (userToken) => {
    localStorage.setItem('token', userToken);
    setToken(userToken);
  };

  return { token, setToken: saveToken };
}
