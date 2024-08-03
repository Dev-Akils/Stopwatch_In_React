import React, { useState ,useEffect} from 'react';
import users from './mockUsers';
import Lock from '../Pattern/Lock'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [pattern, setPattern] = useState('');
  const [message, setMessage] = useState('');

useEffect(()=>{
    if(message){
        const timer=setTimeout(()=>{
            setMessage('')
        },1500);
        return ()=> clearTimeout(timer);
    }
},[message])

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(u => u.username === username);
    if (!user) {
      setMessage('User not found');
      return;
    }

    if (user.password !== password) {
      setMessage('Invalid password');
      return;
    }

    if (user.pattern !== pattern) {
      setMessage('Invalid pattern');
      return;
    }
// ___________________________________________
    // Simulate token generation
    const token = 'mock-jwt-token';
    localStorage.setItem('token', token);
    setMessage('Login successful!');
  };
  const [isDrawing, setIsDrawing] = useState(false);
  const correctPattern = [0, 1, 2, 5, 8]; // Example correct pattern

  const handleMouseDown = (index) => {
    setIsDrawing(true);
    setPattern([index]);
  };

  const handleMouseOver = (index) => {
    if (isDrawing && !pattern.includes(index)) {
      setPattern([...pattern, index]);
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    if (JSON.stringify(pattern) === JSON.stringify(correctPattern)) {
      alert('Pattern is correct!');
    } else {
      alert('Incorrect pattern. Try again!');
    }
    setPattern([]);
  };
  return (
   
    <div  className='flex justify-center items-center mt-10 '>
    
      <form onSubmit={handleLogin} className='bg-blue-900  justify-center items-center flex-col p-3'>
        <div className='justify-center items-center'>
          {/* <label>Username</label> */}
          <h2 className='text-white text-2xl font-bold p-3'>Login</h2>
          <input  
              placeholder='Enter email'
              className='py-3 mb-2 px-4 rounded-lg border w-full border-gray-300'  type="email" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          {/* <label>Password</label> */}
          <input 
              placeholder='Enter password'
              className='py-3 mb-2 px-4 rounded-lg border w-full border-gray-300'  type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className='justify-center items-center flex bg-blue-100'>
          {/* <label>Pattern</label> */}
          {/* <input  type="text"
              placeholder='Enter name'
              className='py-3 mb-2 px-4 rounded-lg border w-full border-gray-300'  value={pattern} onChange={(e) => setPattern(e.target.value)} required /> */}
              {/* <Lock/> */}
              <div className="justify-center items-center flex container">
      <div className="pattern-lock ">
        {[...Array(9)].map((_, index) => (
          <div 
            key={index}
            className={`point ${pattern.includes(index) ? 'active' : ''} `}
            onMouseDown={() => handleMouseDown(index)}
            onMouseOver={() => handleMouseOver(index)}
            onMouseUp={handleMouseUp}
          />
        ))}
      </div></div>
        </div>
        <div className='items-center justify-center flex'>
        <button type="submit" className='p-3 m-2 bg-[#fff] rounded-2xl text-center'>Login</button></div>
        {message && <p className=' w-1/4  text-center'>{message}</p>}
      </form>
    
    </div>
   
  );
};

export default Login;
