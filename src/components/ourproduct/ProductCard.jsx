import React from "react";

const ProductCard = ({ content }) => {
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
    <div className="p-2 shadow-custom flex flex-col gap-2 rounded-md border border-[#0000001A]">
      <div>
        <img src={imgsrc} alt="" className="w-full rounded-sm" />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-medium">{medicinename}</h1>
        <div className="flex flex-row justify-between font-medium ">
          <div className="text-custom-lite-gray ">
            MRP <span className="text-custom-black">{medicinemrp}</span>
          </div>
          <div className="text-custom-lite-gray ">
            PTS <span className="text-custom-black">{medicinepts}</span>
          </div>
          <div className="text-custom-lite-gray ">
            PTR <span className="text-custom-black">{medicineptr}</span>
          </div>
        </div>
        <div className="text-custom-lite-gray ">
          Pack Size <span className="text-custom-black">{packagingsize}</span>
        </div>

        <div className="flex flex-wrap break-words">
          {details.map((item, index) => (
            <div key={index} className="text-sm text-custom-black font-medium">
              {item.molecule} {item.strength},
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
