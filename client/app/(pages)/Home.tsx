import React from 'react'
import HowItWorks from '../scenes/HowItWorks'
import Explore from '../scenes/Explore'
import Benefits from '../scenes/Benefits'
import Testimonials from '../scenes/Testimonials'
import Contact from '../scenes/Contact'
import HeroTwo from '../scenes/DesktopHero'
import useMediaQuery from '../hooks/useMediaQuery'
import DesktopHero from '../scenes/DesktopHero'
import MobileHero from '../scenes/MobileHero'

const HomePage = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1024px)");
  return (
    <div>
        {/* <Hero/> */}
        {isAboveMediumScreens ? <DesktopHero/> : <MobileHero/>}
        <HowItWorks/>
        <Explore/>
        <Benefits/>
        <Testimonials/>
        <Contact/>
    </div>
  )
}

export default HomePage