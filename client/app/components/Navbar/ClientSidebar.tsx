// components/navbar/ClientNavbar.tsx

import { clientNavList } from "@/app/collections/data";
import AuthUserNavLink from "./AuthUserNavLink";

const ClientSidebar = () => {
  return(
    
         <div className="flex flex-col gap-6">
      {
        clientNavList.map((nav, idx) => (
          <AuthUserNavLink key={idx} to ={nav.to} label={nav.label}/>
        ))
      }
    </div>
    
 
  )
};

export default ClientSidebar