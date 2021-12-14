import { useContext } from 'react'
import { UserContext } from './contextUsername'

function UserInfo() {
    const userName = useContext(UserContext)
    console.log('- UserInfo: render')
    return (
        <span>
            UserName context: {userName}
        </span>
    )
}

export default UserInfo
