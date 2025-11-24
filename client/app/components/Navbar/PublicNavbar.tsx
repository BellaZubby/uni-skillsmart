"use client";
import NavLink from "./NavLink"; // represents each link items
import { navList } from "@/app/collections/data"; // list of the properties of each nav menu
import LoginDropdown from "./LoginDropdown";
import { AnimatePresence } from "framer-motion";
import MobileNav from "./MobileNav";
import { FaBars } from "react-icons/fa6";
import Button from "../Button";
import Logo from "../Logo";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import UserAvatar from "../UserAvatar";

interface PublicNavProps {
  showLoginMenu: boolean;
  showMobileMenu: boolean;
  toggleLoginMenu: () => void;
  toggleMobileMenu: () => void;
  handleLogoClick: () => void;
  isTopOfPage: boolean;
}
const PublicNavbar = ({
  showLoginMenu,
  showMobileMenu,
  toggleLoginMenu,
  toggleMobileMenu,
  handleLogoClick,
  isTopOfPage,
}: PublicNavProps) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const user = useSelector((state: RootState) => state.auth.user);
  const initials = `${user?.firstName?.[0] }${user?.lastName?.[0]}`.toUpperCase();

  return (
    <header className="sticky top-0 z-50 font-cabin">
      <nav
        className={`${
          isTopOfPage
            ? "bg-transparent"
            : "bg-white md:drop-shadow-2xl shadow-md md:shadow-none"
        } max-w-7xl mx-auto px-6 lg:px-8 py-5 flex justify-between items-center`}
      >
        {/* Logo */}
        <div onClick={handleLogoClick} className="cursor-pointer block">
          <Logo />
        </div>

        {/* !Auth */}

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navList.map((nav, idx) => (
            <NavLink key={idx} to={nav.to} label={nav.label} />
          ))}
          {/* Login Button */}

          {/* <div className="relative">
            <Button onClick={toggleLoginMenu}>Login</Button>

            <AnimatePresence>
              {showLoginMenu && <LoginDropdown/>}
            </AnimatePresence>
          </div> */}

          {isAuthenticated ? (
            <UserAvatar />
          ) : (
            <div className="relative">
              <Button onClick={toggleLoginMenu}>Login</Button>

              <AnimatePresence>
                {showLoginMenu && <LoginDropdown toggleMobileMenu={toggleMobileMenu} />}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          {/* You’ll build this in the next step */}

          {/* <FaBars  className="w-6 h-6 ssm:w-7 ssm:h-7 text-primary-100 cursor-pointer" onClick={toggleMobileMenu}/> */}
          {isAuthenticated ? (
            <div onClick={toggleMobileMenu} className="w-12 h-12 cursor-pointer rounded-full overflow-hidden border border-primary-200 font-bold bg-gray-100 flex items-center justify-center text-primary-100 text-[16px]">
              {user?.imageUrl ? (
                <img
                  src={user.imageUrl}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                initials
              )}
            </div>
          ) : (
            <FaBars
              className="w-6 h-6 ssm:w-7 ssm:h-7 text-primary-100 cursor-pointer"
              onClick={toggleMobileMenu}
            />
          )}

          <AnimatePresence>
            {showMobileMenu && (
              <MobileNav
                navList={navList}
                showLoginMenu={showLoginMenu}
                toggleLoginMenu={toggleLoginMenu}
                toggleMobileMenu={toggleMobileMenu}
              />
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default PublicNavbar;
