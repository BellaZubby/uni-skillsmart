import React, { forwardRef } from 'react'
import {AnimatePresence, motion} from "framer-motion";
import NavLink from './NavLink';
import { navList } from '@/app/collections/data';
import LoginDropdown from './LoginDropdown';

interface MobileProps {
    showLoginMenu: boolean;
    toggleLoginMenu: () => void;
    toggleMobileMenu: () => void;
}
const MobileNav = ({showLoginMenu, toggleLoginMenu, toggleMobileMenu}: MobileProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="absolute top-16 left-0 w-full bg-white shadow-md z-40 px-6 py-4 flex flex-col space-y-4"
    >
      {/* <NavLink href="#home" label="Home" />
      <NavLink href="#how-it-works" label="How It Works" />
      <NavLink href="#explore" label="Explore Skills" />
      <NavLink href="#benefits" label="Benefits" />
      <NavLink href="#testimonials" label="Testimonials" />
      <NavLink href="#contact" label="Contact" />
      <NavLink href="/login" label="Login" scroll={false} /> */}
      
        {
            navList.map((nav, idx) => (
               <NavLink key={idx} to={nav.to} label={nav.label} toggleMobileMenu={toggleMobileMenu}/>  
            ))
          }

          {/* Login Button */}
          <div className="relative">
            <button
              onClick={toggleLoginMenu}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>

            {/* Animated Dropdown */}
            <AnimatePresence>
              {showLoginMenu && <LoginDropdown/>}
            </AnimatePresence>
          </div>
    </motion.div>

  );
}


export default MobileNav