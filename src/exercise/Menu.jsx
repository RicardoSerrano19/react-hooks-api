
import {Link, Outlet} from 'react-router-dom'
import '../App.css'

const NavBar = () => {
    return (
        <>
        <div className='navbar'>
            <Link to='state'>useState</Link>
            <Link to='effect'>useEffect</Link>
            <Link to='context'>useContext</Link>
            <Link to='reducer'>useReducer</Link>
        </div>
        <Outlet />
        </>
    )
}

const Menu = () => {
    return(
        <>
        <NavBar />
        </>
    )
} 

export default Menu;