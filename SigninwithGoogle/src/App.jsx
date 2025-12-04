import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Comnopents/Register'
import Login from './Comnopents/Login'
import Dashbord from './Comnopents/Dashbord'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Register}></Route>
        <Route path='/Login' Component={Login}></Route>
        <Route path='/dashbord' Component={Dashbord}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}
