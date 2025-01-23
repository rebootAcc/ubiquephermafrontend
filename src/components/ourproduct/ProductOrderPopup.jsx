import React from "react";
import { RxCross2 } from "react-icons/rx";

const ProductOrderPopup = ({ product, closePopup }) => {
  return (
    <div
      className={` flex gap-4  w-full opacity-100 z-[2000] h-fit  justify-center items-center `}
    >
      <div className="bg-[url('/custom-bg/enquiry-form.png')] w-full bg-blend-multiply flex-1 relative flex rounded-md">
        <div className="flex flex-col sm:gap-8 lg:gap-4 xlg:gap-8 xl:gap-12 sm:px-4 lg:px-8 xlg:px-12 sm:py-4 lg:py-6 xlg:py-8 rounded-md w-full relative bg-[rgba(52,_141,_203,_0.70)]">
          {product && (
            <div className="bg-white sm:p-2 xlg:p-4 rounded-md shadow-md w-full">
              <h2 className="text-lg font-semibold xlg:mb-2">
                Product Enquiry Details
              </h2>
              <p>Brand Name: {product.medicinename}</p>
              <p>Price: {product.medicinemrp}</p>
            </div>
          )}
          <form className={`flex flex-col gap-4`}>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 w-[50%]">
                <input
                  type="text"
                  placeholder="Customer Name"
                  className="h-[3.5rem] px-2 rounded-md outline-none w-full bg-white/65"
                />
              </div>
              <div className="flex flex-col gap-2 w-[50%]">
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="h-[3.5rem] px-2 rounded-md w-full bg-white/65"
                />
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 w-[50%]">
                <input
                  type="number"
                  placeholder="Quantity"
                  className="h-[3.5rem] px-2 rounded-md w-full bg-white/65"
                />
              </div>
              <div className="flex flex-col gap-2 w-[50%]">
                <input
                  type="text"
                  placeholder="Location"
                  className="h-[3.5rem] px-2 rounded-md w-full bg-white/65"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Message"
                className="h-[6rem] px-2 rounded-md w-full bg-white/65"
              />
            </div>
            <button
              className="h-[3rem] lg:mt-5 bg-custom-orange flex justify-center items-center text-xl font-semibold rounded-md capitalize text-white w-1/3 self-center"
              type="submit"
            >
              send
            </button>
          </form>
        </div>
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 bg-white text-[#0047AD] w-6 h-6 flex justify-center items-center rounded-full"
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default ProductOrderPopup;
