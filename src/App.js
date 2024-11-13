import './App.css';

// import Dashboard from './Pages/Dashboard';
// import Header from './Components/Header/Header'; 
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Login from './Components/Login/login'; 
// import { useToken } from './Components/Login/useToken';
// import ChartData from './Api/ChartData';
//  import DashboardKyc from '../src/Pages/DashboardKyc';

import  StopWatch from './Components1'


function App() {
  // const { token, setToken } = useToken();
 
  return (
    // <Router>
     
    //   <Routes>
      
    //     <Route path="/login" element={!token ? <Login setToken={setToken} /> : <Navigate to="/" />} />
       
    //     <Route path="/" element={token ? <Dashboard /> : <Navigate to="/login" />} />
    //     <Route path="/kyc" element={<DashboardKyc/>}/>
        
        

    //   </Routes>
    // </Router>
   < StopWatch/>
  );
}

export default App;
