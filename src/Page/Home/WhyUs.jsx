import { useEffect } from "react";
import { RiSettings2Line } from "react-icons/ri";
import { SiNovu } from "react-icons/si";
import { SlBadge } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="max-w-7xl mx-auto mb-20 px-4">
      <div>
        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h1 className="text-3xl font-bold py-4">Why Us</h1>
          <p className="text-gray-600 leading-6">
            We specialize in delivering durable and innovative fencing solutions built to last. <br />
            With a focus on quality and trust, we help secure spaces across industries and <br />
            communities.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            className="p-6 bg-blue-200 rounded-2xl h-[340px] hover:scale-105 transition-transform duration-300 shadow-md"
            data-aos="fade-up"
          >
            <SlBadge className="text-4xl mb-4" />
            <h1 className="text-xl font-bold pb-3">
              Unmatched Durability with Corrosion-Free Technology
            </h1>
            <p className="text-gray-800 text-sm leading-6">
              Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="p-6 bg-[#002B55] text-white rounded-2xl h-[340px] hover:scale-105 transition-transform duration-300 shadow-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <RiSettings2Line className="text-4xl mb-4" />
            <h1 className="text-xl font-bold pb-3">Customer-Centric Approach</h1>
            <p className="text-gray-300 text-sm leading-6">
              At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="p-6 bg-blue-200 rounded-2xl h-[340px] hover:scale-105 transition-transform duration-300 shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <SiNovu className="text-4xl mb-4" />
            <h1 className="text-xl font-bold pb-3">Innovative and Diverse Product Range</h1>
            <p className="text-gray-800 text-sm leading-6">
              We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
       <button className="btn bg-[#B0DD1D] ">Contact Us</button>
      </div>

    </div>
  );
};

export default WhyUs;
