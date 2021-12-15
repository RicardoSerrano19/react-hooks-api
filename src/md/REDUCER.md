## 🎣 useReducer

The ``useReducer`` hook is used for state management, as alternative to `useState`.

```js
const [state, dispatch] = useReducer(reducer, initialArg, init)
```

### useReducer over useState
Implement `useReducer` is usually preferable to `useState` when:

 1. Complex state logic that involves multiple sub-values.
 2. The next state depends on the previous one.
 3. Use a JSON object as state.

### Steps to implement useState hook
#### 1. Define a useReducer

``` js
const initialState = { count: 1 }
const [state, dispatch] = useReducer(reducer, initialState, init:opt)
```
#### 2. Create a reducer function
``` js
const reducer = (state, action) =>{
 switch(action.type){
  case: 'increment':
     return {count: state.count + 1}
  case: 'decrement':
     return {count: state.count - 1}
  default:
     throw new Error();
 }
}
```
#### 3. Dispatch
```js
 <button onClick={() => dispatch({type: 'decrement'})}>-</button>
 <button onClick={() => dispatch({type: 'increment'})}>+</button>
```