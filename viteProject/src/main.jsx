import React from 'react';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const reactElement = {
//    type : 'a',
//     props: {
//         href : 'https://google.com',
//         target: '_blank',
//     },
//     children : "click this is a google link"
// }



// const reactElement = React.createElement(
//     'a',
//     {href: 'https://google.com',target : '_blank'},
//     'click this is a google link'
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
  </StrictMode>

  
)
