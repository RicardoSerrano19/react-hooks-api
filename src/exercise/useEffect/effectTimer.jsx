import React, {useState, useEffect} from 'react'

export default function EffectTimer() {
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        const interval = setInterval(tick, 1000);
        console.log('- EffectTimer: useEffect (function, [seconds])')
        return () => {
            clearInterval(interval)
            console.log('- EffectTimer: useEffect (function, [seconds]): cleanup')
        }
    }, [seconds])

    const tick = () => {
        const sec = seconds + 1;
        setSeconds(sec);
    }

    return (
        <div>
            Seconds: {seconds}
        </div>
    )
}
