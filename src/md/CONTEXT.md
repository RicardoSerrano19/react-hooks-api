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