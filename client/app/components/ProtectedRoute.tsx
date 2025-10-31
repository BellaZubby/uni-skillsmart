"use client"

// Prevents unauthenticated users from accessing certain pages

import React, { useEffect } from 'react'
import { useAuth } from '../hooks/AuthContext'
import { useRouter } from 'next/navigation'

type Props = {
    children: React.ReactNode
}
const ProtectedRoute = ({children}: Props) => {
    const router = useRouter();
    const {isAuthenticated} = useAuth();
    
    useEffect(() => {
      if (!isAuthenticated) {
        router.replace("/login");
      }
    }, [isAuthenticated]);

  return isAuthenticated ? <>{children}</>: null;
}

export default ProtectedRoute