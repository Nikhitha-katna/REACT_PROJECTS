import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  
  const [length,setLength] = useState(5)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [characterAllowed,setCharacterAllowed] = useState(false)
  const [password,setPassword] = useState("")

   const passwordRef = useRef()

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  

    if(numberAllowed) string += "0123456789"
    if(characterAllowed) string += "!@#$%^&*-_+=[]{}~`"

    for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random()*string.length+1);
        pass += string.charAt(char);
      
    }
    setPassword(pass)

  },[length,numberAllowed,characterAllowed ,setPassword])


  const copyPasswordToClipboard = useCallback( ( ) => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,30)
  },[password])


useEffect(()=> {
  passwordGenerator()
},[length,numberAllowed,characterAllowed])



  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={5}
        max={30}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                  setCharacterAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
  )
}

export default App
