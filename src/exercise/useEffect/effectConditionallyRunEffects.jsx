import {useEffect, useState} from 'react';

const Counter = () =>{
    const [count, setCount] = useState(0);
    const [name, setName] = useState('default');

    console.log('- Counter: render')
    useEffect(() => {
        console.log('- Counter: useEffect (function, null)')
        document.title = `You have click ${count} times` 
    });

    const handleTextChange = e =>{
        const name = e.target.value;
        setName(name);
    }
    return(
        <div>
            <input type="text" value={name} onChange={handleTextChange}/>
            <button onClick={() => setCount(count + 1)}>Clicks {count} times</button>
        </div>
    )

}

const EffectConditionallyRunEffects = () => {
    console.log('EffectAfterRender: render')

    return(
        <div className='App'>
            <Counter />
        </div>
    )
}

export default EffectConditionallyRunEffects;