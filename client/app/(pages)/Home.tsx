import React from 'react'
import Hero from '../scenes/Hero'
import HowItWorks from '../scenes/HowItWorks'
import Explore from '../scenes/Explore'
import Benefits from '../scenes/Benefits'
import Testimonials from '../scenes/Testimonials'
import Contact from '../scenes/Contact'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <HowItWorks/>
        <Explore/>
        <Benefits/>
        <Testimonials/>
        <Contact/>
    </div>
  )
}

export default HomePage