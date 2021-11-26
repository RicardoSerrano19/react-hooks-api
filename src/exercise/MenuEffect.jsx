
import {Link, Outlet} from 'react-router-dom'
import '../App.css'

const NavBar = () => {
    return (
        <>
        <div className='navbar'>
            <Link to='string'>String</Link>
        </div>
        <Outlet />
        </>
    )
}

const MenuState = () => {
    return(
        <NavBar />
    )
} 

export default MenuState;
