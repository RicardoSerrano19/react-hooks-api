import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0
};

const counterReducer = (state, action) => {
    const { value } = action;
    switch(action.type){
        case 'INCREMENT':
            return {firstCounter: state.firstCounter + value }
        case 'DECREMENT':
            return {firstCounter: state.firstCounter - value }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

const ReducerCounterTwo = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState) 

    return (
        <div>
            <div><strong>State: {state.firstCounter}</strong></div>
            <button onClick={() => dispatch({type: 'INCREMENT', value: 5})}>Increment</button>
            <button onClick={() => dispatch({type: 'DECREMENT', value: 5})}>Decrement</button>
            <button onClick={() => dispatch({type:'RESET'})}>Reset</button>
        </div>
    )
}

export default ReducerCounterTwo
