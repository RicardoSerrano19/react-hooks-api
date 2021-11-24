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