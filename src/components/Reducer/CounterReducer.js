import React, { useReducer } from 'react'
const InitialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return InitialState
        default:
            return state
    }

}
const CounterReducer = () => {
    const[count,dispatch] = useReducer(reducer, InitialState)
    return (
        <div>
            <div>Count- {count}</div>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}
export default CounterReducer