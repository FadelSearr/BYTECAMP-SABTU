import pickmeals from "../images/pick-meals-image.png";
import choose from "../images/choose-image.png";
import delivery from "../images/delivery-image.png";

const Work = () => {
  return (
    <div id="work" className="py-45 px-5 bg-white-50 text-center">
      <p className="text-yellow-500 font-semibold text-sm">Work</p>
      <h2 className="text-4xl font-bold text-gray-800 mt-2">How It Works</h2>
      <p className="text-gray-500 max-w-xl mx-auto mt-3 mb-25">
        We process your food quickly, so it can be consumed immediately.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
       
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <img src={pickmeals} alt="Pick Meals" className="w-30 h-30 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">Pick Meals</h3>
          <p className="text-gray-500 mt-2 text-sm">
            You can take your own food and enjoy it steadily.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <img src={choose} alt="Choose How Often" className="w-30 h-30 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">Choose How Often</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Choose the top-rated food.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <img src={delivery} alt="Fast Deliveries" className="w-30 h-30 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">Fast Deliveries</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Fast delivery and free shipping.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
