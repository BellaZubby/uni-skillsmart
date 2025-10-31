"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import { useAuth } from '../hooks/AuthContext';
import {motion} from "framer-motion";
import Link from 'next/link';
import { authList, userAvatarList } from '../collections/data';
import AuthUserNavLink from './Navbar/AuthUserNavLink';
import useMediaQuery from '../hooks/useMediaQuery';

const UserAvatar = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const {user} = useAuth();

    const initials = `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();

     const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");


    const handleLogout = () => {

    }
  return (
   
   <div className="relative">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="w-12 h-12 cursor-pointer rounded-full overflow-hidden border border-primary-200 font-bold bg-gray-100 flex items-center justify-center text-primary-100 text-[16px]"
      >
        {user.imageUrl ? (
          <img src={user.imageUrl} alt="avatar" className="w-full h-full object-cover" />
        ) : (
          initials
        )}
      </button>

      {open && (
        <motion.div  
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 0.3 }}
        className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 pl-3 py-5 text-primary-100 border-t-2 border-primary-200">
            <div className='flex flex-col'>
                {authList.map((link, idx)=> (
                    <AuthUserNavLink key={idx} to={link.to} label={link.label}/>
                ))}
            </div>
            <button onClick={handleLogout} className="mt-3 font-cabin text-[16px] text-primary-100 hover:text-primary-100/80 cursor-pointer transition-colors duration-200">Logout</button>
        </motion.div>
      )}
    </div>

  )
}

export default UserAvatar