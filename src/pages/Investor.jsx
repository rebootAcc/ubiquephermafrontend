import React from "react";
import EnquiryBoxComponent from "../components/contact/EnquiryBoxComponent";
import MainPageTemplate from "../templates/MainPageTemplate";
import SubBanner from "../components/global/SubBanner";

const Investor = () => {
  return (
    <MainPageTemplate>
      <SubBanner heading={"Investor"} />
      <div className="xl:p-16 lg:p-8 sm:p-4 sm:grid grid-cols-1 place-items-stretch md:flex flex-col items-stretch gap-6">
        <img
          src="/extra/career-investor-cover.png"
          alt="career-cover"
          className="w-full"
        />
        <EnquiryBoxComponent showCover={false} />
      </div>
    </MainPageTemplate>
  );
};

export default Investor;
