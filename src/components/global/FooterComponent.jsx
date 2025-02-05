import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import {
  FaArrowAltCircleRight,
  FaFacebook,
  FaGoogle,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const FooterComponent = () => {
  const [categories, setCategories] = useState([{ categoryName: "category" }]);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const getCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/categories/get`
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

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

  useEffect(() => {
    getCategories();
  }, []);

  const quicklink = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/aboutus" },
    { name: "Our Products", link: "/our-products" },
    { name: "Career", link: "/career" },
    { name: "Investor", link: "/investor" },
    { name: "Marketing", link: "/marketing" },
    { name: "Contact Us", link: "/contact-us" },
  ];
  return (
    <div className="xl:p-16 lg:p-8 sm:p-4 bg-custom-blue flex flex-col gap-4">
      <div className="flex sm:flex-col lg:flex-row sm:gap-8 lg:gap-5 xl:gap-8">
        <div className="lg:w-[35%] sm:w-full flex flex-col gap-6">
          <div className="">
            <img
              src="/logo-footer.png"
              alt=""
              className="xl:h-[5rem] sm:h-[4.5rem] lg:h-[4rem]"
            />
          </div>
          <div className="flex flex-col gap-4 text-lg lg:text-base xlg:text-lg xl:text-xl text-white font-medium">
            <Link to="tel:+918617501527" className="flex flex-row gap-2">
              <BiSolidPhoneCall className="mt-1" />
              +91 86175 01527
            </Link>
            <Link
              to="mailTo:info@ubiquepharma.in"
              className="flex flex-row gap-2"
            >
              <MdEmail className="mt-1" />
              info@ubiquepharma.in
            </Link>
            <Link
              className="flex flex-row gap-2"
              to="https://maps.app.goo.gl/2nSEUvfmbkFKSAuq5"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <FaLocationDot className="mt-1" />
              Solanipuram, Civil Line, Roorkee-247667 &#40;UK&#41; India RO:
              Papiva Para. Dabaram-II. Siliguri-734006. &#40;WB&#41; India
            </Link>
          </div>
        </div>
        <div className="flex sm:w-full lg:w-[20%] flex-col sm:gap-6 lg:gap-4 xl:gap-8 text-white">
          <div className="flex ">
            <span className="xl:text-2xl lg:text-xl xlg:text-2xl sm:text-2xl font-semibold">
              Quick Links
            </span>
          </div>

          <div className="flex flex-col sm:gap-4 xl:gap-4 text-base md:text-base xlg:text-lg">
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

          <div className="flex flex-col sm:gap-4 xl:gap-4 text-base md:text-base xlg:text-lg">
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
          <div className="flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4264.478312296061!2d88.4621947!3d26.719279099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4414bdc76ad85%3A0xbf8b5a683d7bdd7!2sUBIQUE%20PHARMA%20PVT.%20LTD.!5e1!3m2!1sen!2sin!4v1738668546006!5m2!1sen!2sin"
              className="rounded-lg w-full sm:h-[10rem] lg:h-full"
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
              Ubique Pharma
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
