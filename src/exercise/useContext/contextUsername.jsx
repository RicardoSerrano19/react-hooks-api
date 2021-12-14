import {createContext, useState} from 'react'
import Layout from './contextLayout'

export const UserContext = createContext('Unknown')
export default function ContextUsername() {
    const [userName, setUserName] = useState('Ricardo Serrano');

    return (
        <div className='App'>
            <UserContext.Provider value={userName}>
                <Layout>
                    Main Content
                </Layout>
            </UserContext.Provider>
        </div>
    )
}
