# React API Reference: Hooks

**Hooks** are functions that let you to '*hook into*' React state and lifecycle features from function components.


## 🎣 useState

```
const [state, setState] = useState(initialState);
```
Returns a stateful value, and a function to update it.

 - During the initial render, the returned state (`state`) is the same as the value passed as the first argument.
 - The `setState` function is used to update the state. It accepts a new state value and enqueues a re-render of the component.

### Functional Updates
If the new state is computed using the previus state, you can pass a function to `setState`. The function will receive the **previous state** and return and **updated value**

`setState(prev => prev + 1)`

> `useState` does not automatically merge update objects. To achive this is combining the function updater form with object spread syntaxis:
> 
> `setState(prev => ({...prev, ...updateState}))`

### Lazy initial state
The `initialState` argument is the state used during the **initial render.** 
**In subsequent renders, it is ignored.**
If the initial state is the result of an expensive computation, you need to provide a function instead.

```
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
```
## 🎣 useEffect

The ``useEffect`` hook allows functional components to use something like
[lifecycle methods](https://ncoughlin.com/posts/react-component-lifecycle/).

The ``useEffect`` hook takes two arguments.

 1. A function
 2. Direction on when that function is executed.

### First Argument: Function
Accepts a function that cointains imperative, possibly effectful code for example:
_**Mutations, subscriptions, timers, logging, and other side effects.**_

The function passed to ``useEffect`` will run after the render is committed to the screen.

By default, effects run after every completed render, but you can choose to fire them only when certain values have changed:

 - When the component is rendered for **the first time**.
 - When the component is rendered for the first time and **whenever it re-renders**.
 - When the component is rendered for the first time and whenever it re-renders and **some piece of data has changed**.
 
### Second Argument: When the function is executed
#### ComponentDidMount()

This method is usually called when the component has finished rendering for the first time.
``` js
useEffect(() => {
 /* Called only once */
}, [])
```

### ComponentDidUpdate()
This method is called multiple times which the app lifecycle. It is invoked immediately after updating occurs.
```js
useEffect(() => {
 /* Called everytime*/
})
```

```js
useEffect(() => {
 /* Called when specific property(dependencies) are change*/
}, [dependencies])
```

### ComponentDidUnmount()
As the name implies this method will be called when the component is unmounted and it will be called only once in the component’s lifecycle.
```js
useEffect(() => {
 /* Will be called before unmounting*/
 return() => {
  /* Will be called while unmounting
 }
}, [])
```
 
 <img src='https://ncoughlin.com/static/3248ccbf2b5940e7b7048f6686e481a9/62803/1.png' alt='useEffect Second Argument'/>

 ## 🎣 useContext

The ``useContext`` provides a way to pass data through the component tree without having to pass props down manually at entry level.

### Steps to implement useContext hook
#### 1. Creating a context
Accepts a **context object** (the value returned from `React.createContext`) and returns the current context value for that context.
``` js
import { createContext } from 'react'
const Context = createContext(defaultValue);
```
#### 2. Providing the context
`Context.Provider` component available on the context instance is used to provide the context to its child components, no matter how deep they are.

The current context value is determined by the value `value` prop of the nearest `<MyContext.Provider>` above the calling component in the tree.
``` js
const Main = () => {
 const value = 'My context value';
 
 return(
  <Context.Provider value={value}>
    <MyComponent />
  </Context.Provider> 
 )
}
```

#### 3. Consuming the context
Don’t forget that the argument to `useContext` must be the _context object itself_:

``` js
import { useContext } from 'react'
const MyComponent = () => {
 const value = useContext(Context);
 
 return (
  <span>The value consumed is: {value} </span>
 )
}
```

**Important**: A component calling `useContext` will always re-render when the context value changes. If re-rendering the component is expensive, you can [optimize it by using memoization](https://github.com/facebook/react/issues/15156#issuecomment-474590693).