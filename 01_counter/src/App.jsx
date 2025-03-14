import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const[counter,setCounter] = useState(0)
  // let counter =5 
  const addValue = ()=>
  {
    setCounter(counter + 1);
  }
  const removeValue = ()=>
    {
      if(counter > 0)
      setCounter(counter - 1);
     else
     alert("Do not Enter Negative Values....")
    }

  return (
    <>
     <h1>chai and react</h1>
     <h2>counter Value :{counter}</h2>
     <button onClick={addValue}>Add Value : {counter}</button>
     <br/>
     <button onClick={removeValue}>remove Value {counter}</button>
     <p>Footer: {counter}</p>
    </>
  )
}

export default App
