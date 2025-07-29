import { FaInstagram, FaYoutube } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="text-white w-full">
      <div className="bg-blue-900">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Column 1 */}
          <div className="flex flex-col items-center md:items-start justify-center">
            <h2 className="text-xl font-bold mb-2">Join Our JF Products</h2>
            <p className="mb-4 text-sm">
              We’ll tell you about store updates and discounts.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded mb-3 max-w-sm border-2 text-white"
            />
            <div className="flex items-start gap-2 text-sm mb-4">
              <input type="checkbox" id="subscribe" />
              <label htmlFor="subscribe">
                Yes, subscribe me to your newsletter.
              </label>
            </div>
            <button className="bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-200">
              Join Now
            </button>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center md:items-center justify-center">
            <h2 className="text-xl font-bold mb-2">Information</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#shop" className="hover:underline">Shop</a></li>
              <li><a href="#story" className="hover:underline">Our Story</a></li>
              <li><a href="#blog" className="hover:underline">Blogs</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center md:items-center justify-center">
            <h2 className="text-xl font-bold mb-2">Helpful</h2>
            <ul className="space-y-2 text-sm flex flex-col items-center">
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Shipping Policy</a></li>
              <li><a href="#" className="hover:underline">My Account</a></li>
            </ul>
          </div>
        </div>

        {/* Contact / Branch Section - responsive */}
        <div className="py-5 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4 text-center md:text-left">
          {/* logo + text */}
          <div className="flex flex-col md:flex-row items-center gap-5">
            {/* logo */}
            <div>
              <h1 className="text-4xl">JF</h1>
            </div>
            {/* text */}
            <div>
              <h1 className="text-xl font-bold py-2">Our Branches</h1>
              <p className="text-neutral-300">
                Coimbatore, Chennai, Hyderabad, Goa, Kochi
              </p>
            </div>
          </div>

          {/* contact */}
          <div>
            <button className="btn bg-[#B0DD1D]">Contact us</button>
          </div>
        </div>
      </div>

      {/* Bottom Section - responsive */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4 py-4 text-center md:text-left">
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} JF Products. All rights reserved.
        </div>
        <div className="flex gap-5">
          <TiSocialFacebook className="text-gray-500 text-xl" />
          <FaInstagram className="text-gray-500 text-xl" />
          <FaYoutube className="text-gray-500 text-xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
