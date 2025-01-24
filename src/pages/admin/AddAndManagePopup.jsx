import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminDashboardTemplate from "../../templates/AdminDashboardTemplate";
import LogoutButton from "../../components/admin/adminpanel/LogoutButton";
import ManagePopup from "../../components/admin/adminpopup/ManagePopup";
import AddNewPopUp from "../../components/admin/adminpopup/AddNewPopUp";

const AddAndManagePopup = () => {
  const [popups, setPopups] = useState([]);

  useEffect(() => {
    fetchPopups();
  }, []);

  // Fetch popups from the backend
  const fetchPopups = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/popups/get`
      );
      setPopups(response.data);
    } catch (error) {
      console.log("Failed to load popups.", error.message);
    }
  };

  return (
    <AdminDashboardTemplate>
      <div className="flex justify-end items-center gap-6 w-full">
        <LogoutButton />
      </div>
      <div className="p-4 flex flex-col gap-6">
        {/* Manage popups (listing, editing, deleting, toggling active status) */}
        <AddNewPopUp fetchPopups={fetchPopups} />
        <ManagePopup popups={popups} fetchPopups={fetchPopups} />
      </div>
    </AdminDashboardTemplate>
  );
};

export default AddAndManagePopup;
