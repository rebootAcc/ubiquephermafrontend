import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
const ProductCategory = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [autoplay, setAutoplay] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 550) {
        setSlidesToShow(2);
        setAutoplay(true);
      } else if (window.innerWidth <= 850) {
        setSlidesToShow(3);
        setAutoplay(false);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3);
        setAutoplay(false);
      } else if (window.innerWidth <= 1280) {
        setSlidesToShow(3);
        setAutoplay(false);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(3);
        setAutoplay(false);
      } else {
        setSlidesToShow(3);
        setAutoplay(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/products/get`,
        {
          params: {
            active: true,

            page: 1,
            limit: 6,
          },
        }
      );

      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  const settings = {
    infinite: products.length > slidesToShow,
    speed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    pauseOnHover: false,

    centerMode: false,
    arrows: false,
  };
  return (
    <div className="xl:p-16 lg:p-8 p-4 flex flex-col gap-6">
      <h1 className=" flex justify-center items-center xl:text-4xl font-semibold lg:text-3xl text-2xl text-custom-black">
        Product Category
      </h1>
      <div className="w-full flex justify-center items-center">
        <div className="xlg:w-[80%] lg:w-[90%] w-full">
          <Slider {...settings}>
            {products.map((item, index) => (
              <div
                className="!flex flex-col gap-2 justify-center items-center"
                key={index}
              >
                <img
                  src={item.productImage.secure_url}
                  alt=""
                  className=" xlg:w-[16rem] xlg:h-[16rem] md:h-[12rem] md:w-[12rem] h-[10rem] w-[10rem] rounded-full object-cover"
                />
                <h1 className="xlg:text-3xl lg:text-2xl text-xl font-semibold text-custom-gray">
                  {item.brandName}
                </h1>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
