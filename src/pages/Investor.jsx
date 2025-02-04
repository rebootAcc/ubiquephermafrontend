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
        <div className="flex flex-col items-center lg:items-stretch gap-9">
          <h1 className="text-custom-black text-lg md:text-2xl xlg:text-4xl font-semibold">
            Investor Relations
          </h1>
          <p className="text-custom-black">
            At Ubique Pharma, we are committed to driving growth, innovation,
            and excellence in the pharmaceutical industry. Since our inception
            in 2014, we have been dedicated to manufacturing high-quality,
            affordable medications that enhance global health and well-being.
            Our strong foundation in research, regulatory compliance, and
            advanced manufacturing capabilities positions us as a trusted name
            in the industry. <br /> <br />
            We continuously invest in cutting-edge technology, robust quality
            assurance, and product innovation to expand our market presence. Our
            diverse portfolio spans key therapeutic areas, ensuring a steady
            pipeline of breakthrough formulations that meet global healthcare
            needs. With a focus on sustainability and ethical business
            practices, Ubique Pharma fosters long-term partnerships and
            sustainable financial growth. <br /> <br />
            Our upcoming Ubique Human Welfare Foundation further strengthens our
            Corporate Social Responsibility &#40;CSR&#41; efforts, reinforcing
            our commitment to both investors and society. As we expand into new
            markets and enhance our product offerings, we remain dedicated to
            delivering strong financial performance and creating value for our
            stakeholders. We invite investors to join us on this journey of
            growth, innovation, and impact. Partner with Ubique Pharma, where
            business success aligns with a healthier future for all. Invest with
            confidence.
          </p>
        </div>
        <EnquiryBoxComponent showCover={false} />
      </div>
    </MainPageTemplate>
  );
};

export default Investor;
