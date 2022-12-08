import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, About, Contact, Service } from './pages'
import { Sidebar } from './components'



const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App