import { Twitter, Linkedin, Youtube, Facebook } from "lucide-react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div id="contact" className=" py-20 px-5 text-center">
        <Navbar />
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Have Question In Mind? <br />
        Let Us Help You
      </h2>

      <form className="mt-10 flex justify-center mb-30">
        <div className="flex bg-white rounded-full shadow-md overflow-hidden max-w-lg w-full">
          <input
            type="email"
            placeholder="yourmail@gmail.com"
            className="flex-grow px-6 py-3 outline-none text-gray-700"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white font-semibold px-6 py-3"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-left text-sm text-gray-700 max-w-6xl mx-auto">
        <div>
          <h3 className="font-bold text-gray-900 mb-3">IEEE FOODIES</h3>
          <div className="flex gap-4 text-gray-600">
            <Twitter className="w-5 h-5" />
            <Linkedin className="w-5 h-5" />
            <Youtube className="w-5 h-5" />
            <Facebook className="w-5 h-5" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p>Quality</p>
          <p>Help</p>
          <p>Share</p>
          <p>Careers</p>
          <p>Work</p>
          <p>Testimonials</p>
        </div>

        <div className="flex flex-col gap-2">
          <p>246-5333-7783</p>
          <p>ieee@food.com</p>
          <p>ieeeusers@food.com</p>
          <p>contactieee@food.com</p>
        </div>

        <div className="flex flex-col gap-2">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
