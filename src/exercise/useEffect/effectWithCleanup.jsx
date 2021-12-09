import React, {useState} from 'react'
import EffectOnlyOnce from './effectOnlyOnce'

export default function effectWithCleanup() {
    const [display, setDisplay] = useState(true);

    const handleClick = () => {
        const status = !display;
        setDisplay(status)
    }
    
    return (
        <div>
            <button onClick={handleClick}>Toogle display</button>
            {display && <EffectOnlyOnce />} 
        </div>
    )
}
