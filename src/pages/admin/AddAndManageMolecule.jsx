import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminDashboardTemplate from "../../templates/AdminDashboardTemplate";
import LogoutButton from "../../components/admin/adminpanel/LogoutButton";
import AddMolecule from "../../components/admin/adminmolecule/AddMolecule";
import ManageMolecules from "../../components/admin/adminmolecule/ManageMolecule";

const AddAndManageMolecule = () => {
  const [molecules, setMolecules] = useState([]);

  useEffect(() => {
    fetchMolecules();
  }, []);

  const fetchMolecules = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/molecules/get`
      );
      setMolecules(response.data);
    } catch (error) {
      console.error("Error fetching molecules:", error);
    }
  };

  return (
    <AdminDashboardTemplate>
      <div className="flex justify-end items-center gap-6 w-full">
        <LogoutButton />
      </div>
      <div className="p-4 flex flex-col gap-6">
        <AddMolecule fetchMolecules={fetchMolecules} />

        {/* Molecule management with pagination */}
        <ManageMolecules
          molecules={molecules}
          fetchMolecules={fetchMolecules}
        />
      </div>
    </AdminDashboardTemplate>
  );
};

export default AddAndManageMolecule;
