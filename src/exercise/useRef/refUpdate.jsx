import React, {useRef, useState} from 'react'

const RefUpdate = () => {
    console.log('RefUpdate: render');
    const countRef = useRef(0);
    const [count, setCount] = useState(0);

    const updateReference = () => {
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`);
    }

    const updateState = () => {
        const updateCount = count + 1;
        console.log(`Clicked ${updateCount} times`);
        setCount(updateCount);
    }

    return (
        <div className='App'>
            <button onClick={updateReference}>Click me - useRef</button>
            <button onClick={updateState}>Click me - useState</button>
        </div>
    )
}

export default RefUpdate
