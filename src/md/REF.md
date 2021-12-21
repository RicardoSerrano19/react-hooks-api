## 🎣 useRef

The ``useRef`` hook

The ``useCallback`` hook returns a **mutable ref object** whose `.current` property is initialized to the passed argument (`initialValue`). 
:lock: The returned object will persist for the full lifetime of the component.

```js
const refContainer = useRef(initialValue);
```
### Applications

#### 1. Mutable value
`useRef(intialValue` accepts one argument as the initial value. A reference is an object having a special property  `current`.
```js
function  MyComponent() {
  const  reference = useRef(initialValue);
  const  someHandler = () => {
    // Access reference value:
    const  value = reference.current;
    // Update reference value:
    reference.current = newValue;
 };
  // ...
}
```
:warning:There are 2 rules to remember about references.
1. The value of the reference is **_persisted_** (stay the same) between component renderings.
2. Updating reference **_doesn't trigger a component re-rendering_**.

#### 2. Access the DOM
The uses case for `useRef` in the DOM are: 

1. Managing focus, text selection, or media playback.
2. Triggering imperative animations.
3. Integrating with third-party DOM libraries.

```js
const TextInputWithFocusButton = () => {
  const inputElement = useRef(null)
  const onButtonClick = () => {
    // 'current' points to the mounted text input element
    inputElement.current.focus();
  }
  return(
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}> Focus the input </button>
    </>
  )
}
```