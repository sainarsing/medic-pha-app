import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/HomePage/Homepage'
import Productspage from '../pages/Products/Productspage'
import Cartpage from '../pages/Cart/Cartpage'
import { logincontext } from '../../App'
import Loginhome from '../pages/Login/Loginhome'
import Aboutpage from '../pages/About/Aboutlopage'
import Succes from '../pages/Succes'
import Cancel from '../pages/Cancel'
import Pastorders from '../pages/PastOrders/Pastorders'
import PageNotFound from '../pages/PageNotFound'
import Signuppage from '../pages/Register/Registerpage'

function Routingpro() {
    const wall=useContext(logincontext)
  return (
    <>
    <BrowserRouter>
   {
    wall.login? <Routes>
    <Route path="/" element={<Homepage />}/>
    <Route path='/products' element={<Productspage/>}/>
    <Route path='/cart' element={<Cartpage/>}/>
    <Route path='/pastorders' element={<Pastorders/>}/>
    <Route path='/success' element={<Succes/>}/>
    <Route path='/cancel' element={<Cancel/>}/>
    <Route path='*' element={<PageNotFound/>}/>
</Routes>
:
<Routes>
    <Route path="/" element={<Loginhome />}/>
    <Route path='/Register' element={<Signuppage/>}/>
    <Route path='/About' element={<Aboutpage/>}/>
    <Route path='/success' element={<Succes/>}/>
    <Route path='/cancel' element={<Cancel/>}/>
    <Route path='*' element={<PageNotFound/>}/>
</Routes>
   }
    </BrowserRouter>
    </>
  )
}

export default Routingpro
