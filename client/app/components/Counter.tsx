"use client"
import React from 'react'
import { useState, useEffect } from 'react'


type CounterProp = {
    target: number,
    suffix: string
}

const Counter = ({target = 22, suffix = "K+"}: CounterProp) => {
    const [counter, setCounter] = useState(0); // set initial counter state

    // using useEffect to increment counter
    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            current += 1; // every 1milliseconds, increment current value by 1
            setCounter(current); // then update the value of the counter

            if (current === target) {
                clearInterval(interval); // once current value gets to target, stop increment by clearing the setInterval function
            }
        }, 100)

        return () => clearInterval(interval)
    }, [target])
  return (
    <span className='text-primary-200 font-semibold text-lg'>
        {counter}{suffix}
    </span>
  )
}

export default Counter