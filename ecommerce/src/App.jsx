import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import Home from "./pages/Home"
import AllTea from "./pages/AllTea "
import Discover from "./pages/Discover"
import News from "./pages/News"
import Pages from "./pages/Pages"
import Login from "./pages/login"
import Header1 from './components/Header1'
import Signup from './pages/Signup'

function App() {
 const  navigate=useNavigate()
  useEffect(()=>{
    let token=localStorage.getItem("token")
    if(!token){
      navigate("/login")
    }
  },[])
  return (
    <div>
      <Header1/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/alltea' element={<AllTea/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
        


       
        </Routes></div>
  )
}

export default App