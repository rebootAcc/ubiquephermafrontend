import React from "react";
import MainPageTemplate from "../templates/MainPageTemplate";
import SubBanner from "../components/global/SubBanner";
import AboutUsSection from "../components/aboutus/AboutUsSection";
import EnquiryBoxComponent from "../components/contact/EnquiryBoxComponent";

const AboutUs = () => {
  return (
    <MainPageTemplate>
      <SubBanner heading={"About Us"} />
      <AboutUsSection />
      <EnquiryBoxComponent />
    </MainPageTemplate>
  );
};

export default AboutUs;
