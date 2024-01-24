import React, { useEffect, useState } from 'react'
const HookMouse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMousePosition = (e) => {
        console.log('log event called')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log('use effect called')
        window.addEventListener('mousemove', logMousePosition)
        return()=>{
            console.log('event un mount called')
            window.removeEventListener('mousemove',logMousePosition)}
    }, [])
    return (
        <div>
            <h1>X::{x},Y::{y}</h1>
        </div>
    )
}

export default HookMouse