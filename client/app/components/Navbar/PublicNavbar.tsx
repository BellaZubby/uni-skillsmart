"use client";
import NavLink from "./NavLink"; // represents each link items
import { navList } from "@/app/collections/data"; // list of the properties of each nav menu
import LoginDropdown from "./LoginDropdown";
import { AnimatePresence } from "framer-motion";
import MobileNav from "./MobileNav";
import { FaBars} from "react-icons/fa6";
import Button from "../Button";
import { useAuth } from "@/app/hooks/AuthContext";
import Logo from "../Logo";

interface PublicNavProps {
  showLoginMenu: boolean;
  showMobileMenu: boolean
  toggleLoginMenu: () => void;
  toggleMobileMenu: () => void;
  handleLogoClick: () => void;
}
const PublicNavbar = ({showLoginMenu, showMobileMenu, toggleLoginMenu, toggleMobileMenu, handleLogoClick}: PublicNavProps) => {
  
//  const {isAuthenticated, user} = useAuth();

  return (
    <header className="sticky top-0 z-50 font-cabin">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex justify-between items-center">
        {/* Logo */}
        <div onClick ={handleLogoClick} className="cursor-pointer hidden md:block">
         <Logo/>
        </div>


        {/* !Auth */}

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {
            navList.map((nav, idx) => (
               <NavLink key={idx} to={nav.to} label={nav.label}/>  
            ))
          }

          {/* Login Button */}
          <div className="relative">
            <Button onClick={toggleLoginMenu}>Login</Button>

            {/* Animated Dropdown */}
            <AnimatePresence>
              {showLoginMenu && <LoginDropdown/>}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          {/* You’ll build this in the next step */}

           <FaBars  className="w-6 h-6 ssm:w-7 ssm:h-7 text-primary-100 cursor-pointer" onClick={toggleMobileMenu}/>
          
           <AnimatePresence>
            {
              showMobileMenu &&  <MobileNav navList={navList} showLoginMenu={showLoginMenu} toggleLoginMenu={toggleLoginMenu} toggleMobileMenu={toggleMobileMenu}/>
            }
               
          </AnimatePresence>
            
        </div>
            
             
            
      </nav>
    </header>
  );
};

export default PublicNavbar;
