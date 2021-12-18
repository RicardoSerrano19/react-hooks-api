## 🎣 useCallback

The ``useCallback`` hook will return a _**memoized**_ version of the callback that only changes if one of the dependencies has changed.

The ``useCallback`` hook takes two arguments:

 1. Inline callback function
 2. Array of dependencies

```js
const memoizedCallback = useCallback(() => {
 doSomething(a,b)
}, [a,b])
```
### What is memoization
A performance optimization technique which eliminates the need to recompute a value for a given input by storing the original computation and returning that stored value when the same input is provided. **_Caching is a form of memoization_**.