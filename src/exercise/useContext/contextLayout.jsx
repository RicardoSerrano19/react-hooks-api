import React from 'react'
import Header from './contextHeader'

function Layout({children}) {
    console.log('- Layout: render')

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
