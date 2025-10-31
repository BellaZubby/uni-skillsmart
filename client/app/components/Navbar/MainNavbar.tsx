"use client"
import { useAuth } from '@/app/hooks/AuthContext';
import PublicNavbar from './PublicNavbar';
import ClientNavbar from './ClientSidebar';
import ProviderNavbar from './ProviderSidebar';
import UserAvatar from '../UserAvatar';
import AuthNavbar from './AuthNavbar';
import { usePathname, useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { scroller, scrollSpy } from 'react-scroll';

const Navbar = () => {
  const { isAuthenticated, user} = useAuth();
   const router = useRouter();
   const pathname = usePathname();

  const [showLoginMenu, setShowLoginMenu] = useState(false); // to track when  the login dropdown is visible or not
  const [showMobileMenu, setShowMobileMenu] = useState(false); // to track when  the login dropdown is visible or not
  const toggleLoginMenu = () => setShowLoginMenu((prev) => !prev); // controls the visibility of the dropdown
  const toggleMobileMenu = () => setShowMobileMenu((prev) => !prev); // controls the visibility of the dropdown


  // logo navigation
    const handleLogoClick = () => {
      if (pathname === "/") {
        // already on the landing page, scroll to the top/hero
        scroller.scrollTo("home", {
          duration: 500,
          smooth: true,
          offset: -100,
        });
      } else {
        router.push("/");
      }
    }

    // to ensure the mobile menu tracks the active link even after mounting and unmounting component
    useEffect(() => {
      if (showMobileMenu) {
        const timeout = setTimeout(() => {
          scrollSpy.update();
        }, 350);
        return () => clearTimeout(timeout);
      }
    }, [showMobileMenu]);

    // create an array of routes that I do not want the navbar to appear on
    const hiddenRoutes = [
      "/dashboard",
      "/profile",
      "/register",
      "/verify",
      "/login",
      "/forgot-password"
    ]
    
    if (hiddenRoutes.includes(pathname)) {
      return null; // display not navbar
    }
  if (!isAuthenticated) return <PublicNavbar handleLogoClick={handleLogoClick} showLoginMenu={showLoginMenu} showMobileMenu={showMobileMenu} toggleLoginMenu={toggleLoginMenu} toggleMobileMenu={toggleMobileMenu}/>;
  if (isAuthenticated) return <AuthNavbar handleLogoClick = {handleLogoClick}/>;
  return null;
};

export default Navbar