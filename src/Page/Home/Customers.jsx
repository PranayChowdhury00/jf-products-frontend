import { MdOutlineWorkspacePremium, MdReviews } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Customers = () => {
  return (
    <div className="max-w-7xl mx-auto mb-10 px-4">
      <div className="bg-[#002B55] min-h-[300px] rounded-2xl flex flex-col justify-center items-center text-center px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-100 mb-8">
          Trusted by over 6K+ customers
        </h1>

        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
          {/* col-1 */}
          <div className="flex items-center gap-2">
            <MdOutlineWorkspacePremium className="text-5xl text-white" />
            <div>
              <h1 className="text-lg font-medium text-gray-100">Premium</h1>
              <p className="text-gray-300">Product</p>
            </div>
          </div>

          {/* col-2 */}
          <div className="flex items-center gap-2">
            <MdReviews className="text-5xl text-white" />
            <div>
              <h1 className="text-lg font-medium text-gray-100">4000+</h1>
              <p className="text-gray-300">Google Review</p>
            </div>
          </div>

          {/* col-3 */}
          <div className="flex items-center gap-2">
            <TbTruckDelivery className="text-5xl text-white" />
            <div>
              <h1 className="text-lg font-medium text-gray-100">Delivery</h1>
              <p className="text-gray-300">All over India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
