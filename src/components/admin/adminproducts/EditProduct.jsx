import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const EditProduct = ({ productId, onClose, onProductUpdated }) => {
  const [formData, setFormData] = useState({
    brandName: "",
    categoryName: "",
    moleculeName: "",
    strengthName: "",
    packagingsizeName: "",
    productPrice: "",
    productImage: null,
    productpts: "",
    productptr: "",
  });
  const [moleculeStrengthList, setMoleculeStrengthList] = useState([]);
  const [previewImage, setPreviewImage] = useState("");
  const [categories, setCategories] = useState([]);
  const [molecules, setMolecules] = useState([]);
  const [strengths, setStrengths] = useState([]);
  const [packagingSizes, setPackagingSizes] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          categoryRes,
          moleculeRes,
          strengthRes,
          packagingSizeRes,
          productRes,
        ] = await Promise.all([
          axios.get(`${import.meta.env.VITE_BASE_URL}/api/categories/get`),
          axios.get(`${import.meta.env.VITE_BASE_URL}/api/molecules/get`),
          axios.get(`${import.meta.env.VITE_BASE_URL}/api/strengths/get`),
          axios.get(`${import.meta.env.VITE_BASE_URL}/api/packagingsize/get`),
          axios.get(
            `${import.meta.env.VITE_BASE_URL}/api/products/get/${productId}`
          ),
        ]);

        setCategories(categoryRes.data);
        setMolecules(moleculeRes.data);
        setStrengths(strengthRes.data);
        setPackagingSizes(packagingSizeRes.data);

        const productData = productRes.data;
        setFormData({
          brandName: productData.brandName,
          categoryName: productData.categoryName,
          packagingsizeName: productData.packagingsizeName,
          productPrice: productData.productPrice,
          productpts: productData.productpts || "",
          productptr: productData.productptr || "",
          productImage: null,
        });

        setPreviewImage(productData.productImage?.secure_url || "");

        // Populate molecule and strength list
        setMoleculeStrengthList(productData.moleculeAndStrengthName || []);
      } catch (error) {
        console.error("Error fetching product or dropdown data", error);
      }
    };
    fetchData();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      productImage: file,
    });

    setPreviewImage(URL.createObjectURL(file));
  };

  const handleAddMoleculeStrength = () => {
    if (!formData.moleculeName || !formData.strengthName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        moleculeStrength: "Both Molecule and Strength are required",
      }));
      return;
    }

    setMoleculeStrengthList((prevList) => [
      ...prevList,
      {
        moleculeName: formData.moleculeName,
        strengthName: formData.strengthName,
      },
    ]);

    setFormData((prevData) => ({
      ...prevData,
      moleculeName: "",
      strengthName: "",
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      moleculeStrength: "",
    }));
  };

  const handleRemoveMoleculeStrength = (index) => {
    setMoleculeStrengthList((prevList) =>
      prevList.filter((_, i) => i !== index)
    );
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.brandName) newErrors.brandName = "Brand Name is required";
    if (!formData.categoryName) newErrors.categoryName = "Category is required";
    if (moleculeStrengthList.length === 0)
      newErrors.moleculeStrength =
        "At least one Molecule and Strength is required";
    if (!formData.packagingsizeName)
      newErrors.packagingsizeName = "Packaging Size is required";
    if (!formData.productPrice) newErrors.productPrice = "M.R.P is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!validateForm()) return;

    const productData = new FormData();
    productData.append("brandName", formData.brandName);
    productData.append("categoryName", formData.categoryName);
    productData.append("packagingsizeName", formData.packagingsizeName);
    productData.append("productPrice", formData.productPrice);
    productData.append("productpts", formData.productpts);
    productData.append("productptr", formData.productptr);
    productData.append(
      "moleculeAndStrengthName",
      JSON.stringify(moleculeStrengthList)
    );

    if (formData.productImage) {
      productData.append("productImage", formData.productImage);
    }

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/api/products/update/${productId}`,
        productData
      );
      onProductUpdated(response.data.data);
      onClose();
    } catch (error) {
      console.error("Error updating product", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xlg:p-8 sm:p-4">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:gap-4 xlg:gap-6">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-2 w-[50%]">
              <label htmlFor="brandName">Brand Name</label>
              <input
                type="text"
                name="brandName"
                placeholder="Brand Name"
                value={formData.brandName}
                onChange={handleChange}
                className="bg-white rounded-md px-2 h-[3.5rem] text-[#666666] "
              />
              {errors.brandName && (
                <span className="text-red-500">{errors.brandName}</span>
              )}
            </div>

            <div className="flex flex-col gap-2 w-[50%]">
              <label htmlFor="categoryName">Category</label>
              <select
                name="categoryName"
                value={formData.categoryName}
                onChange={handleChange}
                className="bg-white rounded-md px-2 h-[3.5rem] text-[#666666]"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option
                    key={category.categoryId}
                    value={category.categoryName}
                  >
                    {category.categoryName}
                  </option>
                ))}
              </select>
              {errors.categoryName && (
                <span className="text-red-500">{errors.categoryName}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 w-[50%]">
                <label htmlFor="moleculeName">Molecule/Composition</label>
                <select
                  name="moleculeName"
                  value={formData.moleculeName}
                  onChange={handleChange}
                  className="bg-white rounded-md px-2 h-[3.5rem] text-[#666666]"
                >
                  <option value="">Select Molecule</option>
                  {molecules.map((molecule) => (
                    <option
                      key={molecule.moleculeId}
                      value={molecule.moleculeName}
                    >
                      {molecule.moleculeName}
                    </option>
                  ))}
                </select>
                {errors.moleculeName && (
                  <span className="text-red-500">{errors.moleculeName}</span>
                )}
              </div>

              {/* Strength */}
              <div className="flex flex-row items-center  gap-2 w-[50%] ">
                <div className="flex flex-col gap-2 w-[90%]">
                  <label htmlFor="strengthName">Strength</label>
                  <select
                    name="strengthName"
                    value={formData.strengthName}
                    onChange={handleChange}
                    className="bg-white rounded-md px-2 h-[3.5rem] text-[#666666]"
                  >
                    <option value="">Select Strength</option>
                    {strengths.map((strength) => (
                      <option
                        key={strength.strengthId}
                        value={strength.strengthName}
                      >
                        {strength.strengthName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-[10%] mt-6 text-custom-green text-xl cursor-pointer">
                  <FaPlusCircle onClick={handleAddMoleculeStrength} />
                </div>
              </div>
            </div>
            {errors.moleculeStrength && (
              <span className="text-red-500">{errors.moleculeStrength}</span>
            )}

            <tbody className="flex flex-col gap-2">
              {moleculeStrengthList.map((item, index) => (
                <div key={index} className="flex flex-row w-full">
                  <td className=" w-[50%] p-2">{item.moleculeName}</td>
                  <div className="w-[50%]">
                    <td className=" w-[90%] p-2">{item.strengthName}</td>
                    <td className=" p-2 text-center w-[10%]">
                      <FaMinusCircle
                        className="text-red-500 cursor-pointer"
                        onClick={() => handleRemoveMoleculeStrength(index)}
                      />
                    </td>
                  </div>
                </div>
              ))}
            </tbody>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-2 w-[50%]">
              <label htmlFor="packagingsizeName">Packaging Size</label>
              <select
                name="packagingsizeName"
                value={formData.packagingsizeName}
                onChange={handleChange}
                className="bg-white rounded-md px-2 h-[3.5rem] text-[#666666]"
              >
                <option value="">Select Packaging Size</option>
                {packagingSizes.map((size) => (
                  <option
                    key={size.packagingsizeId}
                    value={size.packagingsizeName}
                  >
                    {size.packagingsizeName}
                  </option>
                ))}
              </select>
              {errors.packagingsizeName && (
                <span className="text-red-500">{errors.packagingsizeName}</span>
              )}
            </div>

            <div className="flex flex-col gap-2 w-[50%]">
              <label htmlFor="productPrice">M.R.P</label>
              <input
                type="text"
                name="productPrice"
                placeholder="M.R.P"
                value={formData.productPrice}
                onChange={handleChange}
                className="bg-white rounded-md px-2 h-[3.5rem] text-[#666666] "
              />
              {errors.productPrice && (
                <span className="text-red-500">{errors.productPrice}</span>
              )}
            </div>
          </div>
          <div className="flex flex-row gap-4 ">
            <div className="flex flex-col gap-2 w-[50%]">
              <label htmlFor="productPrice">P.T.S</label>
              <input
                type="text"
                name="productpts"
                placeholder="P.T.S"
                value={formData.productpts}
                onChange={handleChange}
                className="bg-white rounded-md px-2 h-[3.5rem] text-[#666666] "
              />
            </div>
            <div className="flex flex-col gap-2 w-[50%]">
              <label htmlFor="productPrice">P.T.R</label>
              <input
                type="text"
                name="productptr"
                placeholder="P.T.R"
                value={formData.productptr}
                onChange={handleChange}
                className="bg-white rounded-md px-2 h-[3.5rem] text-[#666666] "
              />
            </div>
          </div>

          {/* Thumbnail Image */}
          <div className="flex flex-col gap-2">
            <label htmlFor="productImage">Thumbnail Image</label>
            <input
              type="file"
              name="productImage"
              accept="image/*"
              onChange={handleFileChange}
              className="bg-white rounded-md  p-2 h-[3.5rem] text-[#666666] "
            />
            {errors.productImage && (
              <span className="text-red-500">{errors.productImage}</span>
            )}
            {previewImage && (
              <div className="mt-2">
                <img
                  src={previewImage}
                  alt="Product Thumbnail"
                  className="w-32 h-32 object-cover"
                />
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 bg-[#2AAA8A] w-fit px-8 text-white py-2 rounded-md hover:bg-blue-700"
        >
          {loading ? "Saving..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
