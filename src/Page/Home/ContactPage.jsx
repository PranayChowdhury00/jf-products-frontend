const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Contact Form */}
        <form className="w-full md:w-1/2 bg-[#293361] text-white shadow-md rounded-lg p-6 space-y-5">
          <div>
            <label className="block mb-1 font-semibold">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>

        {/* Right: Map */}
        <div className="w-full md:w-1/2 h-[400px] rounded-lg overflow-hidden">
          <iframe
            title="Map of Dhaka"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.537752038009!2d90.40441747434527!3d23.7983932866157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7aef17fd597%3A0x76c10e6172a236c!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1695718065113!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
