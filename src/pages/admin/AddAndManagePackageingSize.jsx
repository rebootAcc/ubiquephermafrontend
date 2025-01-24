import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminDashboardTemplate from "../../templates/AdminDashboardTemplate";
import LogoutButton from "../../components/admin/adminpanel/LogoutButton";
import AddNewPackageingSize from "../../components/admin/adminpackageingsize/AddNewPackageingSize";
import ManagePackagingSize from "../../components/admin/adminpackageingsize/ManagePackagingSizes";

const AddAndManagePackagingSize = () => {
  const [packagingSizes, setPackagingSizes] = useState([]);

  useEffect(() => {
    fetchPackagingSizes();
  }, []);

  const fetchPackagingSizes = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/packagingsize/get`
      );
      setPackagingSizes(response.data);
    } catch (error) {
      console.error("Error fetching packaging sizes:", error);
    }
  };

  return (
    <AdminDashboardTemplate>
      <div className="flex justify-end items-center gap-6 w-full">
        <LogoutButton />
      </div>
      <div className="p-4 flex flex-col gap-6">
        <AddNewPackageingSize fetchPackagingSizes={fetchPackagingSizes} />

        {/* Packaging size management with pagination */}
        <ManagePackagingSize
          packagingSizes={packagingSizes}
          fetchPackagingSizes={fetchPackagingSizes}
        />
      </div>
    </AdminDashboardTemplate>
  );
};

export default AddAndManagePackagingSize;
