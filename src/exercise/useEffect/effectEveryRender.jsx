import {useEffect, useState} from 'react';

const Counter = () =>{
    const [count, setCount] = useState(0);
    console.log('- Counter: render')
    useEffect(() => {
        console.log('- Counter: useEffect (function, null)')
        document.title = `You have click ${count} times` 
    });

    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Clicks {count} times</button>
        </div>
    )

}

const EffectEveryRender = () => {
    console.log('EffectAfterRender: render')

    return(
        <div className='App'>
            <Counter />
        </div>
    )
}

export default EffectEveryRender;