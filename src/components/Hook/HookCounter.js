import React, { useState } from 'react'
const HookCounter = () => {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const handleIncrement = () => {
        setCount(prevState => {
           return prevState + 1
        })
    }
    return (
        <div>
            <button onClick={() => setCount(initialCount)}>Reset  {initialCount}</button>
            <button onClick={handleIncrement}>Increment the count {count}</button>
        </div>
    )
}

export default HookCounter