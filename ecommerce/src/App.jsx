import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import Home from "./pages/Home"
import AllTea from "./pages/AllTea "
import Discover from "./pages/Cart"
import News from "./pages/News"
import Pages from "./pages/Pages"
import Login from "./pages/login"
import Signup from './pages/Signup'
import HOC from './components/HOC'
import Cart from './pages/Cart'
import Layout from './components/Layout'
import Details from './pages/Details'

function App() {
 
  return (
   
  <Routes>
<Route path="/*"
          element={
            <Layout>
              <Routes>
                <Route index element={<Home />} />
                <Route path="alltea" element={<AllTea />} />
                <Route path="details/:id" element={<Details />} />



                {/* protected routes */}
                <Route path='/' element={<HOC/>}>
                <Route path="cart" element={<Cart />} />
                <Route path="order" element={<div>order</div>} />
                </Route>
              </Routes>
            </Layout>
          }
        />

    {/* headerless routes */}
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      </Routes>
   
  )
}

export default App