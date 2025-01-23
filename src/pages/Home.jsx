import React from "react";
import MainPageTemplate from "../templates/MainPageTemplate";
import MainBanner from "../components/home/MainBanner";
import EnquiryBoxComponent from "../components/contact/EnquiryBoxComponent";
import ProductCategory from "../component/ProductCategory";
import AboutUsSection from "../component/AboutUsSection";
import SearchSection from "../component/SearchSection";
import OurProductHomeSection from "../component/OurProductHomeSection";

const Home = () => {
  return (
    <MainPageTemplate>
      <MainBanner />
      <ProductCategory />
      <AboutUsSection />
      <SearchSection />
      <OurProductHomeSection />
      <EnquiryBoxComponent />
    </MainPageTemplate>
  );
};

export default Home;
