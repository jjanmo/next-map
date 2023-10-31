import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState<number>(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <section>
      <div>Counter</div>
      <h1>{count}</h1>
      <button onClick={handleClick}></button>
    </section>
  )
}

export default Counter
