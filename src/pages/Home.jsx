import React from "react";
import MainPageTemplate from "../templates/MainPageTemplate";
import MainBanner from "../components/home/MainBanner";
import EnquiryBoxComponent from "../components/contact/EnquiryBoxComponent";

const Home = () => {
  return (
    <MainPageTemplate>
      <MainBanner />
      <EnquiryBoxComponent />
      <div>popular</div>
    </MainPageTemplate>
  );
};

export default Home;
