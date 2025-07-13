import { useState,useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  // when any of the dependency state is changed then passGenerator is memoized
  const passGenerator = useCallback(()=>{
     let pass = ""
     // 26+26 character
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(numberAllowed) str += "0123456789"
     if(charAllowed) str += "!@#$%^&*-_+=[]{}~`" //18 specialChar
     for(let i=1; i<=length; i++){
      // chooses the random number from the string
      pass += str[Math.floor(Math.random() * str.length)]
     }
     setPassword(pass)
  },[length, numberAllowed, charAllowed]) 
 
  // when any of the dependency change then function inside callback is called
  useEffect(()=>{
    passGenerator()
  },[passGenerator])

  // creating reference of input type password
  const passReference = useRef(null)

  const copyToClipboard = useCallback(()=>{
    //for looks like password is copied
    passReference.current?.select()
    // to copy the password
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='password'
            readOnly
            ref={passReference}
          />
          <button  onClick={copyToClipboard} className='outline-none bg-blue-700 hover:bg-blue-300 text-white px-3 py-0.5 shrink-0'>Copy</button>
       </div>

       <div className='flex text-sm gap-x-2 text-orange-600'>
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={6}
            max={20} 
           value={length}
            className='cursor-pointer'
           onChange={(e)=>setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div> 

        <div className='flex items-centre gap-x-1'>
          <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            onChange={()=> setNumberAllowed(!numberAllowed)}
          />
          <label>Numbers</label>
        </div>

        <div className='flex items-centre gap-x-1'>
          <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            onChange={()=> setCharAllowed(!charAllowed)}
          />
          <label>Characters</label>
        </div>
       </div>
      </div>
    </>
  )
}

export default App
