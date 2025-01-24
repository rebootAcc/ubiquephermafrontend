import React, { useState, useEffect } from "react";
import axios from "axios";
import LogoutButton from "../../components/admin/adminpanel/LogoutButton";
import AdminDashboardTemplate from "../../templates/AdminDashboardTemplate";
import ManageCategories from "../../components/admin/admincategory/ManageCategories";
import AddNewCategory from "../../components/admin/admincategory/AddNewCategory";

const AddAndManageCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/categories/get`
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <AdminDashboardTemplate>
      <div className="flex justify-end items-center  gap-6 w-full">
        <LogoutButton />
      </div>
      <div className="p-4 flex flex-col gap-6">
        <AddNewCategory fetchCategories={fetchCategories} />

        {/* Render the ManageCategories component and pass the fetched categories */}
        <ManageCategories
          categories={categories}
          fetchCategories={fetchCategories}
        />
      </div>
    </AdminDashboardTemplate>
  );
};

export default AddAndManageCategory;
