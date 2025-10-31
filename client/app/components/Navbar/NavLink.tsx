// Reusable link component
import { Link } from "react-scroll";
import { NavLinkProps } from "@/app/collections/types";


const NavLink = ({ to, label, toggleMobileMenu }: NavLinkProps) => {
  return (
    <Link
      to={to} // the href of section/page
      spy={true} // watches scroll position
      smooth={true} // enables smooth scroll
      offset={-100} // accounts for sticky navbar height
      duration={500}
      activeClass="active-link" // applies style when section is in view
      onClick={toggleMobileMenu}
      className="font-cabin text-[16px] text-primary-200 hover:text-primary-100 cursor-pointer transition-colors duration-200"
    >
      
        {label}
      
    </Link>
  );
};

export default NavLink;
