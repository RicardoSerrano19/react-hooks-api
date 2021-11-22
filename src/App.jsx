import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  console.log('App: Render');

  const increment = () => {
    setCount(count + 1)
  } 

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }
  return (
    <div className="App">
      <div className="title">Contador: <strong>{count}</strong></div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default App
