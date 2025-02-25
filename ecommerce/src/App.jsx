import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import Home from "./pages/Home"
import AllTea from "./pages/AllTea "
import Discover from "./pages/Cart"
import News from "./pages/News"
import Pages from "./pages/Pages"
import Login from "./pages/login"
import Header1 from './components/Header1'
import Signup from './pages/Signup'
import HOC from './components/HOC'
import Cart from './pages/Cart'

function App() {
 const  navigate=useNavigate()
  return (
    <div>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/alltea' element={<AllTea/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      <Route  path="/" element={<HOC/>} >
        <Route path='/cart' element={<Cart/>}/>s
     </Route>


       
        </Routes></div>
  )
}

export default App