import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaGoogle, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";

import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className=" z-[60] w-full">
      <div className=" flex md:flex-row sm:flex-col justify-between sm:gap-2 md:gap-0 items-center bg-site-main-blue  text-white">
        <div className="flex gap-4 w-full bg-site-main-blue sm:rounded-br-0 md:rounded-br-[4rem] sm:h-[2rem] md:h-[2.5rem] sm:px-4 md:px-6 sm:text-xs lg:text-sm xlg:text-base">
          <span className="flex md:gap-2 sm:gap-1 items-center sm:text-[10px] lg:text-sm xlg:text-base font-medium">
            <span>
              <PiPhoneCallFill />
            </span>
            <span>+91 90578 86170</span>
          </span>
          <span className="flex md:gap-2 sm:gap-1 items-center font-semibold md:flex sm:hidden">
            <span>
              <MdOutgoingMail />
            </span>
            <Link className="" to={"mailto:ubiquepharma@email.com"}>
              ubiquepharma@email.com
            </Link>
          </span>
          <span className="flex md:gap-2 sm:gap-1 items-center font-semibold md:flex sm:hidden">
            <span className="">GSTIN: 19AAFFU0535M1ZV</span>
          </span>
        </div>
        <div className="flex gap-4 sm:px-4 md:px-6 sm:text-xs lg:text-sm xlg:text-base">
          <FaGoogle />
          <FaYoutube />
          <FaFacebook />
          <AiFillInstagram />
          <IoLogoWhatsapp />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
