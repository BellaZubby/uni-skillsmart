"use client";
import React from "react";
import ClientSidebar from "./dashboardSideNav/ClientSidebar";
import ProviderSidebar from "./dashboardSideNav/ProviderSidebar";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <div>
      <div className="w-full py-20 bg-primary-100"></div>
      {/* role-based sidebar */}
      <div className="grid grid-cols-5 justify-center gap-3">
        <aside className="col-span-1 bg-red-400">
          {user?.role === "client" && <ClientSidebar />}
          {user?.role === "provider" && <ProviderSidebar />}
        </aside>
        <main className="col-span-4 bg-yellow-800">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
