import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './Pages.jsx/Add'
import Cart from './Pages.jsx/Cart'
import Nav2 from './Components/Nav2'
import Footer from './Components/Footer'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav2 />
        <Routes>
          <Route path='/' element={<Add />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}
