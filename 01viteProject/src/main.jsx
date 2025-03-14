import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp()
{
  return(
    <div>
  <h1>Testing....</h1>
    </div>
  
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",  // Fixed the URL
//       target: "_blank"
//   },
//   children: "Click Me to Visit Google"
// };

const ReactElement = (
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click Me to Visit Google'
);
const AnotherElement = <a href="https://google.com" target="_blank">Visit Googxzfdxgvdftgle</a>;
const anotherUser ="Sunsun patel"


const ReactElement2= React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click Me to Visit Google',
  anotherUser
);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyApp />
    {ReactElement}
   { AnotherElement}
  { ReactElement2}
  </StrictMode>,
)
