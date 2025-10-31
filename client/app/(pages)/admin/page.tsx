import RoleBasedProtectedRoute from '@/app/components/RoleBasedProtectedRoute'
import React from 'react'

const Admin = () => {
  return (
    <RoleBasedProtectedRoute allowedRoles={["admin"]}>
          <div>Admin</div>
    </RoleBasedProtectedRoute>
  
  )
}

export default Admin