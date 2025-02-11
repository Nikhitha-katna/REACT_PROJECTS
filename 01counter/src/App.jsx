import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setCounter]=useState(10)
  //let counter=10;
  const addvalue= ()=>{
    //counter=counter+1
    if (counter==20) {
      setCounter(counter=20)
      alert("Limit exceeded")
    } else
    setCounter(counter+1)
  }
  const removevalue=()=>{
    //counter=counter-1
    if (counter==0) {
      setCounter(counter=0)
      alert("Limit reached")
    } else
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai aur react | Nikhitha</h1>
      <h3>conter value = {counter}</h3>
      <button  onClick={addvalue}>Add value{counter}</button><br/>
      <button onClick={removevalue}>remove value{counter}</button>
      <p>main: {counter}</p>
    </>
  )
}

export default App
