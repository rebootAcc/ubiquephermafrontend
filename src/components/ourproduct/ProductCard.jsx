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
          <div className="text-custom-lite-gray ">
            MRP <span className="text-custom-black">₹{medicinemrp}</span>
          </div>
          <div className="text-custom-lite-gray ">
            PTS <span className="text-custom-black">₹{medicinepts}</span>
          </div>
          <div className="text-custom-lite-gray ">
            PTR <span className="text-custom-black">₹{medicineptr}</span>
          </div>
        </div>
        <div className="text-custom-lite-gray ">
          Pack Size <span className="text-custom-black">{packagingsize}</span>
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
      <div className="grid grid-cols-1 gap-4 font-medium ">
        <button
          onClick={() => onOrderNowClick(content)}
          className="h-[2.5rem] flex justify-center items-center rounded-md text-base bg-custom-blue text-[#F7F7F7]"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
