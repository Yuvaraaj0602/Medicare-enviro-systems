import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Process from './Components/Process'
import Clients from './Components/Clients'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

export default function HomePage() {
  return (
    <>
     <Home />
      <About />
      <Services />
      <Process />
      <Clients/>
      <Contact/>
      <Footer/>

    </>
  )
}
