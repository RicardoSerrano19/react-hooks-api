import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Menu from './exercise/Menu'
import MenuState from './exercise/MenuState'
import MenuEffect from './exercise/MenuEffect'
import MenuContext from './exercise/MenuContext'
import MenuReducer from './exercise/MenuReducer'
import MenuCallback from './exercise/MenuCallback'
import MenuRef from './exercise/MenuRef'
import StateString from './exercise/useState/stateString'
import StateBoolean from './exercise/useState/stateBoolean'
import StateObject from './exercise/useState/stateObject'
import StateArray from './exercise/useState/stateArray'
import EffectEveryRender from './exercise/useEffect/effectEveryRender'
import EffectConditionallyRunEffects from './exercise/useEffect/effectConditionallyRunEffects'
import EffectOnlyOnce from './exercise/useEffect/effectOnlyOnce'
import EffectCleanup from './exercise/useEffect/effectWithCleanup'
import EffectTimer from './exercise/useEffect/effectTimer'
import EffectDataFetch from './exercise/useEffect/effectDataFetching'
import ContextUsername from './exercise/useContext/contextUsername'
import ContextTheme from './exercise/useContext/contextTheme'
import ReducerCounter from './exercise/useReducer/reducerCounter'
import ReducerFetch from './exercise/useReducer/reducerFetch'
import CallbackApp from './exercise/useCallback/callbackApp'
import RefUpdate from './exercise/useRef/refUpdate'
import RefDOM from './exercise/useRef/refDom'

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
                        <Route path='effectConditionallyRunEffects' element={<EffectConditionallyRunEffects />}/>
                        <Route path='effectOnlyOnce' element={<EffectOnlyOnce />}/>
                        <Route path='effectCleanup' element={<EffectCleanup />}/>
                        <Route path='effectTimer' element={<EffectTimer />}/>
                        <Route path='effectDataFetch' element={<EffectDataFetch />}/>
                    </Route>
                    <Route path='context' element={<MenuContext />}>
                        <Route path='contextUsername' element={<ContextUsername />}/>
                        <Route path='contextTheme' element={<ContextTheme />}/>
                    </Route>
                    <Route path='reducer' element={<MenuReducer />}>
                        <Route path='reducerCounter' element={<ReducerCounter />}/>
                        <Route path='reducerFetch' element={<ReducerFetch />}/>
                    </Route>
                    <Route path='callback' element={<MenuCallback />}>
                        <Route path='callbackApp' element={<CallbackApp />}/>
                    </Route>
                    <Route path='ref' element={<MenuRef />}>
                        <Route path='refUpdate' element={<RefUpdate />}/>
                        <Route path='refDOM' element={<RefDOM />}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 

export default App;