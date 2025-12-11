import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Component/Login'
import Dashbord from './Component/Dashbord'
import Signin from './Component/Signin'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Signin}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/Dashbord' Component={Dashbord}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}
