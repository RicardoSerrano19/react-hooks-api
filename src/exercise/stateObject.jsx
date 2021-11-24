import {useState} from 'react'

const initialValue = {
    name: 'Ricardo',
    surname: 'Serrano',
    age: 24
}

const PersonForm = () => {
    const [person, setPeson] = useState(initialValue)
    console.log(person);

    return(
        <form>
            <div>
                <label htmlFor="">Name: </label>
                <input type="text" name="name" id=""/>
            </div>
            <div>
                <label htmlFor="">Surname: </label>
                <input type="text" name="name" id=""/>
            </div>
            <div>
                <label htmlFor="">Age: </label>
                <input type="number" name="name" id="" min="0" max="130"/>
            </div>
            <div>
                <button>Send Data</button>
            </div>
        </form>
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