import React, { useState } from "react";

const CareerForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the WhatsApp message
    const whatsappMessage = `Name: ${name}\nMobile: ${phone}\nLocation: ${location}\nRole: ${role}\nMessage: ${message}`;

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
    <div className="bg-[url('/custom-bg/enquiry-form.png')] w-full bg-blend-multiply flex-1 relative flex bg-no-repeat bg-cover">
      <form
        className={`flex flex-col sm:gap-8 lg:gap-4 xlg:gap-8 xl:gap-12 sm:px-4 lg:px-8 xlg:px-12 sm:py-4 lg:py-8 xlg:py-12 w-full relative bg-[rgba(52,_141,_203,_0.70)]`}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="h-[4rem] px-2 rounded-md outline-none w-full bg-white/65"
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Mobile Number"
            className="h-[4rem] px-2 rounded-md w-full bg-white/65"
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="h-[4rem] px-2 rounded-md w-full bg-white/65"
          />
        </div>
        <div className="flex flex-col gap-2">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="h-[4rem] px-2 rounded-md w-full bg-white/65"
          >
            <option value="">Select Role</option>
            <option value="MR">MR</option>
            <option value="ASM">ASM</option>
            <option value="RSM">RSM</option>
            <option value="ZSM">ZSM</option>
            <option value="Office Staff">Office Staff</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
  );
};

export default CareerForm;
