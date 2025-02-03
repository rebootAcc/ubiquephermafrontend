import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuopen, setMenuopen] = useState(false);
  const togglemenuopen = () => setMenuopen(!menuopen);

  const location = useLocation();

  const NavElement = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Our Products", link: "/our-products" },
    { name: "Career", link: "/career" },
    { name: "Investor", link: "/investor" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [hashLink, setHashLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === "/" && hashLink) {
      const section = document.querySelector(hashLink);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setHashLink("");
      }
    }
  }, [location.pathname, hashLink]);

  return (
    <header
      className={`bg-[white] w-full ${
        scrolled ? "top-0 header-transition" : ""
      }`}
    >
      <div className="lg:flex sm:hidden w-full lg:h-[5rem] xlg:h-[6rem] shadow-lg justify-between items-center  px-5">
        <Link to="/" className="sm:hidden md:block">
          <img
            src="/logo.png"
            alt="Ubique Pherma PVT. LTD. Logo"
            className="xl:h-[5.5rem] xlg:h-[5rem] lg:h-[4rem] w-full"
          />
        </Link>
        <div className="flex justify-end items-center lg:text-sm xlg:text-base xl:text-lg relative">
          {NavElement.map((navbar, index) => (
            <Link
              key={index}
              className={`font-medium lg:px-2 xlg:px-4 xl:px-5 lg:h-[5rem] xlg:h-[6rem] flex justify-center items-center hover:text-custom-blue ${
                location.pathname === navbar.link
                  ? "text-custom-blue"
                  : "text-custom-black"
              }`}
              to={navbar.link}
            >
              <span className=" cursor-pointer">{navbar.name}</span>
            </Link>
          ))}
        </div>
        <Link
          to={"https://api.whatsapp.com/send?phone=919434072559"}
          className="px-6 h-[2.4rem] flex justify-center items-center bg-custom-orange text-white text-base font-medium hover:bg-[white] hover:text-custom-orange border border-custom-orange rounded-md"
        >
          Trade Enquiry
        </Link>
      </div>
      <div className="sm:flex md:justify-between md:items-center sm:justify-between sm:items-center w-full md:p-6 sm:p-3 sm:px-3 px-0 lg:hidden">
        <Link to="/" className="lg:hidden">
          <img
            src="/logo.png"
            alt="Ubique Pherma PVT. LTD. Logo"
            className="sm:h-[1.5rem] md:h-[1.8rem]"
          />
        </Link>

        <button onClick={togglemenuopen} className="">
          <label
            htmlFor="checkbox"
            className={`toggle ${menuopen ? "menu-open" : ""}`}
          >
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </button>
      </div>
      {menuopen && (
        <div className="sm:flex bg-custom-blue flex-col sm:h-[40vh] md:h-[60vh] md:text-3xl sm:text-xl overflow-scroll lg:hidden px-9 relative">
          {NavElement.map((navbar, index) => (
            <Link
              to={navbar.link}
              key={index}
              className="font-medium text-[white] p-4 md:py-10 border-b-2 border-gray-200"
            >
              <span className=" cursor-pointer">{navbar.name}</span>
            </Link>
          ))}
          <Link
            to={"https://api.whatsapp.com/send?phone=919434072559"}
            className="p-4 w-full my-8 flex justify-center items-center  text-lg font-medium bg-[white] text-custom-orange border border-custom-orange rounded-md"
          >
            Trade Enquiry
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
