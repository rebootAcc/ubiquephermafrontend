import React from "react";
import MainPageTemplate from "../templates/MainPageTemplate";
import SubBanner from "../components/global/SubBanner";
import SearchSection from "../components/global/SearchSection";
import ProductCard from "../components/ourproduct/ProductCard";

const OurProducts = () => {
  const products = [
    {
      imgsrc: "/images/products.png",
      medicinename: "Uvit 40 Capsule",
      medicinemrp: "100",
      medicineptr: "100",
      medicinepts: "100",
      packagingsize: "1U",
      details: [
        { molecule: "Paracetamol", strength: "500mg" },
        { molecule: "Paracetamol2", strength: "1500mg" },

        { molecule: "Paracetamol2", strength: "1500mg" },
        { molecule: "Paracetamol andk ", strength: "1500mg 200mg" },
      ],
    },
  ];
  return (
    <MainPageTemplate>
      <SubBanner heading={"Our Products"} />
      <SearchSection />
      <div className="xl:p-16 lg:p-8 p-4 flex flex-col gap-6">
        <h1 className=" flex justify-center items-center xl:text-4xl font-semibold lg:text-3xl text-2xl text-custom-black">
          Our Product
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((item, index) => (
            <div className="" key={index}>
              <ProductCard content={item} />
            </div>
          ))}
        </div>
      </div>
    </MainPageTemplate>
  );
};

export default OurProducts;
