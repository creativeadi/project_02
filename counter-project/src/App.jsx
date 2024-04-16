import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 15

  let [counter, setCounter] = useState(15);

  const addValue = () =>{
    //console.log("click", Math.random());
    setCounter(counter + 1)
  }

  const removeValue = () =>{
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter-project</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App


/* 
  In this project what we learn is all about the usage of hooks, like here when we use normal way
  i.e. without 'useState()', then we see that there is no updation in the UI even after clicking 
  on the 'Add value or Remove value' button, thus when we use one of the hooks viz 'useState()' here,
  we see that the updation is reflected.

  syntax of useState hook;
  useState hook is a array type hook.
  [variable, functionName] = useState()
*/