import React from 'react'
import Header from './components/Header/Header'

import Layout from './components/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github, { loaderGithub } from './components/Github/Github'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

function App(){
 const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="About" element={<About/>}></Route>
        <Route path="Contact" element={<Contact/>}></Route>
        <Route path="Github" element={<Github/>} loader={loaderGithub}></Route>
        
    </Route>
 ))

  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App