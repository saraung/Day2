import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import Reg from './components/Reg'
import Tab from './components/Tab'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasic from './components/Statebasic'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>SRG</h1>
      <First/> */}
      {/* <Reg/> */}
      {/* <Tab/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<First/>}/>
        <Route path='/r' element={<Reg/>}/>
        <Route path='/t' element={<Tab/>}/>
        <Route path='/s' element={<Statebasic/>}/>
        <Route path='/c' element={<Counter/>}/>
      </Routes>
    </>
  )
}

export default App
