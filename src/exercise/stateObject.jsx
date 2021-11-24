import {useState} from 'react'

const initialValue = {
    name: 'Ricardo',
    surname: 'Serrano',
    age: 24
}

const ObjectRepresentation = ({object}) => {
    return (
        <div>
            <h3>Person Object</h3>
            <strong>
                <pre>
                    {JSON.stringify(object, undefined, 4)}
                </pre>
            </strong>
        </div>
    )
}
const PersonForm = () => {
    const [person, setPerson] = useState(initialValue)
    
    const onChangeName = (event) => {
        const name = event.target.value;
        setPerson(prev => ({...prev, name: name}));
    }

    const onChangeSurname = (event) => {
        const surname = event.target.value;
        setPerson(prev => ({...prev, surname: surname}));
    }

    const onChangeAge = (event) => {
        const age = event.target.value;
        setPerson(prev => ({...prev, age: Number(age)}));
    }

    return(
        <>
        <div>
            <ObjectRepresentation object={person}/>
        </div>
        <form>
            <div>
                <label htmlFor="">Name: </label>
                <input type="text" name="name" id="" onChange={onChangeName} defaultValue={person.name}/>
            </div>
            <div>
                <label htmlFor="">Surname: </label>
                <input type="text" name="name" id="" onChange={onChangeSurname} defaultValue={person.surname}/>
            </div>
            <div>
                <label htmlFor="">Age: </label>
                <input type="number" name="name" id="" min="0" max="130" onChange={onChangeAge} defaultValue={person.age}/>
            </div>
        </form>
        </>
    )
}

const stateObject = () => {
    return(
        <div className='App'>
            <PersonForm />
        </div>
    )
}

export default stateObject;