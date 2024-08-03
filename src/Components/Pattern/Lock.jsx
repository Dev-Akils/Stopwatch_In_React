import React, { Component,useState } from "react";
import PatternLock from "react-pattern-lock";

function Lock(){
    const [pattern, setPattern] = useState([]);
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
    );
}
export default Lock;
