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
import Welcome from './components/Welcome'
import FormBasics from './components/FormBasics'
import ApiGet from './components/ApiGet'
import ImageApi from './components/ImageApi'

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
        <Route path='/r' element={<Reg data={{name:"saraung",age:21,place:"KKD"}}/>}/>
        <Route path='/t' element={<Tab/>}/>
        <Route path='/s' element={<Statebasic/>}/>
        <Route path='/c' element={<Counter/>}/>
        <Route path='/w' element={<Welcome/>}/>
        <Route path='/f' element={<FormBasics/>}/>
        <Route path='/a' element={<ApiGet/>}/>
        <Route path='/i' element={<ImageApi/>}/>
      </Routes>
    </>
  )
}

export default App
