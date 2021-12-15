import { createContext, useState } from 'react'
import ContextHome from './contextHome'

export const ThemeContext = createContext();

const ContextTheme = () => {
    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle);
    }
    return (
        <div className='App'>
            <button onClick={handleClick}>Turn: {toggle ? 'Light' : 'Dark'}</button>
            <ThemeContext.Provider value={toggle}>
                <ContextHome/>
            </ThemeContext.Provider>
        </div>
    )
}

export default ContextTheme
