import React from 'react'
// components
import { Header } from '../../components'
// pages
import { Contact, About, Service, Patient, Gallery } from '../../pages'

const Home = () => {
  return (
    <>
      <Header />
      <section >
      <About />
      </section>
      
      <Service />
      <Patient />
      <Contact />
      < Gallery />

    </>
  )
}

export default Home

