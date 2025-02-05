import React from "react";
import { FaRegWindowClose } from "react-icons/fa";

const HomePopup = ({ handleClosePopup, popupData }) => {
  return (
    <div className="fixed top-0 z-[1000] left-0 w-full bg-black bg-opacity-25 h-full flex items-center justify-center overflow-y-scroll">
      <div className="w-full sm:h-[50vh] lg:h-[100vh] justify-center items-center flex flex-col rounded-lg">
        <div className="sm:w-[85%] md:w-[60%] lg:w-[40%] xl:w-[35%] relative rounded-lg bg-white">
          <div className="w-full h-[4rem] border-b border-[#A8579C]">
            <button
              className="bg-custom-blue text-white lg:w-16 absolute -translate-y-1/2 top-8 right-2 lg:h-10 sm:w-12 sm:h-8 flex items-center justify-center rounded-lg hover:bg-white hover:text-custom-blue border-2 border-custom-blue"
              onClick={handleClosePopup}
            >
              <FaRegWindowClose className="lg:text-2xl sm:text-xl" />
            </button>
          </div>
          <div className="p-4">
            <img
              src={`${popupData.popupImage.secure_url}`}
              alt="Popup"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePopup;
