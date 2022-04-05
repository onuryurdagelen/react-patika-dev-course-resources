import React, { useState } from 'react'

const Counter = () => {
    console.log("Counter rendered!");
    const [count,setCount] = useState(0)

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);

  return (
    <div>
        <h1>Count {count}</h1>
        <button onClick={decrease}>Decrease</button>
        <button onClick={increase}>Increase</button>
    </div>
  )
}

export default Counter