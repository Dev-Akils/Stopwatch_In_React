import React,{useState,useEffect} from 'react';
import Lock from '../Pattern/Lock';
import { CgLogIn } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';


function PatternLock() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("user-info")) {
  //     // navigate('/dashboard');
  //   }
  // }, []);
async function login()
{
  console.warn(email,password)
  let item={email,password}
  let result = await fetch("http://103.181.21.93:8099/api/v1/admin/login", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(item)
  });

  result = await result.json();
  console.log(result);

  // If authentication is successful
//   if (result.success) { // Replace `result.success` with the actual condition for a successful login
//     localStorage.setItem("user-info", JSON.stringify(result));
//     navigate('/dashboard'); // Replace '/dashboard' with your desired route
//   } else {
//     // Handle login failure
//     console.error("Login failed");
//   }
 }

  return (
   <>
  <div className='justify-center items-center flex min-h-screen'>
      <div className=' bg-blue-900 shadow-lg shadow-slate-500 justify-center items-center flex rounded-xl p-6'>
        <div className='flex-col'>
          <div className='gap-5 flex-col mb-3'>
            <input
              type="text"
              placeholder='Enter name'
              className='py-3 mb-2 px-4 rounded-lg border w-full border-gray-300' onChange={(e)=>setEmail(e.target.value)}
            /><br />
            <input
              type="password"
              placeholder='Password'
              className='py-3 px-4 rounded-lg w-full border mb-2 border-gray-300' onChange={(e)=>setPassword(e.target.value)}
            /><br />
          </div>
          {/* <div className=' bg-blue-400 justify-center items-center flex'> */}
          <div className='justify-items-center py-3 px-4 rounded-lg w-full  bg-blue-500'>
            <Lock /> 
          </div>
          <div className='justify-center items-center flex mt-5'>
          <button onClick={login} className='p-3 rounded-2xl bg-white'>Submit</button></div>
        </div>
      </div>
    </div></>
  );
};
  

export default PatternLock;