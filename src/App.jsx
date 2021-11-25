import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import StateString from './exercise/stateString'
import StateBoolean from './exercise/stateBoolean'
import StateObject from './exercise/stateObject'
import StateArray from './exercise/stateArray'

import './App.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <Link to='/'>String</Link>
            <Link to='boolean'>Boolean</Link>
            <Link to='object'>Object</Link>
            <Link to='array'>Array</Link>
        </div>
    )
}
const App = () => {
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<StateString />}/>
                <Route path='boolean' element={<StateBoolean />}/>
                <Route path='object' element={<StateObject />}/>
                <Route path='array' element={<StateArray />}/>
            </Routes>
        </BrowserRouter>
    )
} 

export default App;