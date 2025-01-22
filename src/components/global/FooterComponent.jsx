import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaArrowAltCircleRight, FaFacebook, FaGoogle, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const FooterComponent = () => {
  const [categories, setCategories] = useState([{ categoryName: "category" }]);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const socialmedia = [
    {
      name: "/images/facebook.svg",
      link: "",
    },
    { name: "/images/instagram.svg", link: "" },
    {
      name: "/images/linkedin.svg",
      link: "",
    },
    { name: "/images/youtube.svg", link: "" },
  ];
  
  //   const getCategories = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${import.meta.env.VITE_BASE_URL}/api/categories/get`
  //       );
  //       setCategories(response.data);
  //     } catch (error) {
  //       console.error("Error fetching categories:", error);
  //     }
  //   };

  const handleCategoryClick = (categoryName) => {
    navigate(`/ourproducts?category=${encodeURIComponent(categoryName)}`);
  };
  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();

    const encodedMessage = encodeURIComponent(`Query: ${query}`);
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    const whatsappUrl = isDesktop
      ? `https://web.whatsapp.com/send?phone=919434072559&text=${encodedMessage}`
      : `https://api.whatsapp.com/send?phone=919434072559&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  //   useEffect(() => {
  //     getCategories();
  //   }, []);

  const quicklink = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/aboutus" },
    { name: "Our Products", link: "/ourproducts" },
    { name: "Our Vision", link: "/ourvission" },
    { name: "Our Gallery", link: "" },

    { name: "Contact Us", link: "/contactus" },
  ];
  return (
    <div className="xl:p-16 lg:p-8 sm:p-4 bg-site-main-blue flex flex-col gap-4">
      <div className="flex sm:flex-col lg:flex-row sm:gap-8 lg:gap-5 xl:gap-8">
        <div className="lg:w-[35%] sm:w-full flex flex-col gap-6">
          <div className="">
            <img
              src="/logo-footer.png"
              alt=""
              className="xl:h-[3rem] sm:h-[2.5rem] lg:h-[2rem]"
            />
          </div>
          <div className="flex flex-col gap-4 sm:text-base lg:text-sm xlg:text-lg xl:text-lg text-white font-medium">
            <p>
              Lorem ipsum dolor sit amet consectetur. Id consectetur vitae at
              semper mi facilisis et. Commodo in ultrices lectus magna viverra
              sagittis risus
            </p>
            <div className="flex flex-row gap-2">
              <BiSolidPhoneCall className="mt-1" />
              +91 12345 67890
            </div>
            <div className="flex flex-row gap-2">
              <MdEmail className="mt-1" />
              ubiquepharma@email.com
            </div>
            <div className="flex flex-row gap-2">
              <FaLocationDot className="mt-1" />
              Rajarhat, Newtown, Siliguri, West Bengal - 734001 India
            </div>
          </div>
        </div>
        <div className="flex sm:w-full lg:w-[20%] flex-col sm:gap-6 lg:gap-4 xl:gap-8 text-white">
          <div className="flex ">
            <span className="xl:text-2xl lg:text-xl xlg:text-2xl sm:text-2xl font-semibold">
              Quick Links
            </span>
          </div>

          <div className="flex flex-col sm:gap-4 xl:gap-4 sm:text-sm md:text-base xlg:text-base">
            {quicklink.map((service, index) => (
              <Link
                to={service.link}
                className="flex flex-row gap-2 font-medium items-center"
                key={index}
              >
                <span>
                <FaArrowAltCircleRight />
                </span>
                <span>{service.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex sm:w-full lg:w-[20%] flex-col sm:gap-6 lg:gap-4 xl:gap-8 text-white">
          <div className="flex ">
            <span className="xl:text-2xl lg:text-xl xlg:text-2xl sm:text-2xl font-semibold">
              Our Category
            </span>
          </div>

          <div className="flex flex-col sm:gap-4 xl:gap-4 sm:text-sm md:text-base  xlg:text-base">
            {categories.slice(0, 6).map((category, index) => (
              <button
                className="flex flex-row gap-2 font-medium items-center"
                key={index}
              >
                <span>
                <FaArrowAltCircleRight />
                </span>
                <span>{category.categoryName}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex sm:w-full lg:w-[25%] flex-col gap-4">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14256.380009881912!2d88.4251498!3d26.7094118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441693048af99%3A0x1e6947765d6e2a15!2sJai%20Matadi%20Enterprise!5e0!3m2!1sen!2sin!4v1727548193942!5m2!1sen!2sin"
              className="rounded-lg w-full sm:h-[10rem] lg:h-[8rem] xlg:h-[10rem]"
              loading="lazy"
            ></iframe>
          </div>
          <div className="flex gap-4 sm:px-4 md:px-6 sm:text-base lg:text-xl xlg:text-2xl text-white">
            <FaGoogle />
            <FaYoutube />
            <FaFacebook />
            <AiFillInstagram />
            <IoLogoWhatsapp />
          </div>
        </div>
      </div>
      <div className="pt-6 border-t-2 border-[#cccccc] ">
        <div className="flex sm:flex-col lg:flex-row sm:gap-4 lg:gap-0 text-center items-center justify-between text-white">
          <span>
            Copyright 2024
            <Link to={"/"} className="font-bold ml-2 mr-2">
              Jai Matadi Enterprise
            </Link>
            | All Rights Reserved. Privacy Policy
          </span>
          <span>
            Developed By:
            <Link
              to={"https://rebootai.in/"}
              className="ml-2 font-bold"
              target="_blank"
            >
              Reboot AI Pvt. Ltd.
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
