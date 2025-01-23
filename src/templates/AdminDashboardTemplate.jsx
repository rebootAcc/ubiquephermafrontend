import React, { useEffect, useState } from "react";
import AdminSideHeader from "../components/admin/adminpanel/AdminSideHeader";

const AdminDashboardTemplate = ({ children }) => {
  const [isTokenVerified, setIsTokenVerified] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsTokenVerified(false);
      setTimeout(() => {
        alert("You are not logged in");
        window.location.href = "/";
      }, 0);
      return;
    }
    setIsTokenVerified(true);
  }, []);

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  if (!isTokenVerified) {
    return <div></div>;
  }

  return (
    <div className="flex flex-col w-full h-full bg-[#EDF4F7] overflow-hidden">
      <div className="flex flex-row h-screen  w-full relative">
        <div className="w-[20%] xlg:w-[18%]">
          <AdminSideHeader
            isMobileSidebarOpen={isMobileSidebarOpen}
            closeMobileSidebar={closeMobileSidebar}
          />
        </div>
        <div className="w-[80%] xlg:w-[82%] p-4 overflow-auto bg-[#EDF4F7] no-scrollbar">
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardTemplate;
