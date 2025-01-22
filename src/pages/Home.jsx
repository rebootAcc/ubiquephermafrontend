import React from "react";
import ProductCategory from "../component/ProductCategory";
import AboutUsSection from "../component/AboutUsSection";
import SearchSection from "../component/SearchSection";
import OurProductHomeSection from "../component/OurProductHomeSection";

const Home = () => {
  return (
    <div>
      <ProductCategory />
      <AboutUsSection />
      <SearchSection />
      <OurProductHomeSection />
    </div>
  );
};

export default Home;
