import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Menu from './exercise/Menu'
import MenuState from './exercise/MenuState'
import MenuEffect from './exercise/MenuEffect'
import StateString from './exercise/useState/stateString'
import StateBoolean from './exercise/useState/stateBoolean'
import StateObject from './exercise/useState/stateObject'
import StateArray from './exercise/useState/stateArray'
import EffectEveryRender from './exercise/useEffect/effectEveryRender'

import './App.css'


const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Menu />} >
                    <Route path='state' element={<MenuState />}>
                        <Route path='string' element={<StateString />}/>
                        <Route path='boolean' element={<StateBoolean />}/>
                        <Route path='object' element={<StateObject />}/>
                        <Route path='array' element={<StateArray />}/>
                    </Route>
                    <Route path='effect' element={<MenuEffect />}>
                        <Route path='effectEveryRender' element={<EffectEveryRender />}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 

export default App;