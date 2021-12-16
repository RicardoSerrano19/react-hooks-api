import React from 'react'
import ReducerCounterOne from './reducerCounterOne'
import ReducerCounterTwo from './reducerCounterTwo'
import ReducerCounterMultiple from './reducerCounterMultiple'

const ReducerCounter = () => {
    return (
        <div className='App'>
            <ReducerCounterOne />
            <ReducerCounterTwo />
            <ReducerCounterMultiple />
        </div>
    )
}
export default ReducerCounter
