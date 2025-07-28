import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const LandscapeProducts = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const products = [
    {
      id: 1,
      name: "Garden Shovel",
      price: "$12.99",
      image:
        "https://img.drz.lazcdn.com/static/bd/p/ff45fb8b8b886d3de327e444ff6e2f72.jpg_960x960q80.jpg_.webp",
    },
    {
      id: 2,
      name: "Lawn Mower",
      price: "$199.99",
      image:
        "https://cdn.mos.cms.futurecdn.net/hUoSSQLzrxcmcFsWcwiRVe.jpg",
    },
    {
      id: 3,
      name: "Landscape Stones",
      price: "$25.00 / pack",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgFE0tYwQPvdbhqOqdE5pBJ0cxaegBuPBBEA&s",
    },
    {
      id: 4,
      name: "Tree Pruner",
      price: "$45.50",
      image:
        "https://m.media-amazon.com/images/I/71ggo08b-VL._AC_SL1500_.jpg",
    },
    {
      id: 5,
      name: "Grass Seed Mix",
      price: "$18.75 / bag",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKIIXnopix_IJMU_eUUQhnmCCJ9g3O85CONQ&s",
    },
  ];

  return (
    <div className="my-12 px-4 lg:px-16" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-8">Landscape Products</h2>

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
                <p className="text-lg font-semibold text-green-600">{product.price}</p>
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

export default LandscapeProducts;
