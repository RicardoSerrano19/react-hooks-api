import {createContext, useState} from 'react'
import Layout from './contextLayout'

export const UserContext = createContext('Unknown')
export const PreferencesContext = createContext('light-mode')
export default function ContextUsername() {
    const [userName, setUserName] = useState('Ricardo Serrano');
    console.log('- ContextUsername: render')

    const handleClick = (e) => {
        const name = e.target.value;
        setUserName(name);
    }
    return (
        <div className='App'>
            <PreferencesContext.Provider value={'nothing'}>
                <UserContext.Provider value={userName}>
                    Username: <input type="text" value={userName} onChange={handleClick}/>
                    <Layout>
                        Main Content
                    </Layout>
                </UserContext.Provider>
            </PreferencesContext.Provider>
        </div>
    )
}
