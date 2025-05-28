import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username: "utsov",
    age: 20
  }
  let newArr = [1,2,3]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card insta="utsov_mohanty" nametext="Utsov Mohanty" description="Coder, Photographer, Filmmaker"/>
       <Card insta="ucchabb" nametext="Utsov Mohanty" description="Personal Account"/> 
    </>
  )
}

export default App
