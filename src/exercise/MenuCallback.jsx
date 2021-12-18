
import {Link, Outlet} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import {useEffect, useState} from 'react'
import { useReadFile } from '../hooks/useReadFile'
import '../App.css'

const NavBar = () => {
    return (
        <>
        <div className='navbar'>
            <Link to='callbackApp'>Callback</Link>
        </div>
        <Outlet />
        </>
    )
}


const MenuCallback = () => {
    const markdown = useReadFile('CALLBACK.md')

    return(
        <>
            <NavBar />
            <div className='center'>
                <ReactMarkdown className='w-90' children={markdown}/>
            </div> 
        </>
    )
} 

export default MenuCallback;
