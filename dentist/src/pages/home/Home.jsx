import React from 'react'
// components
import { Header } from '../../components'
// pages
import { Contact, About, Service } from '../../pages'

const Home = () => {
  return (
    <>
      <Header />
      <section className="section-about">
      <About />
      </section>
      <Service />
      <Contact />
    </>
  )
}

export default Home
