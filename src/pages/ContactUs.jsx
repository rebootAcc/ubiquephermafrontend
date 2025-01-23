import React from "react";
import MainPageTemplate from "../templates/MainPageTemplate";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import EnquiryBoxComponent from "../components/contact/EnquiryBoxComponent";
import SubBanner from "../components/global/SubBanner";

const ContactUS = () => {
  return (
    <MainPageTemplate>
      <SubBanner heading={"Contact Us"} />
      <div className="xl:p-16 lg:p-8 sm:p-4 sm:grid sm:grid-cols-1 place-items-stretch md:flex md:flex-row items-stretch gap-6">
        <div className="flex flex-col sm:gap-3 flex-1 lg:gap-3 xlg:gap-5">
          <div className="flex flex-col border sm:gap-3 lg:gap-3 xlg:gap-5 sm:px-4 lg:px-8 xlg:px-12 sm:py-4 lg:py-8 xlg:py-12 rounded-md border-custom-blue">
            <h1 className="xlg:text-4xl lg:text-2xl sm:text-2xl font-semibold text-custom-black">
              Contact Information
            </h1>
            <p className="xlg:text-lg sm:text-base text-custom-gray">
              Lorem ipsum dolor sit amet consectetur. Cum risus elit aliquet
              consequat. Ut risus est mattis mattis volutpat nunc non iaculis
              nascetur. Quis tincidunt nullam faucibus in. Lacus eu venenatis
              nam mauris at sed sagittis. Orci neque sapien placerat sit
              vulputate tortor.
            </p>
            <div className="flex flex-col gap-4 text-custom-black font-medium sm:text-base lg:text-sm xlg:text-base xxl:text-lg">
              <div className="flex flex-row gap-2">
                <FaLocationDot className="text-custom-blue mt-1" />
                <span>
                  Rajarhat, Newtown, Siliguri, West Bengal - 734001 India
                </span>
              </div>
              <div className="flex flex-row gap-2">
                <BiSolidPhoneCall className="text-custom-blue mt-1" />
                <span>Phone: +91 12345 67890</span>
              </div>
              <div className="flex flex-row gap-2">
                <MdEmail className="text-custom-blue mt-1" />
                <span>E-mail: ubiquepharma@email.com</span>
              </div>
            </div>
          </div>
          <div className="flex sm:gap-4 lg:gap-5 xlg:gap-8 flex-col md:flex-row">
            <img
              src="/slider/slider-1.jpg"
              alt="cover"
              className="flex-1 rounded-lg w-full sm:h-[12rem] lg:h-[15rem] xl:h-[20rem]"
            />
            <div className="flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14256.380009881912!2d88.4251498!3d26.7094118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441693048af99%3A0x1e6947765d6e2a15!2sJai%20Matadi%20Enterprise!5e0!3m2!1sen!2sin!4v1727548193942!5m2!1sen!2sin"
                className="rounded-lg w-full sm:h-[12rem] lg:h-[15rem] xl:h-[20rem]"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <EnquiryBoxComponent showCover={false} />
        </div>
      </div>
    </MainPageTemplate>
  );
};

export default ContactUS;
