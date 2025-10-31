import React from 'react'
import Logo from '../Logo'
import UserAvatar from '../UserAvatar'


interface AuthNavProps {
    handleLogoClick: () => void;
}
const AuthNavbar = ({handleLogoClick}: AuthNavProps) => {
  return (
    <header className="sticky top-0 z-50 font-cabin">
        <nav className="max-w-7xl mx-auto px-10 lg:px-8 py-5 flex justify-between items-center">
        <div onClick={handleLogoClick}>
            <Logo/>
        </div>
        <div>
            <UserAvatar/>
        </div>
        </nav>
    </header>
  )
}

export default AuthNavbar