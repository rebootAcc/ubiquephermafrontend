import React, { useEffect, useState } from "react";
import useElementHeight from "./useElementHeight";

const AboutUsSection = () => {
  const [rightSideHeight, leftSideRef] = useElementHeight();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-col md:flex-row lg:gap-6 gap-4 xlg:gap-8 xl:p-16 lg:p-8 p-4">
      <div
        className="md:w-[40%] w-full "
        style={{ height: isSmallScreen ? "auto" : `${rightSideHeight}px` }}
      >
        <img
          src="/images/aboutus.png"
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div
        className="flex flex-col items-start w-full md:w-[60%] gap-3 lg:gap-5"
        ref={leftSideRef}
      >
        <h1 className="lg:text-xl md:text-lg text-xl xlg:text-2xl xl:text-3xl xxl:text-4xl font-medium text-custom-black">
          About <span className="text-custom-green">Ubique</span>
        </h1>
        <p className="text-sm md:text-xs lg:text-xs xlg:text-sm xl:text-base xxl:text-lg text-custom-black">
          Lorem ipsum dolor sit amet consectetur. Mauris egestas arcu nisl duis
          at faucibus tortor sit ac. Tincidunt ullamcorper risus turpis lectus.
          Nulla bibendum eu quis aliquam eget amet elementum eget porttitor. Et
          pellentesque condimentum urna maecenas cursus vestibulum at
          pellentesque dapibus. Tellus quis dui ipsum amet dignissim nulla amet
          ipsum. Quis semper eget scelerisque eget sodales ullamcorper eget in.
          Fames tortor hac risus fringilla quam lectus ac nisl. <br /> enenatis
          consectetur interdum sagittis a sed volutpat sit tempus. Nibh elit in
          diam risus habitasse diam aliquam duis cursus. Urna varius venenatis
          nec viverra phasellus fermentum nisl. Auctor pellentesque porta
          tristique nunc magna a semper. Diam commodo elementum eu neque turpis
          sapien. Elit nisi neque ultricies et gravida eget fermentum fringilla.
          Commodo pharetra neque pellentesque vitae scelerisque. Vitae at montes
          dui tincidunt. Nibh hendrerit libero sodales et nulla. Turpis purus
          scelerisque diam et ac neque velit. In bibendum maecenas pellentesque
          massa vel libero commodo nec. Eu potenti vulputate etiam enim amet
          egestas ante tincidunt sem. Pharetra convallis sit venenatis sed
          aliquam netus risus eget. Lacus velit eget consectetur faucibus eu
          lectus id in. Facilisi phasellus cursus aliquet adipiscing interdum.
          <br /> Quis lacus ridiculus nulla facilisi molestie eget. Est
          phasellus erat eleifend arcu gravida tincidunt eget orci. Convallis
          feugiat amet elit fermentum. In fames odio massa tempus sed nulla
          sagittis sagittis imperdiet. At aliquam fermentum ornare eu tellus
          aliquam tortor sed lectus. Tellus mattis dignissim et augue felis. In
          curabitur laoreet urna ultricies. Erat pharetra placerat odio nisl
          arcu elit lacus aenean in. Odio euismod
        </p>
      </div>
    </div>
  );
};

export default AboutUsSection;
