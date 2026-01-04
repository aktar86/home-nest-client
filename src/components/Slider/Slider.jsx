import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // আইকন যোগ করা হয়েছে

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useNavigate } from "react-router";

const Slider = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1560449752-b5d5c1c89cee?q=80&w=1170&auto=format&fit=crop",
      heading: "Find Your Perfect Home",
      description:
        "Explore the most luxurious and affordable properties in the heart of the city.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1175&auto=format&fit=crop",
      heading: "Modern Architecture Design",
      description:
        "Experience the perfect blend of contemporary design and functional living spaces.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1706164971293-2d58eb66242b?q=80&w=1332&auto=format&fit=crop",
      heading: "Eco-Friendly Living",
      description:
        "Sustainable environments that promote wellbeing and harmony with nature.",
    },
  ];

  return (
    <div className="pt-10">
      <section className="relative h-[70vh] w-[95%] mx-auto  overflow-hidden rounded-2xl  group">
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-50">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          speed={1000}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          onInit={() => setIsLoading(false)}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Overlay for visibility */}
                  <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>
                </div>

                <div className="relative z-10 h-full flex items-center px-10 md:px-20">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-slide-up">
                      {slide.heading}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 animate-slide-up delay-200">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4 animate-slide-up delay-500">
                      <button
                        onClick={() => navigate("/all-properties")}
                        className="btn btn-primary rounded-full px-8 border-none bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        View Properties
                      </button>
                      {/* Secondary Button */}
                      <button
                        onClick={() => navigate("/contact-us")}
                        className="btn btn-secondary px-8"
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Improved Arrow Buttons - Only visible on hover */}
        <div className="button-prev absolute left-5 top-1/2 -translate-y-1/2 z-30 cursor-pointer w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white text-white hover:text-black backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg border border-white/30">
          <FaChevronLeft size={20} />
        </div>

        <div className="button-next absolute right-5 top-1/2 -translate-y-1/2 z-30 cursor-pointer w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white text-white hover:text-black backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg border border-white/30">
          <FaChevronRight size={20} />
        </div>

        {/* Custom Pagination Container */}
        <div className="custom-pagination absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2"></div>

        <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-500 { animation-delay: 0.4s; }
        
        /* Swiper Pagination Style */
        .custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.5;
          border-radius: 50%;
          transition: all 0.3s;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 30px;
          border-radius: 10px;
          opacity: 1;
          background: #3b82f6; /* Adjust based on primary color */
        }
      `}</style>
      </section>
    </div>
  );
};

export default Slider;
