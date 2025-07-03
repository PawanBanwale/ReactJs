import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
   

  return (
    <>
      <h1 className='bg-black-500 p-1.5 rounded-xl'>Tailwind Test</h1>
      <Card username="Pawan" obj={{name:"pawan",age:21}}/>
      <Card username="Yash" obj={{name:"yash",age:23}}/>
    </>
  )
}

export default App
