import './App.css';
import { useState, useEffect } from 'react';
import Dashboard from './Pages/Dashboard';
import Header from './Components/Header/Header'; 
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login/login'; 
import { useToken } from './Components/Login/useToken';


function App() {
  const { token, setToken } = useToken();
 
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        {/* Redirect to Dashboard if token exists, otherwise show Login */}
        <Route path="/login" element={!token ? <Login setToken={setToken} /> : <Navigate to="/" />} />
        {/* Redirect to Login if no token, otherwise show Dashboard */}
        <Route path="/" element={token ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
