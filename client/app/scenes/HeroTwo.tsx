import React, { useEffect } from 'react'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import ServicesCarousel from '../components/ServicesCarousel';

const HeroTwo = () => {
  useEffect(() => {
    const overlay = document.getElementById("overlay");

    const handleMove = (e: MouseEvent) => {
      const x = e.clientX; // reads the horizontal cursor position (in pexels) relative to the viewport
      const y = e.clientY; // reads the vertical cursor position (in pexel)

      // spotlight effect using radical gradient
      if(overlay) {
        overlay.style.background = `radial-gradient(circle 150px at ${x}px ${y}px, transparent, rgba(0,0,0,0.6))`
      }
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
  
  return (
    <section id='home' className='min-h-screen w-full grid grid-cols-2'>
        {/* left */}
        <div className='flex flex-col justify-center gap-4 px-5'>
          <h1 className="text-4xl font-extrabold font-shareTech text-primary-100">
          Verified Skills. <br /> Trusted Bookings. Empowering Students.
        </h1>
        <p className="text-[16px] font-inter">
          A secure campus market place where students offer services, earn
          income, and build real-world experience.
        </p>
        {/* <Button onClick={}>Explore Skills</Button> */}
        <div className="flex items-center gap-10 font-cabin">
          <Link
            href={"/register/client"}
            className="bg-primary-100 py-3 px-3 rounded text-white font-medium transition-colors duration-300 hover:bg-primary-100/80 hover:text-gray-300"
          >
            Start booking services
          </Link>
          <Link
            href={"/register/provider"}
            className="bg-primary-200 py-3 px-3 rounded font-medium transition-colors duration-300 hover:bg-primary-200/80 hover:text-gray-500"
          >
            Become a verified provider
          </Link>
        </div>
        {/* service carousel */}
        <ServicesCarousel/>
        </div>
        {/* right */}
        <div className='relative clip'>
            <CldImage src='https://res.cloudinary.com/dxveggtpi/image/upload/v1764069653/pexels-yankrukov-8199708_lsh4gb.jpg' alt='hero-image' fill className='object-cover'/>
            <div id="overlay" className='bg-black/70 absolute inset-0 transition-all duration-500 ease-in-out'></div>
        </div>
    </section>
  )
}

export default HeroTwo