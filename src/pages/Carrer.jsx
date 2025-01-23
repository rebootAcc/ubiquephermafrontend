import React from "react";
import MainPageTemplate from "../templates/MainPageTemplate";
import SubBanner from "../components/global/SubBanner";
import CareerForm from "../components/career/CareerForm";

const Carrer = () => {
  return (
    <MainPageTemplate>
      <SubBanner heading={"Career"} />
      <div className="xl:p-16 lg:p-8 sm:p-4 sm:grid grid-cols-1 place-items-stretch md:flex flex-col items-stretch gap-6">
        <img
          src="/extra/career-investor-cover.png"
          alt="career-cover"
          className="w-full"
        />
        <CareerForm />
      </div>
    </MainPageTemplate>
  );
};

export default Carrer;
