import React, { useState } from "react";

import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [  "https://images.template.net/108411/fashion-store-banner-template-vub7l.jpg",
  "https://img.freepik.com/premium-vector/new-arrival-sale-banner-design-template_2239-1177.jpg",
  "https://img.freepik.com/free-vector/flat-design-spring-horizontal-banner_23-2148822123.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1696291200&semt=ais" ,
  "https://img.freepik.com/premium-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150321976.jpg",
  "https://static.vecteezy.com/system/resources/previews/005/347/418/non_2x/super-sale-banner-background-in-orange-and-blue-color-with-paper-style-business-illustration-vector.jpg",

  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="w-full h-auto overflow-hidden">
      <div className="w-screeen h-[650px] realtive">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="Banner1"
            loading="Priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="Banner2 "
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="Banner3 "
          />
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt="Banner4 "
          />
 
        </div>

        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className=" w-16 h-12 border-[1px] border-gray-700 flex items-center
        justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            {" "}
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className=" w-16 h-12 border-[1px] border-gray-700 flex items-center
        justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            {" "}
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
