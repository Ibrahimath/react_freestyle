import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const handleClick = ()=>{
    setCount((prev)=>{ return prev + 1})
    console.log(count);
  }
  return (
    <div>
      <button onClick={handleClick}> Click: {count}</button>
    </div>
  
  )
}

export default Counter