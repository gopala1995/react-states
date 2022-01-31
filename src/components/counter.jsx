import { useState } from "react"



export const Counter = ()=>{
    const [counter,setCounter] = useState(1)
    const clicFun = (val)=>{
      setCounter(counter + val)
    }
    return (
        <div>
            <h1>couner:{counter}</h1>
            <button onClick={()=>clicFun(1)}>Increment</button>
            <button onClick={()=>clicFun(-1)}>Decrement</button>
        </div>
    )
}