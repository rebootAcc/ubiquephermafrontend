import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminDashboardTemplate from "../../templates/AdminDashboardTemplate";
import LogoutButton from "../../components/admin/adminpanel/LogoutButton";
import AddNewStrength from "../../components/admin/adminstrength/AddNewStrength";
import ManageStrengths from "../../components/admin/adminstrength/ManageStrengths";

const AddAndManageStrength = () => {
  const [strengths, setStrengths] = useState([]);

  useEffect(() => {
    fetchStrengths();
  }, []);

  const fetchStrengths = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/strengths/get`
      );
      setStrengths(response.data);
    } catch (error) {
      console.error("Error fetching strengths:", error);
    }
  };

  return (
    <AdminDashboardTemplate>
      <div className="flex justify-end items-center gap-6 w-full">
        <LogoutButton />
      </div>
      <div className="p-4 flex flex-col gap-6">
        <AddNewStrength fetchStrengths={fetchStrengths} />

        {/* Strength management with pagination */}
        <ManageStrengths
          strengths={strengths}
          fetchStrengths={fetchStrengths}
        />
      </div>
    </AdminDashboardTemplate>
  );
};

export default AddAndManageStrength;
