
import {Link, Outlet} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import {useEffect, useState} from 'react'
import { useReadFile } from '../hooks/useReadFile'
import '../App.css'

const NavBar = () => {
    return (
        <>
        <div className='navbar'>
            <Link to='refUpdate'>Update Ref</Link>
            <Link to='refDOM'>DOM</Link>
        </div>
        <Outlet />
        </>
    )
}


const MenuRef = () => {
    const markdown = useReadFile('REF.md')

    return(
        <>
            <NavBar />
            <div className='center'>
                <ReactMarkdown className='w-90' children={markdown}/>
            </div> 
        </>
    )
} 

export default MenuRef;
