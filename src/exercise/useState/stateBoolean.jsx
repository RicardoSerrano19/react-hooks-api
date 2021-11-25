import { useState } from 'react'
import '../../App.css'

const Switch = ({initialState}) =>{
  const [isEnabled, setIsEnabled] = useState(initialState);
  const handleClick = () => { setIsEnabled(!isEnabled)}
  
  const boxStyle = 'box ' + (isEnabled ? 'verde' : 'rojo')
  return (
    <>
      <div className={boxStyle}>
        <strong> State: {isEnabled.toString()} </strong>
      </div>
      <button onClick={handleClick}>{isEnabled ? 'Disable' : 'Enable'}</button>
    </>
  )
}
function StateBoolean() {


  return (
    <div className='App'>
      <Switch initialState={false}/>
    </div>
  )
}

export default StateBoolean
