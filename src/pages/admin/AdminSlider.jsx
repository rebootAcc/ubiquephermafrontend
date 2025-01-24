import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminDashboardTemplate from "../../templates/AdminDashboardTemplate";
import ManageSliders from "../../components/admin/adminslider/ManageSliders";
import LogoutButton from "../../components/admin/adminpanel/LogoutButton";
import AddSliderForm from "../../components/admin/adminslider/AddSliderForm";

const AddAndManageSlider = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    fetchSliders();
  }, []);

  const fetchSliders = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/sliders/get`
      );
      setSliders(response.data);
    } catch (error) {
      console.error("Error fetching sliders:", error);
    }
  };

  return (
    <AdminDashboardTemplate>
      <div className="flex justify-end items-center gap-6 w-full">
        <LogoutButton />
      </div>
      <div className="p-4 flex flex-col gap-6">
        <AddSliderForm fetchSliders={fetchSliders} />

        <ManageSliders sliders={sliders} fetchSliders={fetchSliders} />
      </div>
    </AdminDashboardTemplate>
  );
};

export default AddAndManageSlider;
