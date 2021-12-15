import React, {useReducer} from 'react'

const initialState = 0;

const counterReducer = (state, action) => {
    switch(action){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'RESET':
            return initialState
        default:
            return state
    }
}

const ReducerCounterOne = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState) 

    return (
        <div>
            <div><strong>State: {state}</strong></div>
            <button onClick={() => dispatch('INCREMENT')}>Increment</button>
            <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
            <button onClick={() => dispatch('RESET')}>Reset</button>
        </div>
    )
}

export default ReducerCounterOne
