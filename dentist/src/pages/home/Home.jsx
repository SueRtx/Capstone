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
      < Gallery />
      <Service />
      <Patient />
      <Contact />
    </>
  )
}

export default Home

