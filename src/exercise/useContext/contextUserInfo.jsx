import { useContext } from 'react'
import { UserContext } from './contextUsername'

function UserInfo() {
    const userName = useContext(UserContext)
    return (
        <span>
            UserName context: {userName}
        </span>
    )
}

export default UserInfo
