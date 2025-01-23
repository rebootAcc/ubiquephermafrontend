import React from "react";
import MainPageTemplate from "../templates/MainPageTemplate";
import MainBanner from "../components/home/MainBanner";
import EnquiryBoxComponent from "../components/contact/EnquiryBoxComponent";
import ProductCategory from "../components/home/ProductCategory";
import SearchSection from "../components/global/SearchSection";
import AboutUsSection from "../components/aboutus/AboutUsSection";
import OurProductHomeSection from "../components/ourproduct/OurProductHomeSection";

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
