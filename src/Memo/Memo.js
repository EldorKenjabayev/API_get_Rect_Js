import React, { useState } from 'react'
import Counter1 from './Counter1'
import Counter2 from './Counter2'

export default function Memo() {
    const [coun1, setCount1] = useState(0)
    const [coun2, setCount2] = useState(0)
  return (
    <div>
       <div>
        <h1>Counter 1 :</h1>
        <button onClick={()=> setCount1(coun1 + 1)}>+</button>
        <Counter1 coun1={coun1}/>
        </div> 
       <div>
        <h1>Counter 2 :</h1>
        <button onClick={()=> setCount2(coun2 + 1)}>+</button>
        <Counter2 coun2={coun2}/>
        </div> 
    </div>
  )
}
