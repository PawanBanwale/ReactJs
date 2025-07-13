import React from 'react'
import { useLoaderData,Link } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData()
  return (
   
    <div className='text-centre 3m-4 bg-gray-600 text-white p-4 text-3xl'>
      <p className='text-centre'>Github followers: {data.followers} </p>
      <Link  className='text-centre' to={data.html_url}>Visit Github</Link>
   </div>
   
  )
}

export default Github

export async function loaderGithub(){
    const githubData = await fetch('https://api.github.com/users/PawanBanwale')
    return githubData.json()
}