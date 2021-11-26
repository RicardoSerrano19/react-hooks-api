
import {Link, Outlet} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import {useEffect, useState} from 'react'
import { useReadFile } from '../hooks/useReadFile'
import '../App.css'

const NavBar = () => {
    return (
        <>
        <div className='navbar'>
            <Link to='string'>String</Link>
            <Link to='boolean'>Boolean</Link>
            <Link to='object'>Object</Link>
            <Link to='array'>Array</Link>
        </div>
        <Outlet />
        </>
    )
}


const MenuState = () => {
    const markdown = useReadFile('STATE.md')

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
