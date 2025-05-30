import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed){
      str+="0123456789"
    }
    if (charAllowed){
      str+="!@#$%^&*-_=+[]{}~`"
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  } ,[length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 my-8 text-orange-500 bg-gray-700 h-50">
        <h1 className="text-3xl text-center text-white py-2 my-4 pt-6">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden">
          <input 
          type="text" 
          value = {password}
          className="outline-none w-full py-3 px-3 text-black bg-white"
          placeholder="Password"
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'>Copy</button>
        </div>
        <div className='flex text-md gap-x-2 pt-6'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap=x=1">
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {setNumberAllowed((prev) => !prev)}}
            />
            <label htmlFor='numberInput' className='pl-1'>Numbers</label>
          </div>
          <div className="flex items-center gap=x=1">
            <input type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {setCharAllowed((prev) => !prev)}}
            />
            <label htmlFor='charInput' className='pl-1'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
