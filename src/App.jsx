import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import StateString from './exercise/stateString'
import StateBoolean from './exercise/stateBoolean'
import './App.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <Link to='/'>String</Link>
            <Link to='boolean'>Boolean</Link>
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
            </Routes>
        </BrowserRouter>
    )
} 

export default App;