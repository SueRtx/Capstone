import React from 'react'
// components
import { Header } from '../../components'
// pages
import { Contact, About, Service, Patient } from '../../pages'

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

    </>
  )
}

export default Home

