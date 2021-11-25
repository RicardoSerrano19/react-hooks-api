import {useState} from 'react'

const ITEMS_SHOP = [
    { name: 'Beans', price: 2},
    { name: 'Jam', price: 3},
    { name: 'Zukaritas', price: 8},
    { name: 'Olive Oil', price: 2.3},
    { name: 'Rice', price: 3.1},
    { name: 'Bread', price: 4},
    { name: 'Toilet Paper', price: 1},
]
const ObjectRepresentation = ({object, name}) => {
    return (
        <div>
            <h3>{name}</h3>
            <strong>
                <pre>
                    {JSON.stringify(object, undefined, 4)}
                </pre>
            </strong>
        </div>
    )
}
const ShopCar = ({initialValue}) => {
    const [items, setItems] = useState([])

    const onAddHandler = () => {
        const itemsLength = items.length;
        const nextItem = ITEMS_SHOP.slice(itemsLength, itemsLength+1);
        setItems([...items, ...nextItem]);
    }

    const onRemoveHandler = () => {
        const newArray = items.slice(0, items.length - 1);
        setItems([...newArray]);
    }

    return (
        <>
        <div className='row'>
            <ObjectRepresentation object={ITEMS_SHOP} name={'Original Array'}/>
            <ObjectRepresentation object={items} name={'New Array'}/>
        </div>
        <div>  
            <button onClick={onAddHandler}>Agregar</button>
            <button onClick={onRemoveHandler}>Quitar</button>
        </div>
        </>
    )
}

const StateArray = () => {
    return (
        <div className='App'>
            <ShopCar initialValue={ITEMS_SHOP}/>
        </div>
    )
}

export default StateArray