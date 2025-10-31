"use client"
import React from 'react'
import { useAuth } from '../hooks/AuthContext'
import ClientSidebar from './Navbar/ClientSidebar';
import ProviderSidebar from './Navbar/ProviderSidebar';

interface DashboardLayoutProps {
    children: React.ReactNode
}

const DashboardLayout = ({children}: DashboardLayoutProps) => {
    // access users role
    const {user} = useAuth();
  return (
    <div>
        <div className='w-full py-20 bg-primary-100'>

        </div>
        {/* role-based sidebar */}
        <div className='grid grid-cols-5 justify-center gap-3'>
        <aside className='col-span-1 bg-red-400'>
            {user.role === "client" && <ClientSidebar/>}
            {user.role === "provider" && <ProviderSidebar/>}
        </aside>
        <main className='col-span-4 bg-yellow-800'>{children}</main>
        </div>
    </div>
  )
}

export default DashboardLayout