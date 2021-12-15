import {useContext} from 'react'
import {ThemeContext} from './contextTheme'

const ContextHome = () => {
    const themeConsumer = useContext(ThemeContext)
    const theme = {
        backgroundColor: themeConsumer ? 'black' : 'white',
        color: themeConsumer ? 'white' : 'black',
        padding: '2rem',
        margin: '2rem',
        border: '1px solid black'
    }

    return (
        <div style={theme}>
            Hello
        </div>
    )
}

export default ContextHome;