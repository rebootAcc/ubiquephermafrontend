import React, { useState } from "react";
import useElementHeight from "../../hooks/useElementHeight";

const EnquiryBoxComponent = ({ showCover = true }) => {
  const [imageHeight, formRef] = useElementHeight();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the WhatsApp message
    const whatsappMessage = `Name: ${name}\nMobile: ${phone}\nInquiry For: ${inquiry}\nMessage: ${message}`;

    // Encode the message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Replace with your actual WhatsApp number, including country code, without "+" or "00"
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const whatsappUrl = isDesktop
      ? `https://web.whatsapp.com/send?phone=918617501527&text=${encodedMessage}`
      : `https://api.whatsapp.com/send?phone=918617501527&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className={`relative flex flex-col lg:flex-row gap-4 flex-1 ${
        showCover ? "xl:p-10 lg:p-8 sm:p-4" : ""
      }  w-full opacity-100 rounded-lg justify-center items-center`}
    >
      <div
        className="flex-1"
        style={showCover ? { display: "block" } : { display: "none" }}
      >
        <img
          src="/extra/enquiry-cover.jpg"
          alt="enquiry-cover"
          height={imageHeight}
          style={{ height: imageHeight }}
          className="w-full rounded-md object-cover"
        />
      </div>
      <div
        className="bg-[url('/custom-bg/enquiry-form.png')] w-full bg-blend-multiply flex-1 relative flex rounded-md"
        ref={formRef}
      >
        <form
          className={`flex flex-col sm:gap-8 lg:gap-4 xlg:gap-8 xl:gap-12 sm:px-4 lg:px-8 xlg:px-12 sm:py-4 lg:py-8 xlg:py-12 w-full relative rounded-md bg-[rgba(52,_141,_203,_0.70)]`}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="h-[4rem] px-2 rounded-md outline-none w-full bg-white/65"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="tel"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Mobile Number"
              className="h-[4rem] px-2 rounded-md w-full bg-white/65"
            />
          </div>
          <div className="flex flex-col gap-2">
            <select
              value={inquiry}
              required
              onChange={(e) => setInquiry(e.target.value)}
              className="h-[4rem] px-2 rounded-md w-full bg-white/65"
            >
              <option value="">Select Inquiry</option>
              <option value="Distributorship">Distributorship</option>
              <option value="Investor">Investor</option>
              <option value="Marketing">Marketing</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="h-[4rem] px-2 rounded-md w-full bg-white/65"
            />
          </div>
          <button
            className="h-[4rem] lg:mt-5 bg-custom-orange flex justify-center items-center text-xl font-semibold rounded-md capitalize text-white w-1/3 self-center"
            type="submit"
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryBoxComponent;
