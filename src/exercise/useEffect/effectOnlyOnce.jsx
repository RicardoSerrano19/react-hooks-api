import {useState, useEffect} from 'react'


export default function EffectOnlyOnce() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    console.log('- EffectOnlyOnce: render')
    useEffect(() => {
        console.log('- EffectOnlyOnce: useEffect (function, [])')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('- EffectOnlyOnce: useEffect (function, []): Cleanup')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    const logMousePosition = event => {
        console.log('- EffectOnlyOnce: MouseEvent')
        setX(event.clientX)
        setY(event.clientY)
    }

    return (
        <div>
            X = {x} | Y = {y}
        </div>
    )
}
