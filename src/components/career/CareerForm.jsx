import React from "react";

const CareerForm = () => {
  return (
    <div className="bg-[url('/custom-bg/enquiry-form.png')] w-full bg-blend-multiply flex-1 relative flex bg-no-repeat bg-cover">
      <form
        className={`flex flex-col sm:gap-8 lg:gap-4 xlg:gap-8 xl:gap-12 sm:px-4 lg:px-8 xlg:px-12 sm:py-4 lg:py-8 xlg:py-12 w-full relative bg-[rgba(52,_141,_203,_0.70)]`}
      >
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Your Name"
            className="h-[4rem] px-2 rounded-md outline-none w-full bg-white/65"
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="tel"
            placeholder="Mobile Number"
            className="h-[4rem] px-2 rounded-md w-full bg-white/65"
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Location"
            className="h-[4rem] px-2 rounded-md w-full bg-white/65"
          />
        </div>
        <div className="flex flex-col gap-2">
          <select
            name=""
            id=""
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
