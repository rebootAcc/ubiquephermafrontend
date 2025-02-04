import React, { useEffect, useState } from "react";
import useElementHeight from "../../hooks/useElementHeight";

const AboutUsSection = () => {
  const [rightSideHeight, leftSideRef] = useElementHeight();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-col md:flex-row lg:gap-6 gap-4 xlg:gap-8 xl:p-16 lg:p-8 p-4">
      <div
        className="md:w-[40%] w-full "
        style={{ height: isSmallScreen ? "auto" : `${rightSideHeight}px` }}
      >
        <img
          src="/slider/slider-1.jpg"
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div
        className="flex flex-col items-start w-full md:w-[60%] gap-3 lg:gap-5"
        ref={leftSideRef}
      >
        <h1 className="lg:text-xl md:text-lg text-xl xlg:text-2xl xl:text-3xl xxl:text-4xl font-medium text-custom-black">
          About <span className="text-custom-green">Ubique</span>
        </h1>
        <p className="text-sm md:text-xs lg:text-xs xlg:text-sm xl:text-base xxl:text-lg text-custom-black">
          Ubique embarked on its mission with a core commitment to enhancing
          health and well-being. Since our inception, we have dedicated
          ourselves to delivering high-quality, affordable medications across a
          comprehensive range of drug dosage schedules. <br /> <br />
          Founded in 2014, Ubique has always been driven by the vision of
          fostering a healthier society. We initially focused on Calcium,
          Vitamins, and various specialty areas, and over time, we have
          broadened our scope into new fields. Looking ahead, we plan to launch
          the Ubique Human Welfare Foundation, further strengthening our
          Corporate Social Responsibility &#40;CSR&#41; efforts and supporting
          both privileged and underserved communities. <br /> <br />
          At Ubique, we take immense pride in our dedication to exceptional
          customer care, our employees&apos; professional growth, and an
          unwavering commitment to quality. We understand that well-being goes
          beyond medicine—it is about ensuring that healthcare remains
          accessible, reliable, and effective for all. <br /> <br />
          Innovation and integrity remain at the heart of our operations. By
          continuously improving our formulations, expanding research, and
          upholding stringent quality control measures, we ensure that every
          product meets the highest industry standards. Our commitment extends
          beyond business, as we actively seek opportunities to contribute
          positively to the communities we serve. As we look to the future,
          Ubique remains steadfast in its mission—to enhance lives through
          groundbreaking healthcare solutions, social responsibility, and an
          enduring promise to create a healthier tomorrow for all.
        </p>
      </div>
    </div>
  );
};

export default AboutUsSection;
