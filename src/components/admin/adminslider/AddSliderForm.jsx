import axios from "axios";
import React, { useState } from "react";

const AddSliderForm = ({ fetchSliders }) => {
  const [sliderName, setSliderName] = useState("");
  const [sliderImage, setSliderImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    if (sliderImage && sliderImage.size > 1 * 1024 * 1024) {
      setError("Image size should not exceed 1MB.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("sliderName", sliderName);
    formData.append("sliderImage", sliderImage);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/sliders/create`,
        formData
      );

      if (response.status === 201) {
        setMessage("Slider created successfully.");
        setSliderName("");
        setSliderImage(null);
        fetchSliders();
      }
    } catch (error) {
      console.log(error);

      setError("Require All Filed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2 py-4">
      <label className="text-lg text-black font-medium">Slider</label>
      <div className="w-full flex items-center gap-4">
        <input
          type="text"
          value={sliderName}
          onChange={(e) => setSliderName(e.target.value)}
          className="xl:w-[40%] lg:w-[50%] sm:w-[60%] h-[3.5rem] p-2 focus:outline-none outline-[#191919] bg-[white] text-black rounded-md border border-[#CCCCCC]"
          required
        />
        <input
          type="file"
          onChange={(e) => setSliderImage(e.target.files[0])}
          className="xl:w-[40%] lg:w-[50%] sm:w-[60%] h-[3.5rem] p-2 focus:outline-none outline-[#191919] bg-[white] text-black rounded-md border border-[#CCCCCC]"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="xl:w-[15%] lg:w-[25%] sm:w-[30%] h-[3.5rem] bg-custom-blue rounded-md shadow-custom text-lg text-[white] font-medium flex justify-center items-center"
        >
          {loading ? "Uploading..." : "Submit"}
        </button>
      </div>
      {error && <p className="text-red-600">{error}</p>}
      {message && <p className="text-black">{message}</p>}
    </form>
  );
};

export default AddSliderForm;
