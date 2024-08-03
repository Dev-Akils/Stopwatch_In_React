
import './App.css';
import Dashboard from './Pages/Dashboard';
import Header from '../src/Components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Patternlock from '../src/Components/Pattern/Patternlock';
// import UnifiedMenu from '../src/Components/Unified';

import Login from '../src/Components/Login/login';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Dashboard/>}/>
        {/* Add other routes here */}
      </Routes>
    </Router>
    );
}

export default App;
