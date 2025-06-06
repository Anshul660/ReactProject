import React, { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.template.net/108411/fashion-store-banner-template-vub7l.jpg",
    "https://img.freepik.com/premium-vector/new-arrival-sale-banner-design-template_2239-1177.jpg",
    "https://img.freepik.com/free-vector/flat-design-spring-horizontal-banner_23-2148822123.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1696291200&semt=ais",
    "https://img.freepik.com/premium-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150321976.jpg",
    "https://static.vecteezy.com/system/resources/previews/005/347/418/non_2x/super-sale-banner-background-in-orange-and-blue-color-with-paper-style-business-illustration-vector.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full overflow-hidden relative">
      <div className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px] w-screen relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          className="w-full h-full flex transition-transform duration-1000"
        >
          {data.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Banner${index + 1}`}
              className="min-w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-6 bottom-10 z-10">
          <button
            onClick={prevSlide}
            className="w-10 h-10 sm:w-14 sm:h-12 border border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 sm:w-14 sm:h-12 border border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

