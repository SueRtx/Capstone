import React from 'react'
import { Header } from '../../components'
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

