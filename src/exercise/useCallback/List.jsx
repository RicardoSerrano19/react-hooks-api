import React from 'react'
import ListItem from './ListItem'

const List = ({list, onRemove}) => {
    console.log('Render: List');
    return (
        <ul>
            {list.map((item) => (
                <ListItem key={item.id} item={item} onRemove={onRemove}/>
            ))}
        </ul>
    )
}

export default List
