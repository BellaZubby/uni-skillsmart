
import { AnimatePresence, motion } from "framer-motion";
import NavLink from "./NavLink";
// import { navList } from "@/app/collections/data";
import LoginDropdown from "./LoginDropdown";
import {
  containerVariants,
  linkVariants,
} from "../../shared/motion";
import { FaXmark } from "react-icons/fa6";
import Button from "../Button";
import { NavLinkProps } from "@/app/collections/types";

interface MobileProps {
  showLoginMenu: boolean;
  toggleLoginMenu: () => void;
  toggleMobileMenu: () => void;
  navList: NavLinkProps[];
  // className: string
}
const MobileNav = ({
  showLoginMenu,
  toggleLoginMenu,
  toggleMobileMenu,
  navList,
  // className
}: MobileProps) => {
  return (
    <div className={`fixed left-0 bottom-0 z-999 h-full w-full flex items-end bg-black/40`}>
      <motion.div
        variants={containerVariants}
        initial="closed"
        animate="open"
        exit="closed"
        className="h-screen bg-[#F3F4F6] drop-shadow-xl w-[50%]"
      >
        <div className="shadow-lg flex items-center justify-between px-4 py-4">
          <span className="border rounded-full p-2.5 border-gray-400">
            <FaXmark
              className="w-6 h-6 ssm:w-7 ssm:h-7 text-primary-100"
              onClick={toggleMobileMenu}
            />
          </span>
        </div>

        <motion.div
          className="flex flex-col gap-7 mt-7 pl-7 ssm:pl-9"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={linkVariants}
        >
          {navList.map((nav, idx) => (
            <NavLink
              key={idx}
              to={nav.to}
              label={nav.label}
              toggleMobileMenu={toggleMobileMenu}
            />
          ))}

          {/* Login Button */}
          <div className="relative">
            <Button onClick={toggleLoginMenu}>Login</Button>

            {/* Animated Dropdown */}
            <AnimatePresence>
              {showLoginMenu && <LoginDropdown />}
              {/* {showLoginMenu && <MobileLoginDropdown/>} */}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MobileNav;
