import React from 'react'
import UserInfo from './contextUserInfo'

function Header() {
    console.log('- Header: render')

    return (
        <header>
            <UserInfo />
        </header>
    )
}

export default Header
