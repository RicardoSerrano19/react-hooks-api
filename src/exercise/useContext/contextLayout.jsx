import React from 'react'
import Header from './contextHeader'

function Layout({children}) {
    return (
        <div>
            <Header>
                <main>
                    {children}
                </main>
            </Header>
        </div>
    )
}

export default Layout
