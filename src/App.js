
import './App.css';
import {useState} from 'react';
import Dashboard from './Pages/Dashboard';
import Header from '../src/Components/Header/Header';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';


import Login from '../src/Components/Login/login';
import { useEffect } from 'react';


function App() {
const [token,setToken]=useState(localStorage.getItem('token')|| null);
useEffect(()=>{
  const tokenFromStorage=localStorage.getItem('token');
  if(tokenFromStorage){
    setToken(tokenFromStorage);
  }
},[]);

  return (
    <Router>
      <Header />
      <Routes>
         {/* <Route path="/login" element={!token ?<Login setToken={setToken} />:<Navigate to="/"/>} />
        <Route path='/' element={!token ?<Dashboard/>:<Navigate to="/"/>}/>  */}
         <Route path="/login" element={<Login setToken={setToken}/>}/>
        <Route path='/' element={<Dashboard/>}/> 
       


{/* <Route 
          path="/login" 
          element={!token ? <Navigate to="/" /> : <Login setToken={setToken} />} 
        />
        <Route 
          path="/" 
          element={token ? <Navigate to="/login" /> : <Dashboard />} 
        /> */}

       
      </Routes>
    </Router>
    );
}

export default App;
