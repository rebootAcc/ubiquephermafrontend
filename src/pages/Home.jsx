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
      <EnquiryBoxComponent />
      <div>popular</div>
       <ProductCategory />
      <AboutUsSection />
      <SearchSection />
      <OurProductHomeSection />
    </MainPageTemplate>
  );
};

export default Home;
