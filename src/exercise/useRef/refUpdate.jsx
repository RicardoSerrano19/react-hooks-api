import React, {useRef, useState} from 'react'

const RefUpdate = () => {
    console.log('RefUpdate: render');
    const countRef = useRef(0);

    const updateReference = () => {
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`);
    }

    return (
        <div className='App'>
            <button onClick={updateReference}>Click me</button>
        </div>
    )
}

export default RefUpdate
