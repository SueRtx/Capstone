import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, About, Contact, Service, Patient, Gallery } from './pages'
import { Sidebar, ThemeTemplate  } from './components'



const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <ThemeTemplate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App