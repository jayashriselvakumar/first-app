import React, { useEffect, useState } from 'react'
const ConditionalUseEffect = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('use effect called')
        document.title = `Click ${count} times`
    }, [count])
    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default ConditionalUseEffect