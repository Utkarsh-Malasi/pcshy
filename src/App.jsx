import {React, useState } from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes> 
  </>)
}

export default App
