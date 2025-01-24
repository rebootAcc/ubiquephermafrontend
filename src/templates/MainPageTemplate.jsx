import React, { useEffect } from "react";
import TopHeader from "../components/global/TopHeader";
import Header from "../components/global/Header";
import FooterComponent from "../components/global/FooterComponent";
import useElementHeight from "../hooks/useElementHeight";

const MainPageTemplate = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [marginTop, navRef] = useElementHeight();
  return (
    <div>
      <div className="flex w-full h-full flex-col overflow-x-hidden ">
        <div ref={navRef} className="fixed z-[1000] w-full">
          <div>
            <TopHeader />
          </div>
          <div>
            <Header />
          </div>
        </div>

        <div style={{ marginTop }}>{children}</div>
        <FooterComponent />
      </div>
    </div>
  );
};

export default MainPageTemplate;
