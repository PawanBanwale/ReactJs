import React, { useState } from 'react'
import Products from './Product'

function App() {
  var [a,b] = useState(false)
  return (
    <div className="w-full h-screen bg-zinc-800 text-white p-5">
     
     <h1>{a===true ? "hell0" : "hey"}</h1>
     <button onClick={()=>b(!a)}>Click</button>
    </div>
  )
}

export default App