import userImage from "../images/john-doe-image.png"; 
import { Star } from "lucide-react";
import Navbar from "./Navbar";

const Testimonials = () => {
  return (
    <div id="testimonials" className="py-24 px-5 text-center">
        <Navbar/>
      <p className="text-yellow-500 font-semibold text-sm">Testimonial</p>
      <h2 className="text-4xl font-bold text-gray-800 mt-2">What They Are Saying</h2>
      <p className="text-gray-500 max-w-xl mx-auto mt-3 mb-12 text-base">
        We already have many testimonials from our trusted customers.
      </p>

      <div className="bg-white max-w-2xl mx-auto rounded-2xl shadow-md px-8 py-10">
        <img
          src={userImage}
          alt="Testimonial User"
          className="w-16 h-16 mx-auto rounded-full mb-4"
        />
        <p className="text-gray-700 font-medium text-sm md:text-base">
          IEEE Foodies has many delicious menu recommendations that you can enjoy together.
        </p>

        <div className="flex justify-center mt-4 mb-2">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star key={idx} className="w-5 h-5 fill-yellow-500 text-yellow-500 mx-1" />
          ))}
        </div>

        <p className="text-gray-900 font-semibold mt-2">John Doe</p>
      </div>
    </div>
  );
};

export default Testimonials;
