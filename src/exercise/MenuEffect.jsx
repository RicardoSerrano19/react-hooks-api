
import {Link, Outlet} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import '../App.css'
import { useReadFile } from '../hooks/useReadFile'

const NavBar = () => {
    return (
        <>
        <div className='navbar'>
            <Link to='effectEveryRender'>EveryRender - DidUpdate + DidMount</Link>
            <Link to='effectConditionallyRunEffects'>ConditionallyRunEffect - Dependencies</Link>
            <Link to='effectOnlyOnce'>Only Once - DidMount</Link>
        </div>
        <Outlet />
        </>
    )
}

const MenuState = () => {
    const markdown = useReadFile('EFFECT.md')
    return(
        <>
        <NavBar />
        <div className='center'>
                <ReactMarkdown className='w-90' children={markdown}/>
        </div>
        </> 
    )
} 

export default MenuState;
