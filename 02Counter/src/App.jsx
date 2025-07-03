import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
   const [value,setValue] = useState(0)
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter: {value}</h2>
      <button onClick={()=>{
        // setValue(value+1) // it changes only once
        // setValue(value+1)
        // setValue(value+1)
        setValue(value+1)

        // setValue((value)=>value+1) it it correct way to do it 
        
        // setValue((value)=>value+1)
        // setValue((value)=>value+1)
        // setValue((value)=>value+1)
      }}>Add Value</button>
      <br />
      <button onClick={()=>{
        if(value>0)setValue(value-1)
        }}>Remove Value</button>
    </>
  )
}

export default App
