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
        <p className="text-custom-black">
          Join Ubique Pharma, a leading pharmaceutical manufacturer committed to
          innovation, quality, and global health. Since 2014, we have been
          dedicated to producing high-quality, affordable medications across
          diverse therapeutic areas. At Ubique Pharma, we value talent, foster
          professional growth, and provide a dynamic work environment. Be part
          of a team that prioritizes excellence, ethical practices, and
          community well-being. Shape the future of healthcare with us—where
          your career makes a difference. Explore opportunities today!
        </p>
        <CareerForm />
      </div>
    </MainPageTemplate>
  );
};

export default Carrer;
