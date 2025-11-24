"use client"
import { useState } from 'react'
import {motion} from "framer-motion";
import { authList} from '../collections/data';
import AuthUserNavLink from './Navbar/AuthUserNavLink';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../store/authSlice';

const UserAvatar = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);

    const initials = `${user?.firstName?.[0]}${user?.lastName?.[0]}`.toUpperCase();

    const handleLogout = () => {
        dispatch(logout());
    }
  return (
   
   <div className="relative ml-10">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="w-12 h-12 cursor-pointer rounded-full overflow-hidden border border-primary-200 font-bold bg-gray-100 flex items-center justify-center text-primary-100 text-[16px]"
      >
        {user?.imageUrl ? (
          <img src={user.imageUrl} alt="avatar" className="w-full h-full object-cover" />
        ) : (
          initials
        )}
      </button>
      {/* <p>{user?.role}</p> */}

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
            <button onClick={handleLogout} className="mt-3 font-cabin text-[17.5px] text-primary-100 hover:text-primary-100/80 cursor-pointer transition-colors duration-200">Logout</button>
        </motion.div>
      )}
    </div>

  )
}

export default UserAvatar