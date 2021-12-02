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