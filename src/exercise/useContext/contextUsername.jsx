import {createContext, useState} from 'react'
import Layout from './contextLayout'

export const UserContext = createContext('Unknown')
export const PreferencesContext = createContext('light-mode')
export default function ContextUsername() {
    const [userName, setUserName] = useState('Ricardo Serrano');
    console.log('- ContextUsername: render')

    return (
        <div className='App'>
            <PreferencesContext.Provider>
                <UserContext.Provider value={userName}>
                    <Layout>
                        Main Content
                    </Layout>
                </UserContext.Provider>
            </PreferencesContext.Provider>
        </div>
    )
}
