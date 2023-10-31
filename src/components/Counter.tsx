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
      <h2>{count}</h2>
      <h3>{count}</h3>
      <button onClick={handleClick}></button>
    </section>
  )
}

export default Counter
