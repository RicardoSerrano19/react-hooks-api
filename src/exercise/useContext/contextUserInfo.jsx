import { useContext } from 'react'
import { UserContext, PreferencesContext } from './contextUsername'

function UserInfo() {
    const userName = useContext(UserContext)
    const preferences = useContext(PreferencesContext)

    console.log('- UserInfo: render')
    return (
        <span>
            <p>UserName context: {userName} </p>
            <p>Preferences context: {preferences}</p>
        </span>
    )
}

export default UserInfo
