import React, { useReducer } from 'react'
const CounterReducerObject = () => {
    const InitialState = {
        firstCounter: 0,
        secondCounter: 10
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment1':
                return { ...state, firstCounter: state.firstCounter + action.value }
            case 'decrement1':
                return { ...state, firstCounter: state.firstCounter - action.value }
            case 'increment2':
                return { ...state, secondCounter: state.secondCounter + action.value }
            case 'decrement2':
                return { ...state, secondCounter: state.secondCounter - action.value }
            case 'reset':
                return InitialState
            case 'default':
                return state
        }
    }
    const [count, dispatch] = useReducer(reducer, InitialState)
    return (

        <div>
            <div>Increment {count.firstCounter}</div>
            <div>Increment {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment1', value: 1 })}>Increment Counter1</button>
            <button onClick={() => dispatch({ type: 'decrement1', value: 1 })}>decrement Counter1</button>
            <button onClick={() => dispatch({ type: 'increment2', value: 10 })}>Increment Counter2</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 10 })}>decrement Counter2</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )

}
export default CounterReducerObject