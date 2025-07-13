import React, {useContext} from 'react'
import userContext from '../Context/UserContext'
const Profile = () => {
    const {user} = useContext(userContext)
     if(!user) return<div>Please Enter Username</div>
     return (<div>Username: {user}</div>) 
 
}

export default Profile