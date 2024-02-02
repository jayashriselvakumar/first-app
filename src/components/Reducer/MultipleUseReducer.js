import React, { useReducer } from 'react'
const InitialState = {
    firstCounter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state,firstCounter: state.firstCounter - action.value }
        case 'reset':
            return InitialState
        case 'default':
            return state

    }
}
const MultipleUseReducer = () => {
    const [count, dispatch] = useReducer(reducer, InitialState)
    const [count1, dispatch1] = useReducer(reducer, InitialState)
    return (
        <div>
            <div>Count1 - {count.firstCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment 1</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>decrement 1</button>
            <button onClick={() => dispatch({ type: 'reset', value: 1 })}>Reset</button>

            <div>Count2 - {count1.firstCounter}</div>
            <button onClick={() => dispatch1({ type: 'increment', value: 1 })}>Increment 1</button>
            <button onClick={() => dispatch1({ type: 'decrement', value: 1 })}>decrement 1</button>
            <button onClick={() => dispatch1({ type: 'reset', value: 1 })}>Reset</button>
        </div>

    )
}

export default MultipleUseReducer