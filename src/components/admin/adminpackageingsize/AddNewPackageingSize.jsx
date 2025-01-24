import axios from "axios";
import React, { useState } from "react";

const AddNewPackageingSize = ({ fetchPackagingSizes }) => {
  const [packagingSizeName, setPackagingSizeName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/packagingsize/create`,
        { packagingsizeName: packagingSizeName }
      );

      if (response.status === 201) {
        setMessage(response.data.message);
        setPackagingSizeName("");
        fetchPackagingSizes();
      } else {
        setError(response.data.error || "Failed to create packaging size");
      }
    } catch (error) {
      console.error("Error creating packaging size:", error);
      setError(error.response?.data?.error || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2 py-4">
      <label className="text-lg text-black font-medium">
        Packaging Size Name
      </label>
      <div className="w-full flex items-center gap-4">
        <input
          type="text"
          value={packagingSizeName}
          onChange={(e) => setPackagingSizeName(e.target.value)}
          className="w-[30%] h-[3.5rem] p-2 focus:outline-none outline-[#191919] bg-[white] text-black rounded-md border border-[#CCCCCC] flex-1"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-[15%] h-[3.5rem] bg-custom-blue rounded-md shadow-custom text-lg text-[white] font-medium flex justify-center items-center"
        >
          {loading ? "Adding..." : "Submit"}
        </button>
      </div>
      {error && <p className="text-red-600">{error}</p>}
      {message && <p className="text-black">{message}</p>}
    </form>
  );
};

export default AddNewPackageingSize;
