import React, { useState, useEffect } from 'react';

export default function ProgressBar({ percentage }) {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setBarWidth(percentage);
    }, 100); // Add a delay for the animation to start
  }, [percentage]);

  return (
    <div className='relative h-3 bg-gray-300 overflow-hidden'>
      <div
        className='absolute top-0 left-0 h-full bg-primary transition-all duration-2000 ease-in-out'
        style={{
          width: `${barWidth}%`,
          transition: 'width 2s ease-in-out', // Smoothly transition the width change
          backgroundColor: 'primary', // Change background color to orange
        }}
       
      >
        <div className='absolute  top-1/2 right-0 transform -translate-y-1/2 px-1 py-5 text-xs text-white bg-[#333] shadow-sm shadow-black'>
            {barWidth}%
        </div>
      </div>
    </div>
  );
}
