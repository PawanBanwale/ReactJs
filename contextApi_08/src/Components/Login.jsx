import React, {useState,useContext} from 'react'
import userContext from '../Context/UserContext'

const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const {setUser} = useContext(userContext)
    function handleSubmit(e){
       e.preventDefault()
       setUser(username)   
    }
  return (
    <div>
        <h2>Login</h2>
        <input onChange={(e)=>setUsername(e.target.value)} type='text' value={username} placeholder='username'></input>
        <input onChange={(e)=>setPassword(e.target.value)} type='text' value={password} placeholder='password'></input>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login