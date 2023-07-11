import React, { createContext, useState } from 'react'
import Child from './Child'
export const CreateContext = createContext(0)
export default function Context() {
     const [count, setCount] = useState(0)
  return (
    <CreateContext.Provider value ={count}>
    <button onClick={() => setCount( count - 1)}>-</button>
    <h3>{count}</h3>
    <button  onClick={() => setCount(count + 1)}>+</button>

    <Child/>
   </CreateContext.Provider>
  )
}
