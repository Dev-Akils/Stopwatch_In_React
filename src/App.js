
import './App.css';
import Dashboard from './Pages/Dashboard';
import Header from '../src/Components/Navbar/Header';
import { BrowserRouter as Router,Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
    {/* <Header /> */}
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Dashboard />} />
        
      </Routes>
      </BrowserRouter>
      {/* <Dashboard/> */}
    </>
);
}

export default App;
