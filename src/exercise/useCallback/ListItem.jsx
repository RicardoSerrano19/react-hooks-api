import React from 'react'

const ListItem = ({item, onRemove}) => {
    console.log('Render: ListItem');
    return (
        <li>
            {item.name}
            <button type="button" onClick={() => onRemove(item.id)}>
                Remove
            </button>
        </li>
    )
}

export default ListItem
