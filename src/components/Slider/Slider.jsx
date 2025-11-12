import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Slider = () => {
  const [isLoading, setIsLoading] = useState(true);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1560449752-b5d5c1c89cee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Nurture Your Green Space",
      description:
        "Discover the joy of indoor gardening with our expert care tips and premium plants for your home environment.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Modern Home Architecture",
      description:
        "Experience the perfect blend of contemporary design and functional living spaces for modern families.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1706164971293-2d58eb66242b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Sustainable Living Spaces",
      description:
        "Create eco-friendly environments that promote wellbeing and harmony with nature in urban settings.",
    },
  ];

  return (
    <section className="relative h-[700px] overflow-hidden bg-gray-100">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-50 flex items-center justify-center z-50">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-700 text-lg">Loading Beautiful Spaces...</p>
          </div>
        </div>
      )}

      {/* Main Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1200}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          renderBullet: (index, className) => {
            return `<span class="${className} bg-white/80 hover:bg-white"></span>`;
          },
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        onInit={() => setIsLoading(false)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image - No filters or overlays */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Content Container */}
              <div className="relative z-10 h-full flex items-center justify-start">
                <div className="max-w-2xl ml-8 md:ml-16 lg:ml-24 transform transition-all duration-700 ease-out">
                  {/* Main Heading */}
                  <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6 text-white opacity-0 animate-fade-in [animation-delay:500ms] drop-shadow-2xl">
                    {slide.heading}
                  </h1>

                  {/* Description */}
                  <p className="text-lg md:text-xl lg:text-xl mb-8 text-[#FF385C] opacity-0 animate-fade-in [animation-delay:700ms] leading-relaxed drop-shadow-lg max-w-lg">
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <div className="opacity-0 animate-fade-in [animation-delay:900ms]">
                    <button className="bg-[#FF385C] px-5 py-2 text-white">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="swiper-button-next !right-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-12 h-12 transition-all duration-300 after:!text-white after:!text-lg"></div>
      <div className="swiper-button-prev !left-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-12 h-12 transition-all duration-300 after:!text-white after:!text-lg"></div>

      {/* {/* Custom Pagination */}
      <div className="swiper-pagination !bottom-8"></div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Slider;
