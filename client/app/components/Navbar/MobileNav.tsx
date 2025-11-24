import { AnimatePresence, motion } from "framer-motion";
import NavLink from "./NavLink";
// import { navList } from "@/app/collections/data";
import LoginDropdown from "./LoginDropdown";
import { containerVariants, linkVariants } from "../../shared/motion";
import { FaXmark } from "react-icons/fa6";
import Button from "../Button";
import { NavLinkProps } from "@/app/collections/types";
import { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { authList } from "@/app/collections/data";
import AuthUserNavLink from "./AuthUserNavLink";
import { logout } from "@/app/store/authSlice";

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
}: // className
MobileProps) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const handleLogout = () => {
    dispatch(logout());
    toggleMobileMenu();
  };
  return (
    <div
      className={`fixed left-0 bottom-0 z-1000 h-full w-full flex items-end bg-black/50`}
    >
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
          className="flex flex-col gap-7 mt-7 pl-7 pr-7 ssm:pl-9"
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
          {isAuthenticated ? (
            <>
              <hr className="mt-5 text-gray-400" />
              <div>
                <div className="flex flex-col">
                  {authList.map((link, idx) => (
                    <AuthUserNavLink
                      key={idx}
                      to={link.to}
                      label={link.label}
                      toggleMobileMenu={toggleMobileMenu}
                    />
                  ))}
                </div>
                <button
                  onClick={handleLogout}
                  className="mt-5 font-cabin text-[17.5px] text-red-600 hover:text-primary-800 cursor-pointer transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className="relative">
              <Button onClick={toggleLoginMenu}>Login</Button>

              {/* Animated Dropdown */}
              <AnimatePresence>
                {showLoginMenu && <LoginDropdown toggleMobileMenu={toggleMobileMenu}/>}
                {/* {showLoginMenu && <MobileLoginDropdown/>} */}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MobileNav;
