// components/navbar/ProviderNavbar.tsx
import { providerNavList } from '@/app/collections/data';
import UserAvatar from '../UserAvatar';
import AuthNavbar from './AuthNavbar';
import AuthUserNavLink from './AuthUserNavLink';
import RoleBasedProtectedRoute from '../RoleBasedProtectedRoute';

const ProviderSidebar = () => {
  
  return (
    <RoleBasedProtectedRoute allowedRoles={["provider"]}>
       <div className="flex flex-col gap-6">
      {
        providerNavList.map((nav, idx) => (
          <AuthUserNavLink key={idx} to={nav.to} label={nav.label}/>
        ))
      }
    </div>
    </RoleBasedProtectedRoute>
    

  );
};

export default ProviderSidebar