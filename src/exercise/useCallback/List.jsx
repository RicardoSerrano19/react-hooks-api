import React from 'react'
import ListItem from './ListItem'

const List = ({list, onRemove}) => {
    return (
        <ul>
            {list.map((item) => (
                <ListItem item={item} onRemove={onRemove}/>
            ))}
        </ul>
    )
}

export default List
