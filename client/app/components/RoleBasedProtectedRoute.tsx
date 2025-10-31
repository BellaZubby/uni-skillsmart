"use client"
import React, { useEffect } from 'react'
import { UserRole } from '../collections/types';
import { useRouter } from 'next/navigation';
import { useAuth } from '../hooks/AuthContext';


type Props = {
    children: React.ReactNode;
    allowedRoles: UserRole[];
}
const RoleBasedProtectedRoute = ({children, allowedRoles}: Props) => {

    const router = useRouter();
    const {isAuthenticated, user} = useAuth();


    useEffect(() => {

        if (!isAuthenticated) {
            router.replace("/login");
            return;
        }

        if(user && !allowedRoles.includes(user.role)) {
            router.replace("/unauthorized");
            return;
        }

        if (!isAuthenticated || !user || !allowedRoles.includes(user.role)) return;

    }, [isAuthenticated, user, allowedRoles, router]);
  return <>{children}</>
}

export default RoleBasedProtectedRoute;