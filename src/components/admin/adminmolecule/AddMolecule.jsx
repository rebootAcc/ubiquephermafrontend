import React, { useState } from "react";

const AddMolecule = ({ fetchMolecules }) => {
  const [moleculeName, setMoleculeName] = useState("");
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
        `${import.meta.env.VITE_BASE_URL}/api/molecules/create`,
        { moleculeName }
      );

      if (response.status === 201) {
        setMessage(response.data.message);
        setMoleculeName("");
        fetchMolecules();
      } else {
        setError(response.data.error || "Failed to create molecule");
      }
    } catch (error) {
      console.error("Error creating molecule:", error);
      setError(error.response?.data?.error || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2 py-4">
      <label className="text-lg text-black font-medium">Molecule Name</label>
      <div className="w-full flex items-center gap-4">
        <input
          type="text"
          value={moleculeName}
          onChange={(e) => setMoleculeName(e.target.value)}
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

export default AddMolecule;
