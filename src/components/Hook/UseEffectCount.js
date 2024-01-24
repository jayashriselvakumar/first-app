import React, { useEffect, useState } from "react";
const UseEffectCount = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('use effect called')
        document.title = `Count ${count} times`
    })
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click the buttonn {count} times</button>
        </div>
    )
}

export default UseEffectCount