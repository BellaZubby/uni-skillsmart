"use client";

import React, { useEffect, useRef, useState } from "react";
import NavLink from "./NavLink"; // represents each link items
import { navList } from "@/app/collections/data"; // list of the properties of each nav menu
import LoginDropdown from "./LoginDropdown";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { FaBars, FaX } from "react-icons/fa6";

const PublicNavbar = () => {
  const [showLoginMenu, setShowLoginMenu] = useState(false); // to track when  the login dropdown is visible or not
  const [showMobileMenu, setShowMobileMenu] = useState(false); // to track when  the login dropdown is visible or not
  const toggleLoginMenu = () => setShowLoginMenu((prev) => !prev); // controls the visibility of the dropdown
  const toggleMobileMenu = () => setShowMobileMenu((prev) => !prev); // controls the visibility of the dropdown


  const dropdownRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setShowLoginMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href={"#home"} className="">
          <Image src={"/logo.png"} alt="Uni-SkillsMart-logo" width={100} height={100}/>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {/* <NavLink href="#home" label="Home" />
          <NavLink href="#how-it-works" label="How It Works" />
          <NavLink href="#explore" label="Explore Skills" />
          <NavLink href="#benefits" label="Benefits" />
          <NavLink href="#testimonials" label="Testimonials" />
          <NavLink href="#contact" label="Contact" /> */}
          {
            navList.map((nav, idx) => (
               <NavLink key={idx} to={nav.to} label={nav.label}/>  
            ))
          }

          {/* Login Button */}
          <div ref={dropdownRef} className="relative">
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
        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          {/* You’ll build this in the next step */}
          <span className="text-sm text-gray-500 cursor-pointer" onClick={toggleMobileMenu}>
            {showMobileMenu ? <FaX/> : <FaBars/>}
          </span>
        </div>
        
            <AnimatePresence>
                {showMobileMenu && <MobileNav showLoginMenu={showLoginMenu} toggleLoginMenu={toggleLoginMenu} toggleMobileMenu={toggleMobileMenu}/>}
            </AnimatePresence>

      </nav>
    </header>
  );
};

export default PublicNavbar;
