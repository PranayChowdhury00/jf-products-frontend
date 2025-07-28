import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    text: "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast (400ft.) Value for money and easy to install. Happy with the product",
    author: "Samuel Varughese",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  // Add more testimonials if you like
];

const TestimonialSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={20}
        slidesPerView={1}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-100 p-6 rounded-md">
              {/* Left side - Text */}
              <div className="w-full md:w-2/3">
                <div className="text-green-500 text-4xl mb-4">❝</div>
                <p className="text-gray-800 text-lg mb-4">{item.text}</p>
                <div className="text-black font-semibold">- {item.author}</div>
              </div>

              {/* Right side - Image */}
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src={item.image}
                  alt="Customer"
                  className="w-64 h-auto object-cover rounded-md"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSection;
