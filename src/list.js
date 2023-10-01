import React, { useState } from 'react'

function List() {
    const getItems=() =>{
        console.log("%c getItems is called", "color:royalblue");
        let arr = Array(50).fill(0);
        console.log(arr);
        return arr
    }
    const [items, setItems] = useState(getItems())
  return (
    <div>
<ul>
    {items.map((item, index)=> <li key ={index}>{index}</li>)}
</ul>
<button onClick = {()=> setItems([...items, 0,7])}>Add items</button>
    </div>
  )
}

export default List