import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import HomeLoadingAnimation from "../global/HomeLoadingAnimation";
import axios from "axios";
import ProductOrderPopup from "./ProductOrderPopup";

const OurProductHomeSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleOrderNowClick = (product) => {
    setSelectedProduct(product);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };
  const getProducts = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/products/get`,
        {
          params: {
            active: true,

            page: 1,
            limit: 8,
          },
        }
      );

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
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="xl:p-16 lg:p-8 p-4 flex flex-col gap-6">
      <h1 className=" flex justify-center items-center xl:text-4xl font-semibold lg:text-3xl text-2xl text-custom-black">
        Our Product
      </h1>
      {loading ? (
        <div className="">
          <HomeLoadingAnimation />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-4">
          {products.length > 0 ? (
            products.map((item, index) => (
              <div className="h-full" key={index}>
                <ProductCard
                  content={item}
                  onOrderNowClick={handleOrderNowClick}
                />
              </div>
            ))
          ) : (
            <div className="col-span-4 text-center text-red-500">
              No products available.
            </div>
          )}
        </div>
      )}
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
    </div>
  );
};

export default OurProductHomeSection;
