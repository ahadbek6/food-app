import ContactUs from "../assets/Images/contact_us.png";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-around gap-4 lg:items-center lg:mx-auto pt-20 pl-14 pb-10">
      <img
        className="scale-110 mx-auto h-72 md:scale-125 md:h-96 lg:pl-8"
        src={ContactUs}
        alt="Contact us"
      />

      <div className="relative mx-auto flex flex-col justify-center w-4/6 lg:w-3/6 overflow-hidden">
        <div className="w-full p-6 m-auto rounded-md bg-dark_bg_2 hover:shadow-xl hover:shadow-primary ring-primary lg:max-w-xl transition ease-in-out duration-500">
          <h1 className="text-3xl font-semibold text-center text-orange-100 bg-primary p-4 m-4 rounded-md uppercase">
            Contact Us
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label>
                <span className="text-white">Your name</span>
                <input
                  type="text"
                  name="name"
                  className="
            w-full
            block px-5 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-orange-400 text-black focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40
          "
                  placeholder="Name"
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="text-white">Email address</span>
                <input
                  name="email"
                  type="email"
                  className="
            block
            w-full
            mt-2 px-5 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-orange-400 text-black focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40
          "
                  placeholder="...@gmail.com"
                  required
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="text-white">Message</span>
                <textarea
                  name="message"
                  className="
                  text-black
            block
            w-full
            mt-1 px-5 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40
          "
                  placeholder="Type your message here..."
                  rows="5"
                ></textarea>
              </label>
            </div>

            <div className="mb-2 py-2">
              <button type="submit">
                <a
                  href="/"
                  className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 mt-2 cursor-pointer border-b-4 border-l-2 active:border-primary active:shadow-none shadow-lg bg-gradient-to-tr from-primary to-primary border-primary text-white"
                >
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-16 group-hover:h-16 sm:group-hover:w-20 sm:group-hover:h-20 md:group-hover:w-24 md:group-hover:h-24 lg:group-hover:w-32 lg:group-hover:h-32 opacity-10"></span>
                  <span className="relative">Submit</span>
                </a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
