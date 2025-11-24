"use client"

// Prevents unauthenticated users from accessing certain pages

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

type Props = {
    children: React.ReactNode
}
const ProtectedRoute = ({children}: Props) => {
    const router = useRouter();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    
    useEffect(() => {
      if (!isAuthenticated) {
        router.replace("/login");
      }
    }, [isAuthenticated]);

  return isAuthenticated ? <>{children}</>: null;
}

export default ProtectedRoute