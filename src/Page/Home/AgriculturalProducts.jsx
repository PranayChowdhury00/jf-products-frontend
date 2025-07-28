import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const AgriculturalProducts = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const products = [
    {
      id: 1,
      name: "Fresh Carrots",
      price: "$5.99 / kg",
      image:
        "https://farmher.com/wp-content/uploads/2024/04/carrots_adobe-stock.webp",
    },
    {
      id: 2,
      name: "Organic Potatoes",
      price: "$3.50 / kg",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ50kOIf3s2YknST25PHxiPKL1yHPqQwo2zkQ&s",
    },
    {
      id: 3,
      name: "Green Spinach",
      price: "$2.99 / bunch",
      image:
        "https://cdn.britannica.com/30/82530-050-79911DD4/Spinach-leaves-vitamins-source-person.jpg",
    },
    {
      id: 4,
      name: "Ripe Tomatoes",
      price: "$4.20 / kg",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5B62fXmxWeGjDSdcvmGf3WP1QAb9Duqty2A&s",
    },
    {
      id: 5,
      name: "Golden Corn",
      price: "$2.75 / piece",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZ5WYZv7Lld0bAfWVPoEEWp88R1B5x9GlkQ&s",
    },
  ];

  return (
    <div className="my-12 px-4 lg:px-16 mb-10" data-aos="fade-up">
      <h2 className="text-3xl font-bold  mb-8">
        Agricultural Products
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              className="card bg-base-100 shadow-md"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <figure>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className="text-lg font-semibold text-green-600">
                  {product.price}
                </p>
                <div className="card-actions ">
                  <button className="btn bg-[#B0DD1D] text-black hover:bg-yellow-500 border-none">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AgriculturalProducts;
