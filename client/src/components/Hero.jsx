import React from "react";  
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import Carousel1 from "../assets/Carousel1.png";
import daily_essential from "../assets/daily_essential.png";
import immunity_booster from "../assets/immunity_booster.png";
import { Link } from "react-router-dom";
const slides = [
  {
    id: 1,
    title: "Get Your Vitamins & Minerals",
    image: Carousel1,
    discount: "Extra 20% off",
    bgGradient: "from-[#F3E8FF] to-[#E1F5FE]",
    circleColor: "#E1BEE7",
  },
  {
    id: 2,
    title: "Daily Health Essentials",
    image: daily_essential,
    discount: "Flat 30% Off",

bgGradient: "from-[#FFF3E0] to-[#FFEBEE]",
    circleColor: "#FFCC80",
  },
  {
    id: 3,
    title: "Boost Immunity Today!",
    image: immunity_booster,
    discount: "Extra 20% Off",
    bgGradient: "from-[#E0F7FA] to-[#E0F2F1] ",
    circleColor: "#6ae3f3ff",
  },
];

const Hero = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className={`relative w-full overflow-hidden bg-gradient-to-br ${slide.bgGradient} py-14`}
          >
            
            <div className="absolute inset-x-0 bottom-0">
              <svg
                viewBox="0 0 1440 100"
                className="w-full h-24"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,30 C360,100 1080,0 1440,60 L1440,0 L0,0 Z"
                  fill="#ffffff"
                />
              </svg>
            </div>

            
            <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 gap-10">
              
              <div className="relative w-full md:w-1/2">
                <div
                  className="absolute -top-10 -left-10 w-60 h-60 rounded-full blur-2xl opacity-50 z-0"
                  style={{ backgroundColor: slide.circleColor }}
                />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl"
                />
                <div className="absolute top-4 left-4 bg-[#3F51B5] text-white text-sm px-3 py-1 rounded-full font-semibold shadow-md z-20">
                  {slide.discount}
                </div>
              </div>

              
              <div className="w-full md:w-1/2 text-center md:text-left z-10">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                  Explore a wide range of health & wellness essentials delivered to your door.
                </p>
                {/* <button className="bg-[#3F51B5] text-white px-6 py-3 rounded-xl text-base font-bold shadow-lg hover:bg-[#303F9F] transition duration-300">
                  Shop Now
                </button> */}
                {/* <button
  onClick={() => navigate("/medicines-and-more")}
  className="bg-[#3F51B5] text-white px-6 py-3 rounded-xl text-base font-bold shadow-lg hover:bg-[#303F9F] transition duration-300"
>
  Shop Now
</button> */}
<Link
  to="/medicines-and-more"
  className="bg-[#3F51B5] text-white px-6 py-3 rounded-xl text-base font-bold shadow-lg hover:bg-[#303F9F] transition duration-300"
>
  Shop Now
</Link>

              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;

