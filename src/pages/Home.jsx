import React, { useEffect, useState } from "react";
import MainPageTemplate from "../templates/MainPageTemplate";
import MainBanner from "../components/home/MainBanner";
import EnquiryBoxComponent from "../components/contact/EnquiryBoxComponent";
import ProductCategory from "../components/home/ProductCategory";
import SearchSection from "../components/global/SearchSection";
import AboutUsSection from "../components/aboutus/AboutUsSection";
import OurProductHomeSection from "../components/ourproduct/OurProductHomeSection";
import HomePopup from "../components/home/HomePopup";
import axios from "axios";

const Home = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    const fetchPopupData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/popups/get?active=true`
        );

        if (response.status === 200 && response.data.length > 0) {
          const activePopup = response.data.find((popup) => popup.active);
          if (activePopup) {
            setPopupData(activePopup);

            if (!sessionStorage.getItem("popupShown")) {
              setIsPopupVisible(true);
              sessionStorage.setItem("popupShown", "true");
            }
          } else {
            console.warn("No active popup found");
          }
        } else {
          console.warn("No popup data found");
        }
      } catch (error) {
        console.warn("Failed to fetch popup data:", error);
      }
    };

    fetchPopupData();
  }, []);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <MainPageTemplate>
      <MainBanner />
      <ProductCategory />
      <AboutUsSection />
      <SearchSection />
      <OurProductHomeSection />
      <EnquiryBoxComponent />
      {isPopupVisible && popupData && (
        <HomePopup handleClosePopup={handleClosePopup} popupData={popupData} />
      )}
    </MainPageTemplate>
  );
};

export default Home;
