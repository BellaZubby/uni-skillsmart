"use client"
import PublicNavbar from './PublicNavbar';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { scroller, scrollSpy } from 'react-scroll';

const Navbar = () => {
   const router = useRouter();
   const pathname = usePathname();

  const [showLoginMenu, setShowLoginMenu] = useState(false); // to track when  the login dropdown is visible or not
  const [showMobileMenu, setShowMobileMenu] = useState(false); // to track when  the mobile dropdown is visible or not
  const [isTopOfPage, setIsTopOfPage] =useState(false); // to control navbar appearance when a user scrolls off the top of the page
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  
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

    // closing the login dropdown menu after a navigation
    useEffect(() => {
      setShowLoginMenu(false); // close dropdown when route changes
    }, [pathname])

    
    // create an array of routes that I do not want the navbar to appear on
    const hiddenRoutes = [
      "/dashboard",
      "/profile",
      "/register",
      "/verify",
      "/login/client",
      "/login/provider",
      "/register/client",
      "/register/provider",
      "/forgot-password",
      "/verify-account"
    ]
    
  if (hiddenRoutes.includes(pathname)) return null;
  // if (!isAuthenticated) return <PublicNavbar handleLogoClick={handleLogoClick} isTopOfPage={isTopOfPage} showLoginMenu={showLoginMenu} showMobileMenu={showMobileMenu} toggleLoginMenu={toggleLoginMenu} toggleMobileMenu={toggleMobileMenu}/>;
  // if (isAuthenticated) return <AuthNavbar handleLogoClick = {handleLogoClick} isTopOfPage={isTopOfPage}/>;
  // return null;
  return (
    <>
      <PublicNavbar handleLogoClick={handleLogoClick} isTopOfPage={isTopOfPage} showLoginMenu={showLoginMenu} showMobileMenu={showMobileMenu} toggleLoginMenu={toggleLoginMenu} toggleMobileMenu={toggleMobileMenu}/>
    </>
  )
};

export default Navbar