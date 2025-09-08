import React from 'react'
import Nav from './Component.jsx/Nav'
import Home from './Component.jsx/Home'
import Section from './Component.jsx/Section'
import Footer from './Component.jsx/Footer'
import Productcard from './Component.jsx/Productcard'

export default function App() {
  return (
    <div>
      <Nav/>
      <Home />
      <Productcard/>
      <Section/>
      <Footer/>
    </div>
  )
}

