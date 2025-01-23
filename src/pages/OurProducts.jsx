import React, { useEffect, useState } from "react";
import MainPageTemplate from "../templates/MainPageTemplate";
import SubBanner from "../components/global/SubBanner";
import SearchSection from "../components/global/SearchSection";
import ProductCard from "../components/ourproduct/ProductCard";
import HomeLoadingAnimation from "../components/global/HomeLoadingAnimation";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductOrderPopup from "../components/ourproduct/ProductOrderPopup";

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(20);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOrderNowClick = (product) => {
    setSelectedProduct(product);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/categories/get`
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getProducts = async (category = "", page = 1, search = "") => {
    try {
      setLoading(true);

      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/products/get`,
        {
          params: {
            active: true,
            category: category ? category : undefined,
            search: search ? search : undefined,
            page: page,
            limit: limit,
          },
        }
      );

      // Format product data for ProductCard
      const formattedProducts = response.data.data.map((product) => ({
        imgsrc: product.productImage.secure_url,
        medicinename: product.brandName,
        medicinemrp: product.productPrice,
        medicineptr: product.productptr,
        medicinepts: product.productpts,
        packagingsize: product.packagingsizeName,
        details: product.moleculeAndStrengthName.map((item) => ({
          molecule: item.moleculeName,
          strength: item.strengthName,
        })),
      }));

      setProducts(formattedProducts);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQueryFromUrl = queryParams.get("search");
    if (searchQueryFromUrl) {
      setSearchQuery(searchQueryFromUrl);
      getProducts(selectedCategory, currentPage, searchQueryFromUrl);
    } else {
      getProducts(selectedCategory, currentPage, "");
    }
  }, [location.search, selectedCategory, currentPage]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryFromUrl = queryParams.get("category");

    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
      getProducts(categoryFromUrl, 1);
    }
  }, [location.search]);

  useEffect(() => {
    getCategories();
  }, []);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory((prevCategory) => {
      const newCategory = prevCategory === categoryName ? "" : categoryName;
      getProducts(newCategory, 1, searchQuery);
      setCurrentPage(1);
      return newCategory;
    });
  };
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    const buttons = [];
    const maxVisiblePages = 5;
    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    const adjustedStartPage = Math.max(
      1,
      Math.min(startPage, totalPages - maxVisiblePages + 1)
    );

    for (let i = adjustedStartPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`md:px-4 md:py-2 sm:px-2 sm:py-1 mx-1 md:text-base sm:text-xs ${
            currentPage === i
              ? "bg-[#0047AD] text-white"
              : "bg-white text-[#0047AD]"
          } sm:rounded-sm md:rounded-lg border border-[#2AAA8A]`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="md:px-4 md:py-2 sm:px-2 sm:py-1 md:text-base sm:text-xs bg-white text-[#0047AD] border border-[#0047AD] sm:rounded-sm md:rounded-lg disabled:opacity-50"
        >
          Prev
        </button>

        {buttons}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="md:px-4 md:py-2 sm:px-2 sm:py-1 md:text-base sm:text-xs bg-white text-[#0047AD] border border-[#0047AD] sm:rounded-sm md:rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    );
  };
  return (
    <MainPageTemplate>
      <SubBanner heading={"Our Products"} />
      <SearchSection
        initialQuery={searchQuery}
        setSearchQueryProp={setSearchQuery}
      />
      <div className="xl:p-16 lg:p-8 p-4 flex flex-col gap-6">
        <h1 className=" flex justify-center items-center xl:text-4xl font-semibold lg:text-3xl text-2xl text-custom-black">
          Our Product
        </h1>

        <div className="grid sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 sm:gap-2 lg:gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category.categoryName)}
              className={`w-full rounded-md flex justify-center items-center sm:text-xs lg:text-sm h-[2rem] ${
                selectedCategory === category.categoryName
                  ? "bg-custom-blue text-white"
                  : "text-custom-blue border border-custom-blue"
              }`}
            >
              {category.categoryName}
            </button>
          ))}
        </div>
        {loading ? (
          <div className="">
            <HomeLoadingAnimation />
          </div>
        ) : (
          <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-4">
            {products.length > 0 ? (
              products.map((item, index) => (
                <div className="" key={index}>
                  <ProductCard
                    content={item}
                    onOrderNowClick={handleOrderNowClick}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-4 text-center text-red-500">
                {selectedCategory || searchQuery
                  ? "No products found for this category or search."
                  : "No products available."}
              </div>
            )}
          </div>
        )}
        <div className="flex justify-center mt-4">{renderPagination()}</div>
      </div>
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center h-screen z-[1000]">
          <div className="lg:w-[50%] sm:w-[95%] md:w-[80%]">
            <ProductOrderPopup
              product={selectedProduct}
              closePopup={closePopup}
            />
          </div>
        </div>
      )}
    </MainPageTemplate>
  );
};

export default OurProducts;
