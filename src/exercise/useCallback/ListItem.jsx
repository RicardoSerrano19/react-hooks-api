import React from 'react'

const ListItem = ({item, onRemove}) => {
    return (
        <li key={item.id}>
            {item.name}
            <button type="button" onClick={() => onRemove(item.id)}>
                Remove
            </button>
        </li>
    )
}

export default ListItem
