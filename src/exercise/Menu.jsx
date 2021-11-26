
import {Link, Outlet} from 'react-router-dom'
import '../App.css'

const NavBar = () => {
    return (
        <>
        <div className='navbar'>
            <Link to='state'>useState</Link>
            <Link to='effect'>useEffect</Link>
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

/*
 <>
        <div className='navbar'>
            <Link to='/'>Menu</Link>
            <Link to='string'>String</Link>
            <Link to='boolean'>Boolean</Link>
            <Link to='object'>Object</Link>
            <Link to='array'>Array</Link>
        </div>
        <Outlet />
        </>
*/