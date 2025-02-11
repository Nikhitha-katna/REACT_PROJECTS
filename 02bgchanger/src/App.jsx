import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// The on click method in React expects a function reference
// You can't directly pass parameters inside the function, instead, you need to pass it as a reference or use arrow function syntax



function App() {
  const [color,setColor]= useState("red")

  return (
   <div className='w-full h-screen duration-200 '
   style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-3'>
          <div className='flex flex-wrap justify-center  bg-white px-3 py-2 rounded-3xl '>
                 <button className='text-white rounded-3xl px-4 py-2' 
                 style={{backgroundColor:"black"}} onClick={()=> setColor("black")}>
                  black</button>
          </div>
          <div className='flex flex-wrap justify-center  bg-white px-3 py-2 rounded-3xl '>
                 <button className='text-white rounded-3xl px-4 py-2' 
                 style={{backgroundColor:"purple"}} onClick={()=> setColor("purple")}>
                  purple</button>
          </div>
          <div className='flex flex-wrap justify-center  bg-white px-3 py-2 rounded-3xl '>
                 <button className='text-white rounded-3xl px-4 py-2' 
                 style={{backgroundColor:"olive"}} onClick={()=> setColor("olive")}>olive</button>
          </div>
          <div className='flex flex-wrap justify-center  bg-white px-3 py-2 rounded-3xl '>
                 <button className='text-white rounded-3xl px-4 py-2' 
                 style={{backgroundColor:"orange"}} onClick={()=> setColor("orange")}>orange</button>
          </div>
          <div className='flex flex-wrap justify-center  bg-white px-3 py-2 rounded-3xl '>
                 <button className='text-white rounded-3xl px-4 py-2' 
                 style={{backgroundColor:"blue"}} onClick={()=> setColor("blue")}>blue</button>
          </div>
          <div className='flex flex-wrap justify-center  bg-white px-3 py-2 rounded-3xl '>
                 <button className='text-white rounded-3xl px-4 py-2' 
                 style={{backgroundColor:"pink"}} onClick={()=> setColor("pink")}>pink</button>
          </div>
      </div>
   </div>
  )
}

export default App
