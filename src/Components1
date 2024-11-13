import React, { useEffect, useRef, useState } from 'react'
//stopwatch in react
function StopWatch() {
  const [time,setTime]=useState(0);
  const [isActive,setIsActive]=useState(false);
  const timeRef=useRef(null);

  const handleStart=()=>{
    if(!isActive){
      setIsActive(true);
      timeRef.current=setInterval(()=>{setTime(prev=>prev+1)},1000);
    }
  }

const handleStop=()=>{
  setIsActive(false);
  clearInterval(timeRef.current);
}

const handleRestart=()=>{
  setIsActive(false);
  clearInterval(timeRef.current);
  setTime(0);
}


 const format=()=>{
  const hours=Math.floor(time/3600);
  const minutes=Math.floor((time%3600)/60);
  const seconds=time%60;
  return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
 }
  return (<>
    <div className="w-screen h-screen bg-dusty_rose flex justify-center items-center p-0 m-0">
    <div className="w-full m-5 max-w-md p-5 bg-pale_cream rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="font-bold text-xl md:text-2xl my-4 text-center">StopWatch</h2>
        
     
        <div className="flex gap-3 md:gap-5 mb-4">
            <p className="p-2 rounded-md text-dusty_rose font-bold bg-light_overy">{format()}</p>
            {/* <p className="p-2 rounded-md text-dusty_rose font-bold bg-light_overy">Spanish</p>
            <p className="p-2 rounded-md text-dusty_rose font-bold bg-light_overy">German</p> */}
        </div>
        <div className='gap-3 flex justify-center items-center'>
          <button disabled={isActive} onClick={handleStart} className='bg-coral_orange px-2 py-1 text-white font-bold rounded '>Start</button>
          <button disabled={!isActive} onClick={handleStop} className='bg-coral_orange px-2 py-1 text-white font-bold rounded '>Stop</button>
          <button onClick={handleRestart} className='bg-coral_orange px-2 py-1 text-white font-bold rounded '>Reset</button>
        </div>
        </div>
        </div>
        </>
  )

}

export default StopWatch
