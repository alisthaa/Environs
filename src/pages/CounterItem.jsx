import React, { useState, useEffect } from 'react';

export default function CounterItem({ icon, title, count, symbol }) {
    const [counter, setCounter] = useState(0);
    const end = count;
    const duration = 2000; // Duration in milliseconds

    useEffect(() => {
        let start = 0;
        let startTime;

        const animateCounter = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const increment = Math.ceil((end / duration) * progress);
            setCounter(Math.min(start + increment, end));

            if (progress < duration) {
                requestAnimationFrame(animateCounter);
            } else {
                setCounter(end); // Ensure the counter displays the final value
            }
        };

        requestAnimationFrame(animateCounter);

        return () => cancelAnimationFrame(animateCounter);
    }, [count, end, duration]);

    return (
        <div className='border border-white w-72 h-72'>
            <div className='p-12 mx-auto text-center'>
                <p className='text-white flex justify-center'>{icon}</p>
                <p className='my-6 text-2xl md:text-2xl text-white font-Jost font-semibold'>{title}</p>
                <p className='border-[3px] border-white border-dotted text-3xl font-Roboto py-3 px-2 font-bold text-primary'>
                    {counter} {symbol}
                </p>
            </div>
        </div>
    );
}
