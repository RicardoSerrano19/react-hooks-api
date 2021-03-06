import React,{useState, useCallback} from 'react'
import {v4 as uuidv4} from 'uuid'
import List from './List'

const generateUUID = () =>{
    return uuidv4();
}

const CallbackApp = () => {
    console.log('Render: App');
    const [users, setUsers] = useState([
        { id: 'a', name: 'Robin'},
        { id: 'b', name: 'Dennis'}
    ])
    const [text, setText] = useState('')

    const handleText = (event) => {
        setText(event.target.value)
    }

    const handleAddUser = (event) => {
        const newUsers = users.concat({ id: generateUUID(), name: text})
        setUsers(newUsers)
    }

    const handleRemove = useCallback((id) => {
        const newUsers = users.filter((user) => user.id !== id)
        setUsers(newUsers)
    }, [users])

    return (
        <div className='App'>
            <input type="text" value={text} onChange={handleText}/>
            <button type="button" onClick={handleAddUser}>
                Add user
            </button>

            <List list={users} onRemove={handleRemove} />
        </div>
    )
}

export default CallbackApp
