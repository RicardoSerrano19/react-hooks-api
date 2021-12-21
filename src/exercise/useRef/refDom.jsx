import React, {useRef, useEffect} from 'react'

const RefDOM = () => {
    console.log('RefDOM: render');
    const elementRef = useRef();

    useEffect(() => {
        const divElement = elementRef.current;
        console.log(divElement);
    }, [])
    return (
        <div className='App'>
            <div ref={elementRef}>
                I'm a element
            </div>
        </div>
    )
}

export default RefDOM;
