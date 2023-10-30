import { useState } from "react"

export default function Counter(){
  const [count, setCount]= useState<number>(0)

  const handleButtonClick = () => { 
    setCount(count +1)
  }
  
  return <div>
    <div>{count}</div>
    <button onClick={handleButtonClick}>+</button>
  </div>
}