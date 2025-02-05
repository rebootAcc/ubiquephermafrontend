import React from "react";

const ProductCard = ({ content, onOrderNowClick }) => {
  const {
    imgsrc,
    medicinename,
    medicinemrp,
    medicineptr,
    medicinepts,
    packagingsize,
    details,
  } = content;
  return (
    <div className="p-2 py-3 shadow-custom flex flex-col gap-2 h-full rounded-md border border-[#0000001A]">
      <div>
        <img
          src={imgsrc}
          alt=""
          className="w-full rounded-sm h-[15rem] object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-medium text-center">{medicinename}</h1>
        <div className="flex flex-row justify-between font-medium ">
          <div className="text-custom-black ">
            {medicinemrp && medicinemrp !== "" ? (
              <>
                MRP{" "}
                <span className="text-custom-lite-gray font-normal">
                  ₹{medicinemrp}
                </span>
              </>
            ) : null}
          </div>
          <div className="text-custom-black ">
            {medicinepts && medicinepts !== "" ? (
              <>
                PTS{" "}
                <span className=" text-custom-lite-gray font-normal">
                  ₹{medicinepts}
                </span>
              </>
            ) : null}
          </div>
          <div className="text-custom-black ">
            {medicineptr && medicineptr !== "" ? (
              <>
                PTR{" "}
                <span className=" text-custom-lite-gray font-normal">
                  ₹{medicineptr}
                </span>
              </>
            ) : null}
          </div>
        </div>
        <div className="text-custom-black font-medium ">
          Pack Size{" "}
          <span className="text-custom-lite-gray font-normal">
            {packagingsize}
          </span>
        </div>
        <div className="line-clamp-3">
          <p className="text-sm text-custom-black font-medium">
            {details.map((item, index) => (
              <span key={index} className="mr-2  inline-block">
                {item.molecule} {item.strength},
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="h-full flex justify-end items-end w-full gap-4 font-medium ">
        <button
          onClick={() => onOrderNowClick(content)}
          className="h-[2.5rem] w-full flex justify-center items-center rounded-md text-base bg-custom-blue text-[#F7F7F7]"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
