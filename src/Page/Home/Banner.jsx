import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  const banners = [
    {
      id: 1,
      img:'https://img.freepik.com/premium-photo/colorful-composition-blue-wall-with-black-shelf-design-accessories-decorations-vases-with_1353756-5577.jpg?semt=ais_hybrid&w=740',
      title: "Stylish Summer Sale!",
      desc: "Explore the latest summer fashion with up to 50% off. Don't miss out!",
    },
    {
      id: 2,
      img: "https://www.letsbeco.com/cdn/shop/articles/NATURAL_LIVING_ENVIRONMENT-FRIENDLY_HOME_AND_PERSONAL_PRODUCTS.jpg?v=1699614232",
      title: "New Arrivals for Winter",
      desc: "Keep warm and stylish with our latest winter collection.",
    },
    {
      id: 3,
      img: "https://sc04.alicdn.com/kf/H9e4e26db0a95490aa7077fc2a0438633p.jpg",
      title: "Limited Time Offer!",
      desc: "Grab your favorite gadgets at unbeatable prices before the deal ends.",
    },
  ];

  return (
    <div className="bg-base-200">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="hero min-h-screen ">
              <div className="hero-content flex-col lg:flex-row gap-10 px-6 bg-gray-300 rounded-md">
                <img
                  src={banner.img}
                  className="max-w-sm rounded-lg shadow-2xl w-full"
                  alt="Banner"
                />
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">{banner.title}</h1>
                  <p className="py-6">{banner.desc}</p>
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

export default Banner;
